import NavBarHomePage from "@/components/navbarquiz"
import SearchBarHomePage from "@/components/searchBarAi"
export default function HomePage(){
    return (
    <>
        <div className="h-full bg-muted/70 rounded-2xl m-3 ">
            <NavBarHomePage/>
            <SearchBarHomePage/>
        </div>
    </>)
}