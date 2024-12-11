import MenuItem from "@/components/template/MenuItem";
import { Icon123, IconArrowsDownUp, IconForms, IconNumbers, IconShoppingCart, IconVideo } from "@tabler/icons-react";

export default function Home() {
    return (
        <div className="
            flex flex-col justify-center items-center h-screen
            bg-gradient-to-br from-zinc-800 to-black gap-20
        ">
            <div className="text-6xl">
                <span className="opacity-80 font-thin text-white">Gerenciamento de </span>
                <span className="
                    font-black bg-gradient-to-r from-blue-500 to-green-500
                    text-transparent bg-clip-text
                ">Estado</span>
            </div>
            <div className="flex flex-wrap justify-around w-3/5">
                <MenuItem texto="Estado" icone={<IconForms />} url="/revisao/estado"></MenuItem>
                <MenuItem texto="Comunicação" icone={<IconArrowsDownUp />} url="/revisao/comunicacao"></MenuItem>
                <MenuItem texto="Básico" icone={<IconNumbers />} url="/basico"></MenuItem>
                <MenuItem texto="Loja" icone={<IconShoppingCart />} url="/loja"></MenuItem>
                <MenuItem texto="EAD" icone={<IconVideo />} url="/desafio"></MenuItem>
            </div>
        </div>
    );
}
