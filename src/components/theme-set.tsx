'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function ThemeSet(){
    const { setTheme } = useTheme()
    const [colorTheme,setColorTheme] = useState<'light' | 'dark' >("dark")

    return (<>
        <Button variant='outline' onClick={()=>{setColorTheme(prev =>(prev === 'light'?'dark':'light'));setTheme(colorTheme)}} >{colorTheme}</Button>
    </>)
}