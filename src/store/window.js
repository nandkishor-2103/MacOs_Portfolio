import {INITIAL_Z_INDEX, WINDOW_CONFIG, gallery as initialGallery} from '#constants/index';
import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        // Gallery ko state mein rakhenge taaki delete/add operation perform ho sake
        galleryData: initialGallery,
        trash: [],
        nextZIndex: INITIAL_Z_INDEX + 1,
        isSearchOpen: false,

        openWindow: (windowKey, data = null) =>
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;
                win.isOpen = true;
                win.zIndex = state.nextZIndex;
                win.data = data ?? win.data;
                state.nextZIndex++;
            }),

        closeWindow: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;
                win.isOpen = false;
                win.zIndex = INITIAL_Z_INDEX;
                win.data = null;
            }),


        toggleSearch: () =>
            set((state) => {
                state.isSearchOpen = !state.isSearchOpen;
            }),
        setSearch: (status) =>
            set((state) => {
                state.isSearchOpen = status;
            }),

        focusWindow: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;
                win.zIndex = state.nextZIndex++;
            }),

        // --- Archive / Trash Logic ---

        moveToTrash: (item) =>
            set((state) => {
                // 1. Gallery se remove karein
                state.galleryData = state.galleryData.filter((g) => g.id !== item.id);
                // 2. Trash mein add karein
                state.trash.push(item);
            }),

        restoreFromTrash: (item) =>
            set((state) => {
                // 1. Trash se remove karein
                state.trash = state.trash.filter((t) => t.id !== item.id);
                // 2. Gallery mein wapas bhejein
                state.galleryData.push(item);
            }),

        emptyTrash: () =>
            set((state) => {
                state.trash = [];
            }),
    })),
);

export default useWindowStore;