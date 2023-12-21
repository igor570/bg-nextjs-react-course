import { create } from "zustand";
import {initialItems, Item} from "../lib/constants.ts";

//We can type the entire store by giving it an interface of all of our actions and state
//We then simply add a generic to the store.

interface ItemStore {
    items: Item[];
    addItem: (formValue: string) => void;
    destroyItem: (id: number) => void;
    toggleItem: (id: number) => void;
    removeAllItems: () => void;
    resetToInitial: () => void;
    markAllAsComplete: () => void;
    markAllAsInComplete: () => void;

}

//Store
const useItemStore = create<ItemStore>((set) => ({
    //Action
    items: initialItems,
    //Action
    addItem: (formValue) => {
        const newItem = {
            id: new Date().getTime(),
            title: formValue,
            completed: false,
        };
        set((state) => ({ items: [...state.items, newItem] }));
    },
    //Action
    destroyItem: (id) => {
        set(state => {
            const newItems = state.items.filter((item) => item.id !== id);
            return {items: newItems}
        })
    },
    //Action
    toggleItem: (id) => {
        set(state => {
            const newItems = state.items.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            });
            return {items: newItems}
        })
    },
    //Action
    removeAllItems: () => {
       set(() => ({ items: []}));
    },
    //Action
    resetToInitial: () => {
        set(() => ({ items: initialItems }))
    },
    //Action
    markAllAsComplete: () => {
        set(state => {
            const newItems = state.items.map((item) => {
                return {...item, completed: true}
            })
            return {items: newItems}
        })
    },
    //Action
    markAllAsInComplete: () => {
        set(state => {
            const newItems = state.items.map((item) => {
                return {...item, completed: false}
            })
            return {items: newItems}
        });
    },
}));

export default useItemStore;