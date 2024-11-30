import { useContext } from "react";
import Area from "../template/Area";
import {ContadorProvider} from '@/context/ContadorContext'

export default function Valor() {
    const Contexto = useContext(ContadorProvider)

    return (
        <Area titulo="Valor total" cor="blue">
            <span className="font-black text-6xl">{Contexto.valor}</span>
        </Area>
    )
}