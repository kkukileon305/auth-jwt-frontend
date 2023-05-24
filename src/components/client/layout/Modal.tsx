'use client';

import { useModalStore } from '@/store/modal.store';

const Modal = () => {
  const { setModal, modal } = useModalStore();

  return (
    <div
      className={`${
        modal ? 'fixed' : 'hidden'
      } w-full h-full z-10 bg-black/50 left-0 top-0 flex justify-center items-center p-4`}
    >
      <div className='bg-white max-w-xl w-full flex flex-col gap-8 shadow-xl'>
        <div className='flex flex-col gap-8 p-4'>
          <h2 className='font-bold text-2xl text-center'>{modal?.title}</h2>
          <p className='text-center text-xl'>{modal?.body}</p>
        </div>
        <button
          className={`w-full bg-blue-400 px-8 py-2 mx-auto text-white font-bold
          ${modal?.type ? 'bg-red-400' : 'bg-blue-400'}
          `}
          onClick={() => setModal(null)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
