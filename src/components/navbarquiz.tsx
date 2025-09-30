import ThemeSet from "@/components/theme-set"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import DialogsLoginAndSignUp from "./dialogsloginsignup"

export default function NavBarHomePage(){
    return (<>
        <div className=" bg-muted/100 flex w-full rounded-t-2xl">
            <div className="flex items-center justify-between w-full m-2  "> 
                <div className="flex items-center justify-between min-w-3/7  ">
                    <div className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Quizmos</div>
                    <div className="hidden md:flex">
                        <Button variant="link" className="leading-7 ">Leaderboard</Button>
                        <Button variant="link" className="leading-7 ">Random Quiz</Button>
                        <Button variant="link" className="leading-7 ">About us</Button>
                        <Button variant="link" className="leading-7 ">How to use it ?</Button>
                    </div>
                </div>
                <div className="hidden md:flex max-2xl::w-full  items-center mr-2">
                    <div className="mr-1"><ThemeSet/></div>
                    <DialogsLoginAndSignUp/>
                </div>
                <div className=" md:hidden">
                    <Button  className="leading-7 " variant='secondary'>Open</Button>
                </div>
            </div>
        </div>
        <Separator className="mb-6"/>
    </>)
}