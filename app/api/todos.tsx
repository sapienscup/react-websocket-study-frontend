import { faker } from '@faker-js/faker'
import { Task, DailyTasks } from '@/components/types'

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

export const getAllPosts = () => {
  return []
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
