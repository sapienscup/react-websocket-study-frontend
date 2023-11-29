import { CustomButtonProps } from "../types"

function CustomButton(props: CustomButtonProps) {
  const { text, targetFunction, targetProps } = props

  const handleOnClick = () => {
    if (targetFunction) {
      targetFunction(targetProps)
    }
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter' && targetFunction) {
      targetFunction(targetProps)
    }
  }

  return (
    <button
      onKeyDown={event => handleKeyDown(event)}
      onClick={_ => handleOnClick()}
      className={`
        w-full
        h-full
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
      `}
    >
      <span
        className="
          relative
          px-2
          py-1
          transition-all
          ease-in
          duration-75
          dark:bg-gray-900
          rounded-md
          group-hover:bg-opacity-0
        "
      >
        {(text || '').toUpperCase()}
      </span>
    </button>
  )
}

export default CustomButton
