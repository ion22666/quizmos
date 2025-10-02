'use client'
import DialogsLoginAndSignUp from "./dialogsloginsignup"
import { createClientSR } from "@/utils/supabase/client"
import { useQuery } from "@tanstack/react-query"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { User } from "@supabase/supabase-js"
import { signOut } from "@/app/lib/actions"
import { useState } from "react"
const isLoggedUser = async ():Promise<User | null> =>{
    const supabase =  createClientSR
    try{
        const {data,error} = await supabase.auth.getUser()
        if(error){
            console.log(error)
            return null
        }
        return data.user ?? null
    }catch(err){
        console.log(err)
        return null
    }
}

export default function LoggedUser(){

    const [refetch,setRefetch] = useState<boolean>(true)

    const {data:user,isLoading,error} = useQuery<User|null>({
        queryKey:['data',refetch],
        queryFn: () => isLoggedUser(),
    })

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
            <DropdownMenuTrigger asChild><Button variant='link'>{user?.user_metadata?.full_name}</Button></DropdownMenuTrigger>
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