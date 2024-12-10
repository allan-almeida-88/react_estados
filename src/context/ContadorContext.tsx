import { createContext, useState } from "react"

interface ContadorContextProps {
    valor: number
    incrementar: () => void
    decrementar: () => void
}

export const ContadorProvider = createContext<ContadorContextProps>({} as any)

export default function ContadorContext(props: any) {

    const [valor, setValor] = useState(20)

    function incrementar() {
        setValor(valor +1)
    }

    function decrementar() {
        setValor(valor -1)
    }

    const objetoValor = {valor, incrementar, decrementar}

    return (
        <ContadorProvider.Provider value={objetoValor}>
            {props.children}
        </ContadorProvider.Provider>
    )
}