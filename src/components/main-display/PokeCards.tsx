import testImg from "../../assets/react.svg";

function PokeCards() {
    return (
        <div
            className="
                    bg-white rounded-md flex
                    flex-col drop-shadow-md
                    p-3
                    h-[270px]
        "
        >
            <div
                className="
                    w-full h-[140px] bg-slate-100 
                    rounded-md mb-3 p-2"
            >
                <img
                    className="w-full h-full"
                    src={testImg}
                    alt="pokemon image"
                />
            </div>
            <p className="text-slate-400">#001</p>
            <p className="capitalize font-bold">pokemon name</p>
            <div
                className="
                    bg-lime-500 w-[100px]
                    m-auto p-1 rounded-md
                    text-xs
                    "
            >
                <p className="uppercase text-xs">type</p>
            </div>
        </div>
    );
}

export default PokeCards;
