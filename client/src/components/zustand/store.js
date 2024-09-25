import { create } from 'zustand'

const useUserStore = create((set) => ({
  users: [],
  isLoading: false,
//   totalPages: null,
  addUsers: (data) => set((state) => ({ users: data})),
  setLoading: (status) => set({ ...status,isLoading:status }),
  resetUsers: () => set((state) => ({...state,users: []})),
  setTotalPages: (data) => set((state) => ({totalPage: data})),
//   resetTotalPage: () => set((state) => ({...state, totalPage: null})),
}))

export default useUserStore;