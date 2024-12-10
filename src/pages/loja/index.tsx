import Carrinho from "@/components/loja/Carrinho";
import Catalogo from "@/components/loja/Catalogo";
import { CatalogoProvider } from "@/context/CatalogoContext";

export default function Loja() {
    return (
        <CatalogoProvider>
            <div className="flex flex-col gap-5 p-10">
                <Carrinho />
                <Catalogo />
            </div>
        </CatalogoProvider>
    )
}