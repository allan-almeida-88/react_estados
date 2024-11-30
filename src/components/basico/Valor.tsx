import { useContext } from "react";
import Area from "../template/Area";

export default function Valor() {
    return (
        <Area titulo="Valor total" cor="blue">
            <span className="font-black text-6xl">0</span>
        </Area>
    )
}