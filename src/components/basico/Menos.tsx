import { useContext } from "react";
import Area from "../template/Area";
import {ContadorProvider} from '@/context/ContadorContext'
export default function Menos() {
    const contexto = useContext(ContadorProvider)
    return (
        <Area titulo="Botão menos" cor="red">
            <button className="btn" onClick={() => contexto.decrementar()} >
                -1
            </button>
        </Area>
    )
}