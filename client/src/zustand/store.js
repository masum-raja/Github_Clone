import { create } from 'zustand'

const useUserStore = create((set) => ({
  users: [],
  totalPages: null,
  currentPage: 1,
  isLoading: false,
  setUsers: (users) => set({ users }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setTotalPages: (totalPage => set({totalPages: totalPage})),
  setLoading: (status) => set({ ...status,isLoading:status }),
  resetUser: () => set((state) => ({...state, users: [], totalPages: null, isLoading: false}))
}));

export default useUserStore;