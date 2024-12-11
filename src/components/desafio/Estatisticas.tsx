import Estatistica from "./Estatistica";

export default function Estatisticas() {
    return (
        <div 
            className="flex
                bg-zinc-700 rounded-lg 
                w-4/5 h-24 
                justify-around items-center
                "
        >
            <Estatistica valor={10} texto="Quantidade Aulas"></Estatistica>
            <Estatistica valor={5} texto="Aulas concluídas"></Estatistica>
            <Estatistica valor={"2h 30m"} texto="Duração total"></Estatistica>
            <Estatistica valor={"1h 24m"} texto="Duração concluída"></Estatistica>
            <Estatistica valor={"58%"} texto="Perc. conclusão"></Estatistica>
        </div>
    )
}