export interface Task {
  id: number
  check: boolean
  description: string
}

export interface DailyTasks {
  tasks: Task[]
  date: Date
}

export type ChatMessage = {
  message: string
  onMessageChange?: (newType: string) => void
}
