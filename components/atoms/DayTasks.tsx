import { useEffect, useRef, useState } from "react";
import { DayTasksProps } from "../types";


const DayTasks = (props: DayTasksProps) => {
  const cardRef = useRef<any>()
  const [isLast, setIsLast] = useState()

  useEffect(() => {
    if (!cardRef?.current) {
      return;
    }
  
    const observer = new IntersectionObserver(([entry]) => {
      console.log(entry.isIntersecting, props.id)
      if (isLast && entry.isIntersecting) {
        props.adjustVirtualWindow(entry.isIntersecting, props.id);
        observer.unobserve(entry.target);
      }
    });
  
    observer.observe(cardRef.current);
  }, [isLast, props]);

  return (
    <div ref={cardRef} className='border-pink-200 divide-y-[1px] divide-blue-200'>
      <div className='text-right text-xs text-slate-500'>{props.date.toLocaleDateString().slice(0, 10)}</div>
      <ul className="py-2 grid gap-3 md:grid-cols-5 snap-y snap-mandatory">
        {props.tasks}
      </ul>
    </div>
  )
}

export default DayTasks
