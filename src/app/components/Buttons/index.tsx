"use client";
import Image from "next/image";
import Wpp from "public/Icons/whatsapp.png"
import Clock from "public/Icons/Clock.png"
import Zoom from "public/Icons/Zoom.png"
import Check from "public/Icons/Verified.png"

{/* <Image src={} alt=""/> */}

export default function Button(){
    return(
        <main className="w-fit mx-auto">
            <div className="w-fit mx-auto flex sm:flex-col items-center justify-center gap-[1.12rem]">
                <a className="sm:w-full" href="http://" target="_blank" rel="noopener noreferrer">
                    <button className="sm:w-full py-[1.37rem] sm:py-[1.26rem] px-[2.5rem] sm:px-[2.11rem] text-[#FEFEFF] text-[1.125rem] sm:text-[0.94775rem] rounded-[.5rem] font-bold bg-[#04C8B6] hover:scale-105 transition-all">
                        <p>
                        Entrar no Venda todo Santo Dia
                        </p>
                    </button>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <button className=" py-[1.5rem] sm:py-[1.26rem] px-[2.5rem] sm:px-[2.11rem] text-[#5D5E61] text-[1rem] sm:text-[0.84244rem] rounded-[.5rem] font-bold bg-[#EDEDED] sm:bg-[#F7F7F7] flex items-center justify-center gap-2 hover:scale-105 transition-all">
                    <Image src={Wpp} alt=""/>
                        <p>
                        Tirar dúvias com o time de Suporte
                                                </p>
                    </button>
                </a>
            </div>
            <div className="text-[0.875rem] sm:text-[0.5rem] font-semibold text-[#78787A] flex  justify-center gap-[1.78rem] sm:gap-[.66rem] mt-6">
                <div className="flex justify-center items-center gap-2 sm:gap-[.31rem]">
                    <Image className="sm:w-[0.9185rem] sm:h-[0.9185rem] " src={Clock} alt=""/>
                    <p>
                      1 ano de acesso
                    </p>
                </div>
                <div className="flex justify-center items-center gap-2 sm:gap-[.31rem]">
                    <Image className="sm:w-[0.9185rem] sm:h-[0.9185rem] " src={Zoom} alt=""/>
                    <p>
                    Suporte ao vivo no ZOOM
                    </p>
                </div>
                <div className="flex justify-center items-center gap-2 sm:gap-[.31rem]">
                    <Image className="sm:w-[0.9185rem] sm:h-[0.9185rem] " src={Check} alt=""/>
                    <p>
                    Garantia de 15 dias
                    </p>
                </div>
            </div>
        </main>
    )
}