import { FaSearch } from "react-icons/fa";

type SearchPokemon = {
    searchPokemon: () => void;
};

function SearchBtn({ searchPokemon }: SearchPokemon) {
    return (
        <div
            className="
            w-1/5 h-full p-1 flex 
            items-center justify-center"
        >
            <button
                className="
                    bg-red-500 min-w-10 
                    h-4/5 flex items-center 
                    justify-center rounded-lg 
                    drop-shadow-3xl"
                onClick={() => searchPokemon()}
            >
                <FaSearch color="white" />
            </button>
        </div>
    );
}

export default SearchBtn;
