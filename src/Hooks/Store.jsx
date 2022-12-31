import create from 'zustand';
import { persist } from 'zustand/middleware';

let store = (set) => ({
  users: {},
  addUser: (user) => set((state) => ({ users: { ...state.users, user } })),
});

store = persist(store, { name: 'users' });

const useStore = create(store);

export default useStore;
