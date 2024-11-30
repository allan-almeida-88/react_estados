
import { useContext } from "react";
import Area from "../template/Area";
import {ContadorProvider} from '@/context/ContadorContext'

export default function Mais() {
    const contexto = useContext(ContadorProvider)
    return (
        <Area titulo="Botão mais" cor="green">
            <button className="btn" onClick={() => contexto.incrementar()} >
                +1
            </button>
        </Area>
    )
}