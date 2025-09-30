import ThemeSet from "@/components/theme-set"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
export default function HomePage(){
    return (<>
        <div className="flex w-full">
            <div className="flex items-center justify-between w-full m-2  "> 
                <div className="flex items-center justify-between min-w-3/7  ">
                    <div className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Quizmos</div>
                    <div>
                        <Button variant="link">Lederboard</Button>
                        <Button variant="link">Random Quiz</Button>
                        <Button variant="link">About us</Button>
                        <Button variant="link">How to use it ?</Button>
                    </div>
                </div>
                <div className="max-2xl::w-2xl flex items-center mr-2">
                    <div className="mr-1"><ThemeSet/></div>
                    <Button className="mr-1" variant='outline'>SignUp</Button>
                    <Button className="mr-1">Login</Button>
                </div>
            </div>
        </div>
        <Separator/>
    </>)
}