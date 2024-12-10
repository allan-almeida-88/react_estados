import produtos from "@/data/constants/Produtos";
import Produto from "@/data/model/Produto";
import { createContext } from "react";

interface CatalogoContextProps {
    produtos: Produto[]
}

const CatalogoContext = createContext<CatalogoContextProps>({} as any)

export function CatalogoProvider(props:any) {
    return (
        <CatalogoContext.Provider value={{ produtos }}>
            {props.children}
        </CatalogoContext.Provider>
    )
}

export default CatalogoContext;