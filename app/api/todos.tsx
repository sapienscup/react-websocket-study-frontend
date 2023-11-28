import { faker } from '@faker-js/faker'
import { Task, DailyTasks } from '@/components/types'
import { get_github_api_key } from '@/envs'

export const generateFakeTodo = (): Task => {
  return {
    id: faker.number.int(10e6),
    check: faker.datatype.boolean(),
    description: faker.lorem.sentences(1)
  }
}

export const generateFakeTodos = (length: number): DailyTasks[] => {
  let tasksPerDays: DailyTasks[] = []
  let tasks: Task[] = []

  for (let i = 0; i < length; i++) {
    let taskQty: number = faker.number.int({ min: 2, max: 15 })

    tasks = []
    for (let j = 0; j < taskQty; j++) {
      tasks.push(generateFakeTodo())
    }

    tasksPerDays.push({ tasks: tasks, date: new Date(2023, i, 1) })
  }

  return tasksPerDays
}

type Slug = {
  slug: string
}

export const getAllPosts = async (): Promise<Slug[]> => {
  const repos = await fetch('https://api.github.com/users/tonussi/repos', {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${get_github_api_key()}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  const reposObj = await repos.json()

  let reposParsed: Slug[] = []

  if (reposObj && reposObj.length) {
    reposObj.forEach((element: any) => {
      reposParsed.push({ slug: element.full_name.split('/')[1] })
    })
  }

  return reposParsed
}

export const generateWords = (length: number): string[] => {
  return [
    'aperio',
    'supellex',
    'verecundia',
    'tempus',
    'decipio',
    'canto',
    'tot',
    'spero',
    'quis',
    'demoror',
    'accusamus',
    'alveus',
    'talus',
    'umerus',
    'acervus'
  ]
}
