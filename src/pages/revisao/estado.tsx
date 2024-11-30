import Area from "@/components/template/Area";
import { useState } from "react";

export default function Estado() {
    const [texto, setTexto] = useState('')
    return (
        <div className="p-20">
            <Area titulo="Revisão estado" cor="sky">
                <input type="text" 
                    value={texto} 
                    className="input"
                    onInput={(e) => setTexto(e.target.value)}
                    />
                <span className="ml-20">{texto}</span>
            </Area>
        </div>
    )
}