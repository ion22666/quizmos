import { Input } from "@/components/ui/input"
export default async function SearchBarHomePage(){
    return(<>
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Welcome  user ?!
        </h1>
        <div className="flex justify-center items-center mt-2">
            <Input placeholder="Generate a quiz " className="w-90 md:w-3xl border-black xl:w-3/6 h-11" />
        </div>
    </>)
} 