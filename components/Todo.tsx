'use client'

import React, { useEffect, useRef, useState } from 'react'
import SizeCaption from './atoms/SizeCaption'
import { useTheme } from 'next-themes'
import Switch from './atoms/Switch'
import { TodoProps } from './types'

function Todo(props: TodoProps) {
  const ref = useRef<any>(null)
  const { theme } = useTheme()

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setWidth(ref.current?.offsetWidth)
    setHeight(ref.current?.offsetHeight)
  }, [ref.current?.offsetHeight, ref.current?.offsetWidth])

  const [check, setCheck] = useState(Boolean(props.task.check))

  function handleChange() {
    props.handleChange()

    setCheck(!check)
  }

  function changeTextColorDependingOnTheme() {
    if (theme === 'dark') {
      if (check === true) {
        return 'text-slate-800 bg-gray-100'
      } else {
        return 'text-slate-300'
      }
    }

    if (check === true) {
      return 'text-slate-800 bg-gray-100'
    } else {
      return 'text-slate-300'
    }
  }

  return (
    <div
      ref={ref}
      onClick={handleChange}
      className={`
          py-5
          snap-end
          rounded-lg
          hover:border-2 border-opacity-70 border-sky-200
          ${changeTextColorDependingOnTheme()}
        `}
    >
      <li className="w-full px-5 hover:cursor-pointer">
        <div className="my-1" key={`task-container-${props.task.id}`}>
          <Switch value={check} targetFunction={handleChange}></Switch>
          <input
            key={`task-checkbox-${props.task.id}`}
            className="hidden peer"
            type="checkbox"
            defaultChecked={check ? true : undefined}
          ></input>
          <SizeCaption width={width} height={height}></SizeCaption>
          <div
            className={`
              text-sm
              text-left
              select-none
            `}
          >
            {props.task.description}
          </div>
        </div>
      </li>
    </div>
  )
}

export default Todo
