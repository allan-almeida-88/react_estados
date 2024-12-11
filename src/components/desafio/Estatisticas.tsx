import { useContext } from "react";
import Estatistica from "./Estatistica";
import CursoContext from "@/context/CursoContext";

export default function Estatisticas() {
    const {
        qtdeDeAulas, 
        qtdeDeAulasConcluidas,
        duracaoTotal,
        duracaoConcluida,
        percentualConclusao
    } = useContext(CursoContext)
    return (
        <div 
            className="flex
                bg-zinc-700 rounded-lg 
                w-4/5 h-24 
                justify-around items-center
                "
        >
            <Estatistica valor={qtdeDeAulas} texto="Quantidade Aulas"></Estatistica>
            <Estatistica valor={qtdeDeAulasConcluidas} texto="Aulas concluídas"></Estatistica>
            <Estatistica valor={duracaoTotal} texto="Duração total"></Estatistica>
            <Estatistica valor={duracaoConcluida} texto="Duração concluída"></Estatistica>
            <Estatistica valor={`${percentualConclusao}%`} texto="Perc. conclusão"></Estatistica>
        </div>
    )
}