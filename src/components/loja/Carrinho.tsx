import { useContext } from "react";
import Area from "../template/Area";
import CarrinhoVazio from "./CarrinhoVazio";
import CarrinhoContext from "@/context/CarrinhoContext";
import ItemCarrinhoCard from "./ItemCarrinhoCard";
import Real from "@/utils/Real";
import { IconTrash } from "@tabler/icons-react";

export default function Carrinho() {
    const {itens, valorTotal, limparCarrinho} = useContext(CarrinhoContext)
    return (
        <Area titulo="Carrinho" cor="green" sumario={Real.format(valorTotal)}>
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-wrap justify-center gap-4">
                    {itens.length === 0 ? (
                        <CarrinhoVazio />
                    ) : (
                        itens.map((item, id) => {
                            return <ItemCarrinhoCard key={item.produto.id} item={item} />
                        })
                    )}
                    
                </div>
                    {itens.length > 0 && (
                        <button className="btn-danger flex flex-col items-center"
                            onClick={limparCarrinho}
                        ><IconTrash />Limpar</button>
                    )}
            </div>
        </Area>
    )
}