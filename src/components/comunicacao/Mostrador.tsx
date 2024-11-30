import { useState } from "react";
import Area from "../template/Area";
import GerarNumero from "./GerarNumero";

export default function Mostrador() {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [resultado, setResultado] = useState(0)

    function gerarNumeroAleatorio(numero: number) {
        setResultado(numero)
    }
    return (
        <Area titulo="Mostrador" cor="red">
            <div className="flex justify-center font-black text-6xl">
                {resultado}
            </div>
            <div className="flex gap-5 p-5">
                <input type="number" value={n1} className="input" onChange={(e) => setN1(+e.target.value)}/>
                <input type="number" value={n2} className="input" onChange={(e) => setN2(+e.target.value)}/>
            </div>
            <GerarNumero numero1={n1} numero2={n2} gerarNumero={gerarNumeroAleatorio}></GerarNumero>
        </Area>
    )
}