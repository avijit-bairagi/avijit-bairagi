<template>
  <div 
    v-if="creation"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/60 backdrop-blur-xs"
    @click.self="$emit('close')"
  >
    <div 
      class="relative w-full max-w-xl rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border shadow-2xl p-6 max-h-[90vh] overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <!-- Close Button -->
      <button 
        @click="$emit('close')"
        type="button"
        class="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-dark-elevated transition-colors focus:outline-none"
        aria-label="Close modal"
      >
        <X class="w-4 h-4" />
      </button>

      <!-- Header with Logo and Name -->
      <div class="flex items-center gap-3.5 mb-4 pr-10">
        <CreationIcon :icon-key="creation.iconKey" />
        <div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white">
            {{ creation.name }}
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
            {{ creation.description }}
          </p>
        </div>
      </div>

      <!-- SMART HISAB INTERACTIVE PREVIEW -->
      <div v-if="creation.id === 'smart-hisab'" class="my-4 p-4 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border">
        <div class="grid grid-cols-3 gap-2.5 mb-4">
          <div class="p-2.5 rounded-lg bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-center">
            <div class="text-[11px] text-slate-500">Balance</div>
            <div class="text-sm font-bold text-emerald-600 dark:text-emerald-400">${{ netBalance.toLocaleString() }}</div>
          </div>
          <div class="p-2.5 rounded-lg bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-center">
            <div class="text-[11px] text-slate-500">Income</div>
            <div class="text-sm font-bold text-sky-600 dark:text-sky-400">+${{ totalIncome.toLocaleString() }}</div>
          </div>
          <div class="p-2.5 rounded-lg bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-center">
            <div class="text-[11px] text-slate-500">Expense</div>
            <div class="text-sm font-bold text-rose-600 dark:text-rose-400">-${{ totalExpense.toLocaleString() }}</div>
          </div>
        </div>

        <form @submit.prevent="addEntry" class="flex flex-wrap sm:flex-nowrap gap-2 mb-3">
          <input 
            v-model="newEntryDesc" 
            type="text" 
            placeholder="Entry note" 
            required
            class="flex-1 px-3 py-1.5 rounded-lg text-xs bg-white dark:bg-dark-surface border border-slate-300 dark:border-dark-border text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
          />
          <input 
            v-model.number="newEntryAmount" 
            type="number" 
            min="1" 
            placeholder="Amount" 
            required
            class="w-24 px-3 py-1.5 rounded-lg text-xs bg-white dark:bg-dark-surface border border-slate-300 dark:border-dark-border text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
          />
          <select 
            v-model="newEntryType"
            class="px-2 py-1.5 rounded-lg text-xs bg-white dark:bg-dark-surface border border-slate-300 dark:border-dark-border text-slate-900 dark:text-white focus:outline-none"
          >
            <option value="income">+</option>
            <option value="expense">-</option>
          </select>
          <button 
            type="submit"
            class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors"
          >
            Add
          </button>
        </form>

        <div class="space-y-1.5 max-h-36 overflow-y-auto">
          <div 
            v-for="(item, idx) in ledgerEntries" 
            :key="idx"
            class="flex items-center justify-between px-3 py-2 rounded-lg bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-xs"
          >
            <span class="text-slate-800 dark:text-slate-200 font-medium">{{ item.desc }}</span>
            <span 
              class="font-mono font-semibold"
              :class="item.type === 'income' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'"
            >
              {{ item.type === 'income' ? '+' : '-' }}${{ item.amount.toLocaleString() }}
            </span>
          </div>
        </div>
      </div>

      <!-- DAYLO INTERACTIVE PREVIEW -->
      <div v-else-if="creation.id === 'daylo'" class="my-4 p-4 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border space-y-3">
        <form @submit.prevent="addTask" class="flex gap-2">
          <input
            v-model="newTaskTitle"
            type="text"
            placeholder="Add a task for today..."
            class="flex-1 px-3 py-1.5 rounded-lg text-xs bg-white dark:bg-dark-surface border border-slate-300 dark:border-dark-border text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
          />
          <button
            type="submit"
            class="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs transition-colors"
          >
            Add
          </button>
        </form>
        <div class="space-y-1.5">
          <label
            v-for="(task, idx) in dayloTasks"
            :key="idx"
            class="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-xs cursor-pointer"
          >
            <input type="checkbox" v-model="task.done" class="rounded text-sky-600 focus:ring-0" />
            <span :class="task.done ? 'line-through text-slate-400' : 'text-slate-800 dark:text-slate-200'">
              {{ task.title }}
            </span>
          </label>
        </div>
      </div>

      <!-- DHAMAKA GAME INTERACTIVE PREVIEW -->
      <div v-else-if="creation.id === 'dhamaka-game'" class="my-4 p-4 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border flex flex-col items-center">
        <div class="w-full flex items-center justify-between text-xs text-slate-500 mb-2">
          <span>Score: <strong class="text-violet-600 dark:text-violet-400">{{ snakeScore }}</strong></span>
          <span>Best: <strong class="text-slate-800 dark:text-slate-200">{{ snakeHighScore }}</strong></span>
        </div>
        <div class="relative rounded-lg overflow-hidden border border-slate-300 dark:border-dark-border bg-slate-950">
          <canvas ref="canvasRef" width="300" height="200" class="block"></canvas>
          <div 
            v-if="!gameRunning" 
            class="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 text-center"
          >
            <p class="text-xs text-slate-200 mb-2">
              {{ gameOver ? 'Game Over!' : 'Use Arrow Keys to Play' }}
            </p>
            <button 
              @click="startSnakeGame"
              type="button"
              class="px-4 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs transition-colors"
            >
              {{ gameOver ? 'Play Again' : 'Start Game' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { X } from 'lucide-vue-next'
import type { CreatedItem } from '@/data/creations'
import CreationIcon from '@/components/home/CreationIcon.vue'

const props = defineProps<{
  creation: CreatedItem | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

// Smart Hisab state
const ledgerEntries = ref([
  { desc: 'Client Milestone', amount: 1500, type: 'income' as const },
  { desc: 'Cloud Hosting', amount: 120, type: 'expense' as const }
])
const newEntryDesc = ref('')
const newEntryAmount = ref<number | null>(null)
const newEntryType = ref<'income' | 'expense'>('income')

const totalIncome = computed(() => ledgerEntries.value.filter(e => e.type === 'income').reduce((s, e) => s + e.amount, 0))
const totalExpense = computed(() => ledgerEntries.value.filter(e => e.type === 'expense').reduce((s, e) => s + e.amount, 0))
const netBalance = computed(() => totalIncome.value - totalExpense.value)

const addEntry = () => {
  if (!newEntryDesc.value || !newEntryAmount.value) return
  ledgerEntries.value.unshift({
    desc: newEntryDesc.value,
    amount: newEntryAmount.value,
    type: newEntryType.value
  })
  newEntryDesc.value = ''
  newEntryAmount.value = null
}

// Daylo state
const dayloTasks = ref([
  { title: 'Review payment switch specs', done: true },
  { title: 'Sync with backend team', done: false },
  { title: 'Publish architecture notes', done: false }
])
const newTaskTitle = ref('')
const addTask = () => {
  if (!newTaskTitle.value.trim()) return
  dayloTasks.value.unshift({ title: newTaskTitle.value.trim(), done: false })
  newTaskTitle.value = ''
}

// Dhamaka Game state
const canvasRef = ref<HTMLCanvasElement | null>(null)
const gameRunning = ref(false)
const gameOver = ref(false)
const snakeScore = ref(0)
const snakeHighScore = ref(60)
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
  ctx.fillStyle = '#090D16'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#A855F7'
  ctx.fillRect(food.x, food.y, gridSize, gridSize)
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

const updateSnake = () => {
  if (!gameRunning.value) return
  const canvas = canvasRef.value
  if (!canvas) return
  const head = { x: snake[0].x + dx, y: snake[0].y + dy }
  if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height || snake.slice(1).some(p => p.x === head.x && p.y === head.y)) {
    gameRunning.value = false
    gameOver.value = true
    if (gameInterval) clearInterval(gameInterval)
    drawCanvas()
    return
  }
  snake.unshift(head)
  if (head.x === food.x && head.y === food.y) {
    snakeScore.value += 10
    if (snakeScore.value > snakeHighScore.value) snakeHighScore.value = snakeScore.value
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

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.creation) {
    emit('close')
    return
  }
  if (gameRunning.value) {
    if (e.key === 'ArrowUp' && dy === 0) { e.preventDefault(); dx = 0; dy = -gridSize }
    else if (e.key === 'ArrowDown' && dy === 0) { e.preventDefault(); dx = 0; dy = gridSize }
    else if (e.key === 'ArrowLeft' && dx === 0) { e.preventDefault(); dx = -gridSize; dy = 0 }
    else if (e.key === 'ArrowRight' && dx === 0) { e.preventDefault(); dx = gridSize; dy = 0 }
  }
}

watch(() => props.creation, (val) => {
  if (typeof document !== 'undefined') {
    if (val) {
      document.body.style.overflow = 'hidden'
      if (val.id === 'dhamaka-game') setTimeout(drawCanvas, 50)
    } else {
      document.body.style.overflow = ''
      if (gameInterval) clearInterval(gameInterval)
      gameRunning.value = false
    }
  }
})

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (gameInterval) clearInterval(gameInterval)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>
