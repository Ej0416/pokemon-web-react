import PokeCards from "./PokeCards";
import PokeInfo from "./PokeInfo";

function MainDisplay() {
    const numPokeCards = 21;
    return (
        <div
            className="
                py-2 grid gap-3
                overflow-hidden
                min-[690px]:h-[650px]
                min-[690px]:grid-cols-3
                "
        >
            {/* pokecards */}
            <div
                className="
                grid gap-3 pt-[3px]
                overflow-auto
                min-[520px]:col-span-2
                min-[520px]:grid-cols-2
                min-[900px]:grid-cols-3
                "
            >
                {[...Array(numPokeCards)].map((_, index) => (
                    <PokeCards key={index} />
                ))}
            </div>
            {/* pokeinfo */}
            <div
                className="
                    w-full h-[650px]
                    hidden
                    min-[520px]:block
                    "
            >
                <PokeInfo />
            </div>
        </div>
    );
}

export default MainDisplay;
