'use client'

import { generateFakeTodos } from '@/app/api/todos'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import DayTasks from './atoms/DayTasks'
import SizeCaption from './atoms/SizeCaption'
import { DailyTasks, Task } from './types'
const Todo = dynamic(() => import('./Todo'))

const TodoList = () => {
  const [tasksPerDay, setTodoList] = useState<DailyTasks[]>()

  const ref = useRef<any>(null)

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [currentTodoBeingChanged, setCurrentTodoBeingChanged] = useState<Task>()

  useEffect(() => {
    const loadData = generateFakeTodos(20)
    setTodoList(loadData)

    setTimeout(() => {
      setWidth(ref.current?.offsetWidth)
      setHeight(ref.current?.offsetHeight)
    },  0)
  }, [])

  function handleChange(todoId: number) {
    if (!tasksPerDay) {
      return
    }

    for (let i = 0; i < tasksPerDay.length; i++) {
      const { tasks, date } = tasksPerDay[i]

      for (let j = 0; j < tasks.length; j++) {
        const todo = tasks[j]

        if (todo.id === todoId) {
          todo.check = !todo.check
          setCurrentTodoBeingChanged(todo)
        }
      }
    }
  }

  const prepareTodosListComponents = (todolist: DailyTasks[] | undefined) => {
    let days = []
    let tasks = []
    let index = 0
    let dayIndex = 0

    if (!todolist) {
      return
    }

    for (let dailyTasks of todolist) {
      index += 0

      tasks = []
      for (let todo of dailyTasks.tasks) {
        tasks.push(
          <div key={`task-${index}`}>
            <Todo task={todo} handleChange={handleChange}></Todo>
          </div>
        )

        index += 1
      }

      dayIndex += 1
      days.push(<DayTasks key={`day-${dayIndex}`} date={dailyTasks.date} tasks={tasks}></DayTasks>)
    }

    return (
      <div className="mx-5">
        <div className="text-3xl mb-5">Afazeres</div>

        <div
          ref={ref}
          className={`${todolist.length > 30 ? 'h-screen' : 'h-fit'} pr-3 ${
            todolist.length > 30 ? 'overflow-y-scroll scrollbar' : ''
          }`}
        >
          <SizeCaption width={width} height={height}></SizeCaption>
          <div className="py-6 mt-5 gap-3 snap-y snap-mandatory">{days}</div>
        </div>
      </div>
    )
  }

  return <div className="text-left">{prepareTodosListComponents(tasksPerDay)}</div>
}

export default TodoList
