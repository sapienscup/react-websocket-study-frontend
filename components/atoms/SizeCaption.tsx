export default function SizeCaption({ width, height }: { width: number, height: number }) {
    return (
      <div className='text-gray-500 dark:text-gray-400 text-xs'>
        {`${width}:${height}`}
      </div>
    )
}
