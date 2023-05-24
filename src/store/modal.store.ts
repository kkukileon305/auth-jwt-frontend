import { create } from 'zustand';

type ModalContent = {
  title: string;
  body: string;
  type?: 'success' | 'error' | 'warning';
};

type ModalStore = {
  modal: ModalContent | null;
  setModal: (modal: ModalContent | null) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  modal: null,
  setModal: (modal) => set({ modal }),
}));
