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
  message: string | number
  onMessageChange?: (newType: string) => void
  targetFunction?: (props: any) => void
  targetProps?: any
}

export interface CustomButtonProps {
  text: string
  targetFunction?: (props: any) => void
  targetProps?: any
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

export type Repo = {
  name: string
  stargazers_count: number
  size: number
}

export type Post = {
  slug: string
}

export type BlogPost = {
  id: string
  title: string
  body: string
  createdAt: string
  updatedAt: string
}

export type TodoProps = {
  task: Task,
  handleChange: () => void
}
