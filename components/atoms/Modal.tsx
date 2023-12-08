import { ModalProps } from '../types'
import CustomButton from './CustomButton'
import { RiCloseLine } from 'react-icons/ri'

const Modal = (props: ModalProps) => {
  const { post } = props

  return (
    <>
      <div
        onClick={() => props.setIsOpen(false)}
        className={
          `overflow-y-auto
          overflow-x-hidden
          fixed
          top-0
          right-0
          left-0
          z-50
          justify-center
          items-center
          w-full
          md:inset-0
          h-[calc(100%-1rem)]
          max-h-full`
        }
      >
        <div className="relative p-4 m-auto w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{post?.title}</h3>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">{post?.body}</p>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <div className="w-fit">
                <CustomButton
                  text={'Fechar'}
                  icon={<RiCloseLine></RiCloseLine>}
                  targetFunction={props.setIsOpen}
                  targetProps={false}
                ></CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
