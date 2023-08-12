import { create } from 'zustand';

interface useProModalStore {
    isOpen: boolean;
    openModal: () => void;
    onClose: () => void;
}

export const useProModal = create<useProModalStore>((set) => ({
    isOpen: false,
    openModal: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));