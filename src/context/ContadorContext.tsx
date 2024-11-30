import { createContext, useState } from "react"

export const ContadorProvider = createContext({})

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