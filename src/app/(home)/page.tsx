import NavBarHomePage from "@/components/navbarquiz"
import SearchBarHomePage from "@/components/searchBarAi"
export default function HomePage(){
    return (
    <>
        <div className="h-full ">
            <NavBarHomePage/>
            <SearchBarHomePage/>
        </div>
    </>)
}