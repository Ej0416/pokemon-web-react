import { useEffect, useState } from "react";
import SearchBtn from "./SearchBtn";
import SearchInput from "./SearchInput";

function SearchBar() {
    const [toSearch, setToSearch] = useState<string>();

    function setSearch(pokemon: string) {
        setToSearch(pokemon);
    }

    function searchPokemon() {
        console.log(toSearch);
    }

    useEffect(() => {
        console.log(toSearch);
    }, [toSearch]);

    return (
        <div
            className="
            flex flex-row items-center 
            justify-center h-11 rounded-lg 
            bg-white overflow-hidden
            drop-shadow-md sticky top-3 z-10
            "
        >
            <SearchInput setSearch={setSearch} />
            <SearchBtn searchPokemon={searchPokemon} />
        </div>
    );
}

export default SearchBar;
