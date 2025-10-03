'use client'
import DialogsLoginAndSignUp from "./dialogsloginsignup"
import { createClientSR } from "@/utils/supabase/client"
import { useUserStore } from "@/app/store/userstore"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"

import { signOut } from "@/app/lib/actions"
import { useEffect, useState } from "react"


export default function LoggedUser(){

    const user = useUserStore((state) => state.userName);
    const fetchUser = useUserStore((state) => state.fetchUser);

    const [refetch2,setRefetch] = useState<boolean>(true)

    useEffect(() => {
    fetchUser();
    }, [fetchUser]);
    

    const haddleSignOut = async () => {
        try{
            await signOut()
        }catch(err){
            console.log(err)
        }finally{
            setRefetch(prev=>!prev)
        }
    }
    
    return (<>
        {!user?<DialogsLoginAndSignUp/>:
        <DropdownMenu>
            {/* <DropdownMenuTrigger asChild><Button variant='link'>{user?.user_metadata?.full_name || user?.identities?.[0]?.identity_data?.display_name || "Display N/A"}</Button></DropdownMenuTrigger> */}
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Score</DropdownMenuItem>
                <DropdownMenuItem onClick={()=>haddleSignOut()}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        }
    </>)
}