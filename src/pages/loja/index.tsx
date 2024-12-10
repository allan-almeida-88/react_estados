import Carrinho from "@/components/loja/Carrinho";
import Catalogo from "@/components/loja/Catalogo";

export default function Loja() {
    return (
        <div className="flex flex-col gap-5 p-10">
            <Carrinho />
            <Catalogo />
        </div>
    )
}