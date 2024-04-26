import PokeCards from "./PokeCards";

function MainDisplay() {
    return (
        <div
            className="
                mt-3 p-2
                grid gap-3
                "
        >
            <PokeCards />
            <PokeCards />
            <PokeCards />
        </div>
    );
}

export default MainDisplay;
