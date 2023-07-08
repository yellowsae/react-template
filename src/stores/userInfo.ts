import { create } from "zustand"
import { persist } from 'zustand/middleware'


interface userInfoState {
  userInfo: Record<string, any> | null
  setUserInfo: (userInfo: userInfoState["userInfo"]) => void
}


const userInfoStore = create<userInfoState>()(
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (userInfo) => set({ userInfo })
    }),
    { name: 'userInfo' }
  )
)

export default userInfoStore
