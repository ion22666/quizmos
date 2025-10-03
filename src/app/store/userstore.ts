import { UserState } from "../../../shared/@types/Quiz"
import { create } from "zustand";
import { createClient } from "@/utils/supabase/server"

type UserStore = UserState & {
  setUser: (user: Partial<UserState>) => void;
  clearUser: () => void;
  fetchUser: () => Promise<void>;
}
export const useUserStore = create<UserStore>((set) => ({
  userName: "",
  avatarUrl: undefined,
  email: "",
  fullName: undefined,
  setUser: (user) => set((state) => ({ ...state, ...user })),
  clearUser: () => set({
    userName: "",
    avatarUrl: undefined,
    email: "",
    fullName: undefined
  }),
  fetchUser:async (): Promise<void> =>{
    const supabase = await createClient()
    const {data,error} = await supabase.auth.getUser()
    if(error){
        console.log("erroare",error)
    }
    if(data.user){
        set({
            userName: data.user.user_metadata.userName || "",
            avatarUrl: data.user.user_metadata.avatarUrl,
            email: data.user.email,
            fullName: data.user.user_metadata.fullName,
        })
    }
  }
}));
