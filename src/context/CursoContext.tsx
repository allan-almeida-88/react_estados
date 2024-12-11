import capitulosFake from "@/data/constants/capitulos";
import Aula from "@/data/model/Aula";
import Capitulo from "@/data/model/Capitulo";
import CursoEstatisticas from "@/data/model/CursoEstatisticas";
import { createContext, useState } from "react"


interface CursoProviderProps {
    capitulos: Capitulo[]
    aulaAtual: Aula
    qtdeDeAulas: number
    qtdeDeAulasConcluidas: number

    duracaoTotal: string
    duracaoConcluida: string
    percentualConclusao: number

    selecionarAula: (aula: Aula) => void
    alternarConclusaoAula: (aula: Aula) => void
}

const CursoContext = createContext<CursoProviderProps>({} as any)

export function CursoProvider(props: any) {
    const [capitulos, setCapitulos] = useState(capitulosFake)
    const [aulaAtual, setAulaAtual] = useState(capitulosFake[0].aulas[0])
    const cursoEstatisticas = new CursoEstatisticas(capitulos)

    function selecionarAula(aula: Aula) {
        setAulaAtual(aula)
    }

    function alternarConclusaoAula(aulaSelecionada: Aula) {
        const novasCapitulos = capitulos.map(capitulo => {
            const novasAulas = capitulo.aulas.map(aula => {
                return aula.ordem === aulaSelecionada.ordem 
                    ? {...aula, concluida: !(aula.concluida ?? false)} 
                    : aula
            })
            return {...capitulo, aulas: novasAulas}
        })
        setCapitulos(novasCapitulos)
    }

    return (
        <CursoContext.Provider value={{ 
            capitulos,
            aulaAtual,
            selecionarAula,
            alternarConclusaoAula,
            get qtdeDeAulas() { return  cursoEstatisticas.qtdeDeAulas()},
            get qtdeDeAulasConcluidas() { return cursoEstatisticas.qtdeDeAulasConcluidas() },
            get duracaoTotal() { return cursoEstatisticas.duracaoTotal() },
            get duracaoConcluida() { return cursoEstatisticas.duracaoConcluida() },
            get percentualConclusao() { return cursoEstatisticas.percentualConclusao() },
            
        }}>
            {props.children}
        </CursoContext.Provider>
    )
}

export default CursoContext;