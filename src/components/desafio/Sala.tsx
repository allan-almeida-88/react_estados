import capitulos from "@/data/constants/capitulos";
import Estatisticas from "./Estatisticas";
import Player from "./Player";
import CapituloItem from "./CapituloItem";

export default function Sala() {
    const capitulosFakes = capitulos
    return (
        <div className="flex">
            <div className="bg-zinc-800 w-96 h-screen overflow-auto">
                {capitulosFakes.map((capitulo) => {
                    return <CapituloItem key={capitulo.id} capitulo={capitulo} />
                })}
            </div>
            <div className="flex flex-col justify-center items-center gap-4 flex-1">
                <Estatisticas />
                <Player />
            </div>
        </div>
    )
}