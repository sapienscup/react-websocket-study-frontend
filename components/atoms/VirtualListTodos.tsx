import { memo, useMemo } from 'react'
import { DailyTasks } from '../types'
import DayTasks from './DayTasks'
import Todo from '../Todo'

type TodoListWrapperProps = {
  tasksPerDay: DailyTasks[]
  handleChange: (todoId: number) => void
  adjustVirtualWindow: (intersected: boolean, idIndex: number) => void
}

const VirtualListTodos = (props: TodoListWrapperProps) => {
  let days = []
  let tasks = []
  let index = 0
  let dayIndex = 0

  // const visibleChildren = useMemo(
  //   () =>
  //     new Array(2)
  //       .fill(null)
  //       .map((_, index) => {
  //         index += 0

  //         tasks = []
  //         for (let todo of dailyTasks.tasks) {
  //           tasks.push(
  //             <div key={`task-${index}`}>
  //               <Todo task={todo} handleChange={props.handleChange}></Todo>
  //             </div>
  //           )
      
  //           index += 1
  //         }
      
  //         dayIndex += 1

  //         <DayTasks
  //           isLast={dailyTasks.isLast}
  //           id={dayIndex}
  //           adjustVirtualWindow={props.adjustVirtualWindow}
  //           key={`day-${dayIndex}`}
  //           date={dailyTasks.date}
  //           tasks={tasks}
  //         ></DayTasks>
  //       }),
  //   [1, 2, DayTasks]
  // )

  for (let dailyTasks of props.tasksPerDay) {
    index += 0

    tasks = []
    for (let todo of dailyTasks.tasks) {
      tasks.push(
        <div key={`task-${index}`}>
          <Todo task={todo} handleChange={props.handleChange}></Todo>
        </div>
      )

      index += 1
    }

    dayIndex += 1
    days.push(
      <DayTasks
        isLast={dailyTasks.isLast}
        id={dayIndex}
        adjustVirtualWindow={props.adjustVirtualWindow}
        key={`day-${dayIndex}`}
        date={dailyTasks.date}
        tasks={tasks}
      ></DayTasks>
    )
  }

  return <div className="py-6 mt-5 gap-3 snap-y snap-mandatory">{days}</div>
}

export default memo(VirtualListTodos)
