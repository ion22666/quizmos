import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
export default async function SearchBarHomePage(){
    return(<>
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Welcome  user ?!
        </h1>
        <div className="flex justify-center items-center mt-2">
            <Input  placeholder="Generate a quiz " className="w-85 md:w-3xl border-black xl:w-3/6 h-11" ></Input>
        </div>
        <div className="flex justify-center items-center mt-2">
            <Button variant='secondary' >QuizTypes</Button>
            <Button variant='secondary' className="ml-1 bg-green-300">Easy</Button>
            <Button variant='secondary' className="ml-1">Topic</Button>
            <Button variant='secondary' className="ml-1">Questions</Button>
        </div>
    </>)
}