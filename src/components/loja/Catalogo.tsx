import Area from "../template/Area";
import produtos from '@/data/constants/Produtos'
import ProdutoCard from "./ProdutoCard";

export default function Catalogo() {

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