import { create } from 'zustand'

// const useStore = create((set) => ({
//     count: 0,
//     increase: () => set((state) => ({ count: state.count + 1 })),

// }))

// export default useStore



const useStore = (set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),

})

export default create(useStore)