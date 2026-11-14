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
    description: 'Fast, lightweight browser games and interactive party experiences built for instant play.',
    iconKey: 'dhamaka-game',
    accentColor: '#84CC16',
    url: 'https://games.dhamaka.site/'
  },
  {
    id: 'daylo',
    name: 'Daylo',
    description: 'Daily planner and task organizer built to keep everyday work structured and focused.',
    iconKey: 'daylo',
    accentColor: '#0284C7'
  },
  {
    id: 'smart-hisab',
    name: 'Smart Hisab',
    description: 'Digital bookkeeping ledger for tracking daily income, expenses, and cash balances.',
    iconKey: 'smart-hisab',
    accentColor: '#059669'
  }
]
