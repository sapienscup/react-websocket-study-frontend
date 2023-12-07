import { useState } from 'react'
import { useTheme } from 'next-themes'
import { TodoProps } from './types'

function Todo(props: TodoProps) {
  const { theme } = useTheme()
  const [check, setCheck] = useState(Boolean(props.task.check))

  function handleChange() {
    props.handleChange(props.task.id)

    setCheck(!check)
  }

  function changeTextColorDependingOnTheme() {
    if (theme === 'dark') {
      if (check === true) {
        return 'text-slate-800'
      } else {
        return 'text-slate-300'
      }
    }

    if (check === true) {
      return 'text-slate-800'
    } else {
      return 'text-slate-300'
    }
  }

  function changeBgDependingOnTheme() {
    if (theme === 'dark') {
      if (check === true) {
        return 'bg-gray-100'
      } else {
        return ''
      }
    }

    if (check === true) {
      return 'bg-gray-100'
    } else {
      return ''
    }
  }

  return (
    <div
      onClick={handleChange}
      className={`
        p-5
        rounded-lg
        select-none
        hover:border-2 border-opacity-70 border-sky-200
        ${changeTextColorDependingOnTheme()}
        ${changeBgDependingOnTheme()}
      `}
    >
      {props.task.description}
    </div>
  )
}

export default Todo
