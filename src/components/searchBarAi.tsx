import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { Send } from "lucide-react"
export default async function SearchBarHomePage(){
    return(<>
    
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Welcome  user ?!
        </h1>
        <div className="flex justify-center items-center mt-2">
        <div className="relative w-85 md:w-3xl flex items-center border rounded-xl ">
            <Input placeholder="Generate a quiz"className="w-full h-11 bg-transparent outline-none rounded-xl pr-12"/>
            <Button  variant="ghost"className="absolute right-2 top-1/2 transform -translate-y-1/2  outline-none "> <Send/></Button>
        </div>
        </div>
        <div className="flex justify-center items-center mt-2">
            <Button variant='secondary' >QuizTypes</Button>
            <Button variant='secondary' className="ml-1 bg-green-400 text-black hover:text-white">Easy</Button>
            <Button variant='secondary' className="ml-1">Topic</Button>
            <Button variant='secondary' className="ml-1">Questions</Button>
        </div>
    </>)
}