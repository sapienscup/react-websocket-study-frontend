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

export type GithubInfo = {
  login?: string
  avatar_url?: string
  name?: string
  bio?: string
}

export type RepoInfo = {
  slug: string
}

export type BlogInfo = {
  info: GithubInfo
  repos: RepoInfo[]
}

export type ContextInfo = {
  blog: BlogInfo
}
