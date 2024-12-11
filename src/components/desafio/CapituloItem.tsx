import capitulos from "@/data/constants/capitulos"
import Capitulo from "@/data/model/Capitulo"
import AulaItem from "./AulaItem"

interface CapituloItemProps {
    capitulo: Capitulo
}

export default function CapituloItem(props: CapituloItemProps) {
    const {capitulo} = props
    return (
        <div>
            <div className="flex items-center gap-3 p-4 bg-zinc-900">
                <div className="
                    flex justify-center items-center 
                    w-9 h-9 rounded-full
                    bg-black border border-zinc-400">
                    {capitulo.ordem}
                </div>
                <span>{capitulo.titulo}</span>
            </div>
            <div className="p-4">
                {capitulo.aulas.map(aula => {
                    return <AulaItem key={aula.ordem} aula={aula} selecionada={false}/>
                })}
            </div>
        </div>
    )
}