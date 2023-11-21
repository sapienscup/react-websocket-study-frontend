type SwitchProps = {
  text?: string
  value: boolean
  targetFunction?: () => void
}

const Switch = (props: SwitchProps) => {
  const renderLabel = () => {
    if (props?.text) {
      return (
        <label className="text-xs text-gray-400 mr-4">
          {props.text}
        </label>
      )
    }
  }

  return (
    <>
      {renderLabel()}
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={props.value} onChange={props.targetFunction} className="sr-only peer"></input>
        <div
          className="
            w-8
            h-4
            bg-gray-200
            outline-none
            peer-focus:ring-3
            peer-focus:ring-indigo-300
            dark:peer-focus:ring-indigo-500
            rounded-full
            peer-checked:after:translate-x-full
            rtl:peer-checked:after:-translate-x-full
            peer-checked:after:border-white
            after:content-['']
            after:absolute
            after:bg-white
            after:rounded-full
            after:h-4
            after:w-4
            after:transition-all
            peer-checked:bg-indigo-600"
        ></div>
      </label>
    </>
  )
}

export default Switch
