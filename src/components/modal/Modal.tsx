import { FC, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode
 
}

export const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <div
    className="justify-center items-center flex overflow-scroll inset-0 z-50 outline-none transition ease-in-out fixed top-0 right-0 bottom-0 left-0 min-h-screen w-screen "
  >
    {children}
  </div>
  )}