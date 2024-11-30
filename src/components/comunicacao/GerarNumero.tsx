import Area from "../template/Area";

interface GerarNumeroProps {
    numero1: number
    numero2: number
    gerarNumero: (resultado: number) => void
}

export default function GerarNumero(props: GerarNumeroProps) {
    const min = Math.min(props.numero1, props.numero2)
    const max = Math.max(props.numero1, props.numero2)

    function gerar() {
        let valor = Math.round(Math.random() * (max - min) + min);

        props.gerarNumero?.(valor)
    }
    
    return (
        <Area titulo="Gerar número" cor="blue">
            <div className="flex flex-col items-center gap-5">
                <div className="flex justify-center gap-5 text-2xl">
                    <span>Min: {min}</span>
                    <span>Max: {max}</span>
                </div>
                <button className="btn" onClick={gerar} >Gerar</button>
            </div>
        </Area>
    )
}