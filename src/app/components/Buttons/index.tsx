"use client";
import Image from "next/image";
import Wpp from "public/Icons/whatsapp.png"
import Clock from "public/Icons/Clock.png"
import Zoom from "public/Icons/Zoom.png"
import Check from "public/Icons/Verified.png"
import appbumper from "public/Icons/setting-4.svg"


{/* <Image src={} alt=""/> */ }

export default function Button() {
    return (
        <main className="w-fit mx-auto ">
            <div className="w-fit mx-auto flex sm:flex-col items-start justify-center gap-[1.12rem]">
                <a className="sm:w-full" href="http://" target="_blank" rel="noopener noreferrer">
                    <button className="sm:w-full py-[1.37rem] sm:py-[1.26rem] px-[2.5rem] sm:px-[2.11rem] text-[#FEFEFF] text-[1.125rem] sm:text-[0.94775rem] rounded-[.5rem] font-bold bg-[#05A7B5] hover:scale-105 transition-all">
                        <p>
                            Entrar no Venda todo Santo Dia
                        </p>
                    </button>
                </a>
                <div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <button className=" py-[1.5rem] sm:py-[1.26rem] px-[2.5rem] sm:px-[2.11rem] text-[#5D5E61] sm:text-[0.84244rem] rounded-[.5rem] font-bold bg-[#EDEDED] sm:bg-[#F7F7F7] flex items-center justify-center gap-2 hover:scale-105 transition-all">
                            <Image src={Wpp} alt="" />
                            <p>
                                Tirar dúvidas via Whatsapp
                            </p>
                        </button>
                    </a>
                    <p className="text-[#D7D6D6] text-[0.75rem] mt-2">
                    Normalmente respondemos em menos de 2 minutos  
                    </p>
                </div>
            </div>
            <div className="text-[0.875rem] sm:text-[0.5rem] font-semibold text-[#78787A] flex sm:flex-col sm:w-fit sm:mx-auto justify-center gap-[1.17rem] sm:gap-[.31rem] mt-5">
                <div className="flex gap-[1.17rem]">
                    <div className="flex justify-center items-center gap-2 sm:gap-[.4rem]">
                        <Image className="sm:w-[1.19688rem] sm:h-[1.19688rem] " src={Clock} alt="" />
                        <p>
                        1 ano de acesso ao VTSD
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-2 sm:gap-[.4rem] ml-1 sm:ml-[.1rem]">
                        <Image
                            className="sm:w-[1.19688rem] sm:h-[1.19688rem] "
                            src={appbumper}
                            alt=""
                        />
                        <p>365 dias de acesso ao appBumper</p>
                    </div>
                </div>
                <div className="flex justify-center gap-[1.17rem]">
                    <div className="flex justify-center items-center gap-2 sm:gap-[.4rem]">
                        <Image className="sm:w-[1.19688rem] sm:h-[1.19688rem] " src={Zoom} alt="" />
                        <p>
                            Suporte ao vivo no ZOOM
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-2 sm:gap-[.4rem]">
                        <Image className="sm:w-[1.19688rem] sm:h-[1.19688rem] " src={Check} alt="" />
                        <p>
                            Garantia de 15 dias
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}