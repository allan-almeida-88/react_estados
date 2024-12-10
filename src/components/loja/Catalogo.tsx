import Area from "../template/Area";
import ProdutoCard from "./ProdutoCard";
import { useContext } from "react";
import CatalogoContext from "@/context/CatalogoContext";

export default function Catalogo() {

    const { produtos } = useContext(CatalogoContext)

    function renderizarProdutos() {
        return produtos.map(prod => {
            return <ProdutoCard key={prod.id} produto={prod}/>
        })
    }

    return (
        <Area titulo="Catalago" cor="purple">
            <div className="flex flex-wrap gap-4 justify-around">
                {renderizarProdutos()}
            </div>
        </Area>
    )
}