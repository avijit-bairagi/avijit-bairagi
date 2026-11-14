export interface CreatedItem {
  id: string
  name: string
  description: string
  iconKey: 'dhamaka-game' | 'daylo' | 'smart-hisab'
  accentColor: string
}

export const creationsList: CreatedItem[] = [
  {
    id: 'dhamaka-game',
    name: 'Dhamaka | Game',
    description: 'Fast, lightweight browser games and interactive arcade experiences built with smooth 60 FPS canvas physics.',
    iconKey: 'dhamaka-game',
    accentColor: '#7C3AED'
  },
  {
    id: 'daylo',
    name: 'Daylo',
    description: 'Clean daily planner, task organizer, and habit companion designed to keep everyday work calm and focused.',
    iconKey: 'daylo',
    accentColor: '#0284C7'
  },
  {
    id: 'smart-hisab',
    name: 'Smart Hisab',
    description: 'Simple digital bookkeeping and cash-flow ledger for tracking daily income, expenses, and balances effortlessly.',
    iconKey: 'smart-hisab',
    accentColor: '#059669'
  }
]
