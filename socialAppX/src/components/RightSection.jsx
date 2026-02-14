import SearchBar from "./SearchBar";

function RightSection (){
    return (
        <div className="hidden md:block md:w-60 lg:w-80 bg-black text-white p-4 sticky top-0 h-screen">
            <SearchBar />
        </div>
    )
}
export default RightSection;