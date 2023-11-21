interface DayTasksProps {
  date: Date,
  tasks: any
}

const DayTasks = (props: DayTasksProps) => {
  return (
    <div className='divide-y-[1px] divide-blue-200'>
      <div className='text-right text-xs text-slate-500'>{props.date.toLocaleDateString().slice(0, 10)}</div>
      <ul className="py-2 grid gap-3 md:grid-cols-5 snap-y snap-mandatory">
        {props.tasks}
      </ul>
    </div>
  )
}

export default DayTasks
