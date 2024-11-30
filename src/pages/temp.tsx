import Area from "@/components/template/Area";

export default function Teste() {
    return (
        <div className="p-20 flex flex-col gap-5">
            <Area titulo="Teste" cor="red"> 
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Area>
            <Area titulo="Teste" sumario="R$ 1256,52" cor="blue"> 
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Area>
        </div>
    )
}