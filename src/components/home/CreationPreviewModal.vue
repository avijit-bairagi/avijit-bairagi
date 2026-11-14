<template>
  <div 
    v-if="creation"
    class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/80 backdrop-blur-md"
    @click.self="$emit('close')"
  >
    <div 
      class="relative w-full max-w-2xl rounded-2xl bg-dark-surface dark:bg-dark-surface light:bg-white border border-dark-border dark:border-dark-border light:border-slate-300 shadow-2xl p-5 sm:p-7 max-h-[90vh] overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <!-- Close Button -->
      <button 
        @click="$emit('close')"
        type="button"
        class="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 border border-dark-border dark:border-dark-border light:border-slate-200 transition-colors focus:outline-none"
        aria-label="Close modal"
      >
        <X class="w-5 h-5" />
      </button>

      <!-- Header with Logo and Name -->
      <div class="flex items-center gap-3.5 mb-4 pr-10">
        <CreationIcon :icon-key="creation.iconKey" />
        <div>
          <div class="flex items-center gap-2">
            <h3 class="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
              {{ creation.name }}
            </h3>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">
              {{ creation.badgeText }}
            </span>
          </div>
          <p class="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mt-0.5">
            {{ creation.tagline }}
          </p>
        </div>
      </div>

      <!-- INTERACTIVE PREVIEW 1: SMART HISAB LEDGER -->
      <div v-if="creation.id === 'smart-hisab'" class="my-5 p-4 rounded-xl bg-dark-bg/90 dark:bg-dark-bg/90 light:bg-slate-50 border border-dark-border dark:border-dark-border light:border-slate-200">
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-dark-border/60 dark:border-dark-border/60 light:border-slate-200">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
              Interactive Smart Hisab Ledger
            </span>
          </div>
          <span class="text-[11px] font-mono text-slate-400">Live Demo</span>
        </div>

        <!-- Ledger Stats Row -->
        <div class="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
          <div class="p-2.5 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-white border border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 text-center">
            <div class="text-[10px] font-mono text-slate-400 uppercase">Net Balance</div>
            <div class="text-sm sm:text-base font-bold font-mono text-emerald-400">
              ${{ netBalance.toLocaleString() }}
            </div>
          </div>
          <div class="p-2.5 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-white border border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 text-center">
            <div class="text-[10px] font-mono text-slate-400 uppercase">Total Income</div>
            <div class="text-sm sm:text-base font-bold font-mono text-sky-400">
              +${{ totalIncome.toLocaleString() }}
            </div>
          </div>
          <div class="p-2.5 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-white border border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 text-center">
            <div class="text-[10px] font-mono text-slate-400 uppercase">Total Expenses</div>
            <div class="text-sm sm:text-base font-bold font-mono text-rose-400">
              -${{ totalExpense.toLocaleString() }}
            </div>
          </div>
        </div>

        <!-- Quick Entry Form -->
        <form @submit.prevent="addEntry" class="flex flex-wrap sm:flex-nowrap gap-2 mb-4">
          <input 
            v-model="newEntryDesc" 
            type="text" 
            placeholder="e.g. Client Payment or Software License" 
            required
            class="flex-1 px-3 py-1.5 rounded-lg text-xs bg-dark-elevated dark:bg-dark-elevated light:bg-white border border-dark-border dark:border-dark-border light:border-slate-300 text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-emerald-400"
          />
          <input 
            v-model.number="newEntryAmount" 
            type="number" 
            min="1" 
            placeholder="Amount ($)" 
            required
            class="w-24 px-3 py-1.5 rounded-lg text-xs bg-dark-elevated dark:bg-dark-elevated light:bg-white border border-dark-border dark:border-dark-border light:border-slate-300 text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-emerald-400"
          />
          <select 
            v-model="newEntryType"
            class="px-2 py-1.5 rounded-lg text-xs bg-dark-elevated dark:bg-dark-elevated light:bg-white border border-dark-border dark:border-dark-border light:border-slate-300 text-white dark:text-white light:text-slate-900 focus:outline-none"
          >
            <option value="income">Income (+)</option>
            <option value="expense">Expense (-)</option>
          </select>
          <button 
            type="submit"
            class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors shrink-0"
          >
            Add Record
          </button>
        </form>

        <!-- Transaction List -->
        <div class="space-y-1.5 max-h-40 overflow-y-auto pr-1">
          <div 
            v-for="(item, idx) in ledgerEntries" 
            :key="idx"
            class="flex items-center justify-between p-2 rounded-lg bg-dark-elevated/60 dark:bg-dark-elevated/60 light:bg-white border border-dark-border/40 dark:border-dark-border/40 light:border-slate-200 text-xs"
          >
            <div class="flex items-center gap-2">
              <span 
                class="w-1.5 h-1.5 rounded-full"
                :class="item.type === 'income' ? 'bg-emerald-400' : 'bg-rose-400'"
              ></span>
              <span class="text-slate-200 dark:text-slate-200 light:text-slate-800 font-medium">
                {{ item.desc }}
              </span>
              <span class="text-[10px] font-mono text-slate-400">
                {{ item.date }}
              </span>
            </div>
            <span 
              class="font-mono font-semibold"
              :class="item.type === 'income' ? 'text-emerald-400' : 'text-rose-400'"
            >
              {{ item.type === 'income' ? '+' : '-' }}${{ item.amount.toLocaleString() }}
            </span>
          </div>
        </div>
      </div>

      <!-- INTERACTIVE PREVIEW 2: ARCADE PLAY (RETRO CANVAS GAME) -->
      <div v-else-if="creation.id === 'arcade-play'" class="my-5 p-4 rounded-xl bg-dark-bg/90 dark:bg-dark-bg/90 light:bg-slate-50 border border-dark-border dark:border-dark-border light:border-slate-200">
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-dark-border/60 dark:border-dark-border/60 light:border-slate-200">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span class="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider">
              Playable Mini Game: Retro Snake
            </span>
          </div>
          <div class="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span>Score: <strong class="text-purple-400">{{ snakeScore }}</strong></span>
            <span>High: <strong class="text-slate-200">{{ snakeHighScore }}</strong></span>
          </div>
        </div>

        <!-- Canvas Container -->
        <div class="flex flex-col items-center">
          <div class="relative rounded-lg overflow-hidden border border-purple-500/30 bg-slate-950">
            <canvas 
              ref="canvasRef" 
              width="300" 
              height="200" 
              class="block"
            ></canvas>

            <div 
              v-if="!gameRunning" 
              class="absolute inset-0 bg-black/75 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center"
            >
              <p class="text-xs font-mono text-purple-300 mb-2">
                {{ gameOver ? 'Game Over!' : 'Play Retro Snake (Arrow Keys / Touch)' }}
              </p>
              <button 
                @click="startSnakeGame"
                type="button"
                class="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs transition-colors shadow-xs"
              >
                {{ gameOver ? 'Play Again' : 'Start Game' }}
              </button>
            </div>
          </div>

          <!-- On-screen directional pads for mobile / touch -->
          <div class="grid grid-cols-3 gap-1.5 w-32 mt-3 sm:hidden">
            <div></div>
            <button @click="setSnakeDir('UP')" class="p-2 rounded bg-dark-elevated border border-dark-border text-slate-200 text-xs text-center">&uarr;</button>
            <div></div>
            <button @click="setSnakeDir('LEFT')" class="p-2 rounded bg-dark-elevated border border-dark-border text-slate-200 text-xs text-center">&larr;</button>
            <button @click="setSnakeDir('DOWN')" class="p-2 rounded bg-dark-elevated border border-dark-border text-slate-200 text-xs text-center">&darr;</button>
            <button @click="setSnakeDir('RIGHT')" class="p-2 rounded bg-dark-elevated border border-dark-border text-slate-200 text-xs text-center">&rarr;</button>
          </div>
        </div>
      </div>

      <!-- Description & Features -->
      <div class="space-y-4">
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-brand-400 font-semibold mb-1.5">
            Architecture &amp; Design Overview
          </h4>
          <p class="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
            {{ creation.description }}
          </p>
        </div>

        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
            Key Highlights
          </h4>
          <ul class="space-y-1.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
            <li 
              v-for="(feat, fIdx) in creation.features" 
              :key="fIdx"
              class="flex items-start gap-2"
            >
              <CheckCircle2 class="w-3.5 h-3.5 text-brand-400 mt-0.5 shrink-0" />
              <span>{{ feat }}</span>
            </li>
          </ul>
        </div>

        <!-- Tech Stack -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
            Technologies &amp; Frameworks
          </h4>
          <div class="flex flex-wrap gap-1.5">
            <span 
              v-for="tech in creation.technologies" 
              :key="tech"
              class="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-dark-border dark:border-dark-border light:border-slate-200"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- Action Button -->
      <div class="mt-6 pt-4 border-t border-dark-border/60 dark:border-dark-border/60 light:border-slate-200 flex justify-end">
        <button 
          @click="$emit('close')"
          type="button"
          class="px-4 py-2 rounded-lg bg-dark-elevated dark:bg-dark-elevated light:bg-slate-100 hover:bg-dark-hover dark:hover:bg-dark-hover light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 text-xs font-medium border border-dark-border transition-colors"
        >
          Close Preview
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { X, CheckCircle2 } from 'lucide-vue-next'
import type { CreatedItem } from '@/data/creations'
import CreationIcon from '@/components/home/CreationIcon.vue'

const props = defineProps<{
  creation: CreatedItem | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

// --- SMART HISAB STATE & LOGIC ---
interface LedgerEntry {
  desc: string
  amount: number
  type: 'income' | 'expense'
  date: string
}

const ledgerEntries = ref<LedgerEntry[]>([
  { desc: 'Invoice #1042 - bKash Switch Integration', amount: 3200, type: 'income', date: 'Today' },
  { desc: 'AWS & Cloud Hosting Services', amount: 450, type: 'expense', date: 'Yesterday' },
  { desc: 'Fintech API Consulting Retainer', amount: 1800, type: 'income', date: 'Oct 28' },
  { desc: 'Docker & Microservices Tooling License', amount: 120, type: 'expense', date: 'Oct 25' }
])

const newEntryDesc = ref('')
const newEntryAmount = ref<number | null>(null)
const newEntryType = ref<'income' | 'expense'>('income')

const totalIncome = computed(() => 
  ledgerEntries.value.filter(e => e.type === 'income').reduce((sum, e) => sum + e.amount, 0)
)
const totalExpense = computed(() => 
  ledgerEntries.value.filter(e => e.type === 'expense').reduce((sum, e) => sum + e.amount, 0)
)
const netBalance = computed(() => totalIncome.value - totalExpense.value)

const addEntry = () => {
  if (!newEntryDesc.value || !newEntryAmount.value) return
  ledgerEntries.value.unshift({
    desc: newEntryDesc.value,
    amount: newEntryAmount.value,
    type: newEntryType.value,
    date: 'Just now'
  })
  newEntryDesc.value = ''
  newEntryAmount.value = null
}

// --- ARCADE PLAY (SNAKE CANVAS GAME) ---
const canvasRef = ref<HTMLCanvasElement | null>(null)
const gameRunning = ref(false)
const gameOver = ref(false)
const snakeScore = ref(0)
const snakeHighScore = ref(120)

let gameInterval: any = null
let snake = [{ x: 150, y: 100 }, { x: 140, y: 100 }, { x: 130, y: 100 }]
let dx = 10
let dy = 0
let food = { x: 200, y: 100 }
const gridSize = 10

const drawCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Background
  ctx.fillStyle = '#090D16'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Draw Grid lines subtly
  ctx.strokeStyle = '#1E293B33'
  ctx.lineWidth = 1
  for (let x = 0; x < canvas.width; x += gridSize) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, canvas.height)
    ctx.stroke()
  }
  for (let y = 0; y < canvas.height; y += gridSize) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(canvas.width, y)
    ctx.stroke()
  }

  // Draw Food
  ctx.fillStyle = '#A855F7'
  ctx.shadowColor = '#A855F7'
  ctx.shadowBlur = 8
  ctx.fillRect(food.x, food.y, gridSize, gridSize)
  ctx.shadowBlur = 0

  // Draw Snake
  snake.forEach((part, index) => {
    ctx.fillStyle = index === 0 ? '#C084FC' : '#8B5CF6'
    ctx.fillRect(part.x, part.y, gridSize, gridSize)
  })
}

const generateFood = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  food = {
    x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
    y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
  }
}

const setSnakeDir = (dir: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT') => {
  if (dir === 'UP' && dy === 0) { dx = 0; dy = -gridSize }
  if (dir === 'DOWN' && dy === 0) { dx = 0; dy = gridSize }
  if (dir === 'LEFT' && dx === 0) { dx = -gridSize; dy = 0 }
  if (dir === 'RIGHT' && dx === 0) { dx = gridSize; dy = 0 }
}

const updateSnake = () => {
  if (!gameRunning.value) return
  const canvas = canvasRef.value
  if (!canvas) return

  const head = { x: snake[0].x + dx, y: snake[0].y + dy }

  // Wall collision check
  if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
    endSnakeGame()
    return
  }

  // Self collision
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      endSnakeGame()
      return
    }
  }

  snake.unshift(head)

  // Food eaten
  if (head.x === food.x && head.y === food.y) {
    snakeScore.value += 10
    if (snakeScore.value > snakeHighScore.value) {
      snakeHighScore.value = snakeScore.value
    }
    generateFood()
  } else {
    snake.pop()
  }

  drawCanvas()
}

const startSnakeGame = () => {
  snake = [{ x: 150, y: 100 }, { x: 140, y: 100 }, { x: 130, y: 100 }]
  dx = gridSize
  dy = 0
  snakeScore.value = 0
  gameOver.value = false
  gameRunning.value = true
  generateFood()
  drawCanvas()

  if (gameInterval) clearInterval(gameInterval)
  gameInterval = setInterval(updateSnake, 100)
}

const endSnakeGame = () => {
  gameRunning.value = false
  gameOver.value = true
  if (gameInterval) clearInterval(gameInterval)
  drawCanvas()
}

// Global Keydown Handler
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.creation) {
    emit('close')
    return
  }

  if (gameRunning.value) {
    if (e.key === 'ArrowUp') { e.preventDefault(); setSnakeDir('UP') }
    else if (e.key === 'ArrowDown') { e.preventDefault(); setSnakeDir('DOWN') }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); setSnakeDir('LEFT') }
    else if (e.key === 'ArrowRight') { e.preventDefault(); setSnakeDir('RIGHT') }
  }
}

watch(
  () => props.creation,
  (val) => {
    if (typeof document !== 'undefined') {
      if (val) {
        document.body.style.overflow = 'hidden'
        if (val.id === 'arcade-play') {
          setTimeout(drawCanvas, 50)
        }
      } else {
        document.body.style.overflow = ''
        if (gameInterval) clearInterval(gameInterval)
        gameRunning.value = false
      }
    }
  }
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (gameInterval) clearInterval(gameInterval)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>
