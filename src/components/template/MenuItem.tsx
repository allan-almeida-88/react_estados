import Link from "next/link"
import React from "react"

interface MenuItemProps {
    icone: any,
    url: string,
    texto: string
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url} className="flex flex-col items-center gap-2 text-white">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full p-5">
                {React.cloneElement(props.icone, {
                    size:90,
                    stroke: 1,
                    className: "opacity-40"
                })}
            </div>
            <span className="opacity-60 font-black text-3xl">{props.texto}</span>
        </Link>
    )
}