import Aula from "@/data/model/Aula"
import AulaConclusao from "./AulaConclusao"
import { IconVideo } from "@tabler/icons-react"
import { useContext } from "react"
import CursoContext from "@/context/CursoContext"

interface AulaItemProps {
    aula: Aula
    selecionada: boolean
}

export default function AulaItem(props: AulaItemProps) {
    const { aula, selecionada } = props
    const {selecionarAula, alternarConclusaoAula} = useContext(CursoContext)
    return (
        <div className="flex gap-2 py-1 items-center">
            <AulaConclusao concluida={aula.concluida ?? false} onClick={() => alternarConclusaoAula(aula)}/>
            <div className="flex flex-1 flex-col cursor-pointer" onClick={() => selecionarAula(aula)}>
                <span className={`
                    ${selecionada && 'text-yellow-500'}
                `}>
                    {aula.ordem}. {aula.titulo}
                </span>
                <span className="-mt-1 text-xs text-zinc-400 ">Duração de {Math.floor(aula.duracao) / 60}m</span>
            </div>
            <IconVideo />
        </div>
    )
}