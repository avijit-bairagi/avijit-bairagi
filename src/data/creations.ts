export interface CreatedItem {
  id: string
  name: string
  description: string
  iconKey: 'dhamaka-game' | 'daylo' | 'smart-hisab'
  accentColor: string
  url?: string
}

export const creationsList: CreatedItem[] = [
  {
    id: 'dhamaka-game',
    name: 'Game | Dhamaka',
    description: 'Game night, one link away — fast, lightweight browser games and interactive party experiences built for instant play.',
    iconKey: 'dhamaka-game',
    accentColor: '#84CC16',
    url: 'https://games.dhamaka.site/'
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
