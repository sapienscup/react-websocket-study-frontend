interface CustomButtonProps {
  color?: string
  text: string
  targetFunction?: (props: any) => void
  targetProps?: any
}

function CustomButton(props: CustomButtonProps) {
  const { text, targetFunction, targetProps } = props

  const handleOnClick = () => {
    if (targetFunction) {
      targetFunction(targetProps)
    }
  }

  return (
    <button
      onKeyDown={(event) => event.key === 'Enter' && handleOnClick()}
      onClick={_ => handleOnClick()}
      className={`
        relative
        inline-flex
        items-center
        justify-center
        p-0.5
        overflow-hidden
        text-white
        text-xs
        font-small
        rounded-lg
        group
        bg-gradient-to-br
        bg-indigo-500
        to-blue-500
        group-hover:from-indigo-600
        group-hover:to-blue-500
        hover:text-white
        dark:text-white
        focus:outline-none
        focus:ring-blue-300
        dark:focus:ring-blue-800
        font-medium
        shadow-sm shadow-indigo-500/50
        hover:bg-indigo-400
      `}>
        <span className="
          relative
          px-2
          py-1
          transition-all
          ease-in
          duration-75
          dark:bg-gray-900
          rounded-md
          group-hover:bg-opacity-0
        ">
          {(text || '').toUpperCase()}
        </span>
    </button>
  )
}

export default CustomButton
