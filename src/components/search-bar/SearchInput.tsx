import { useState } from "react";

type SetSearch = {
    setSearch: (pokemon: string) => void;
};

function SearchInput({ setSearch }: SetSearch) {
    const [pokemon, setPokemon] = useState<string>("");
    return (
        <input
            type="text"
            className="w-4/5 h-full p-2"
            placeholder="Search Pokemon..."
            value={pokemon}
            onChange={(e) => {
                const value = e.target.value;
                setPokemon(value);
                setSearch(e.target.value);
            }}
        />
    );
}

export default SearchInput;
