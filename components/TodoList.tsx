'use client'

import { DailyTasksService } from '@/app/api/todos'
import { useEffect, useState } from 'react'
import { DailyTasks, Task } from './types'
import VirtualListTodos from './atoms/VirtualListTodos'

const service = new DailyTasksService()

const TodoList = () => {
  const [tasksPerDay, setTasksPerDay] = useState<DailyTasks[]>([])

  const [currentTodoBeingChanged, setCurrentTodoBeingChanged] = useState<Task>()

  useEffect(() => {
    setTasksPerDay(service.startWith(10))
  }, [])

  function handleChange(todoId: number) {
    for (let i = 0; i < tasksPerDay.length; i++) {
      const { tasks } = tasksPerDay[i]

      for (let j = 0; j < tasks.length; j++) {
        const todo = tasks[j]

        if (todo.id === todoId) {
          todo.check = !todo.check
          todo.changedHowManyTimes += 1
          setCurrentTodoBeingChanged(todo)
        }
      }
    }
  }

  function adjustVirtualWindow(intersected: boolean, idIndex: number) {
    console.log('outside', intersected, idIndex)

    setTasksPerDay(service.appendMore(10))
  }

  return (
    <div className="text-left">
      <div className="mx-5">
        <div className="text-3xl mb-5">Afazeres</div>
        <div>ID? {currentTodoBeingChanged?.id}</div>
        <div>Checked? {currentTodoBeingChanged?.check ? 'True' : 'False'}</div>
        <div>Changed: {currentTodoBeingChanged?.description}</div>
        <div>How many times? {currentTodoBeingChanged?.changedHowManyTimes}</div>

        <div className="h-96 pr-5 overflow-y-scroll scrollbar">
          <VirtualListTodos
            tasksPerDay={tasksPerDay}
            handleChange={handleChange}
            adjustVirtualWindow={adjustVirtualWindow}
          ></VirtualListTodos>
        </div>
      </div>
    </div>
  )
}

export default TodoList
