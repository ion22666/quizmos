'use client'
import { login,signup,signUpGoogle } from "@/app/lib/actions"
import { FaGoogle } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function DialogsLoginAndSignUp(){
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)
    return (<>
    <div>
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="leading-7 mr-1">Sign Up </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Sign Up </DialogTitle>
                <DialogDescription>
                    Enter your email below to Sign Up your account
                </DialogDescription>
            </DialogHeader>
            <form>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    name="email"
                    type="email" 
                    id="email"
                    placeholder="m@example.com"
                />
                </div>
                <div className="grid gap-2">
                <Label htmlFor="name">Display name</Label>
                <Input
                    name="display_name"
                    type="display_name" 
                    id="display_name"
                    placeholder="Cartof123"
                />
                </div>
                
                <div className="grid gap-2">
                
                <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" name="password" type="password"   />
                </div>
                <div className="flex flex-col gap-3">
                    <Label htmlFor="date" className="px-1">
                        Date of birth
                    </Label>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                        <Button
                            
                            variant="outline"
                            id="date"
                            className="w-full justify-between font-normal"
                        >
                            {date ? date.toLocaleDateString() : "Select date"}
                            <ChevronDownIcon />
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            onSelect={(date) => {
                            setDate(date)
                            setOpen(false)
                        }}
                        />
                        </PopoverContent>
                    </Popover>
                </div>
                <input type="hidden" name="birth"  id="birth" value={date ? date.toISOString() : ""} />
            </div>
            <DialogFooter className="inline">
                <Button  formAction={signup} className="w-full mb-2 mt-2">
                    Sign Up 
                </Button>
                <Button formAction={signUpGoogle} variant="outline" className="w-full">
                     <FaGoogle/> Sign Up  with Google 
                </Button>
            </DialogFooter>
            </form>
            </DialogContent>
        </Dialog>
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" className="leading-7">Login</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Login</DialogTitle>
                <DialogDescription>
                    Enter your email below to login to your account
                </DialogDescription>
            </DialogHeader>
            <form>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    name="email"
                    type="email" 
                    id="email"
                    placeholder="m@example.com"
                />
                </div>
                <div className="grid gap-2">
                <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                    Forgot your password?
                    </a>
                </div>
                <Input id="password" name="password" type="password"  />
                </div>
            </div>
            <DialogFooter className="inline">
                <Button  formAction={login} className="w-full mb-2 mt-2">
                    Login
                </Button>
                <Button formAction={signUpGoogle} variant="outline" className="w-full">
                    <FaGoogle/> Login with Google 
                </Button>
            </DialogFooter>
            </form>
            </DialogContent>
        </Dialog>
    </div>
    </>)
}