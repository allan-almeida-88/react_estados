import capitulos from "@/data/constants/capitulos";
import Capitulo from "@/data/model/Capitulo";
import { createContext } from "react"


interface CursoProviderProps {
    capitulos: Capitulo[]
}

const CursoContext = createContext<CursoProviderProps>({} as any)

export function CursoProvider(props: any) {
    
    return (
        <CursoContext.Provider value={{ capitulos }}>
            {props.children}
        </CursoContext.Provider>
    )
}

export default CursoProvider;