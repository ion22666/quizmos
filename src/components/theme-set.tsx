'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function ThemeSet(){
    const { setTheme } = useTheme()
    const [colorTheme,setColorTheme] = useState<'light' | 'dark' >("dark")

    return (<>
        <Button variant='outline' onClick={()=>{setColorTheme(prev =>(prev === 'light'?'dark':'light'));setTheme(colorTheme)}} >{colorTheme === 'light' ? <Sun/> : <Moon/> }</Button>
    </>)
}