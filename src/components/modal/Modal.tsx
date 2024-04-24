import { FC, ReactNode } from 'react';
import { Button } from '../button/Button';

interface ModalProps {
  children: ReactNode
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  action: string
  isLoading: boolean
  onAction: () => void
}

export const Modal: FC<ModalProps> = ({ children, title, onAction, setShowModal, isLoading, action }) => {
  return (
    <div
    className="justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none px-10 transition ease-in-out fixed top-0 right-0 bottom-0 left-0 bg-blur-color backdrop-blur-md h-screen w-screen focus:outline-none"
  >
    <div className="relative md:w-1/3 my-6 mx-auto max-w-3xl">
      {/*content*/}
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-orange-500 outline-none focus:outline-none">
        {/*header*/}
        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
          <h3 className="text-3xl font-semibold">
            {title}
          </h3>
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
        </div>
        {/*body*/}
        <div className="relative p-6 flex-auto">
          {children}
        </div>
        {/*footer*/}
        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
          <button
            className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
          <Button onAction={onAction} text={action} isLoading={isLoading} />
        </div>
      </div>
    </div>
  </div>
  )}