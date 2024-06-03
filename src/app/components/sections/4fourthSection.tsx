"use client";
import Image from "next/image";
import Button from "@/app/components/Buttons";
import Zoom from "public/Icons/zzom.png"
import ZoomPrint from "public/Icons/zoom-print.jpg"
import Carousel from "../Carousel";
import Resultados from "@/app/components/Dialog/youtubeDialog"
import ResultadosM from "@/app/components/Dialog/youtubeDialog copy"
import AutoCarousel from "@/app/components/AutoCarousel"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });



export default function Fourth() {
    return (
        <main className="bg-[#F2F2F2]">
            <section className="max-w-[79rem] sm:w-[20.375rem] mx-auto mm:px-5 pt-[10.5rem] sm:pt-[3.12rem]">
                <h1 className="text-[3rem] sm:text-[1.5rem] text-[#363636] max-w-[35.5625rem] mx-auto font-bold leading-[4rem] sm:leading-[2rem] sm:text-center ">
                    <span className="text-[#04C8B6]">Veja alguns resultados </span> {" "}
                    dos alunos do VTSD
                </h1>
                <Carousel />

            </section>

            <section className="flex flex-col items-center mt-[10rem] sm:mt-[4.31rem] py-[5.5rem] sm:py-12 px-[6.5rem] sm:px-8 w-fit mx-auto rounded-2xl bg-white">
                <Image src={Zoom} alt="" />
                <h1 className="text-[3rem] sm:text-[1.5rem] text-[#363636] max-w-[35.5625rem] mx-auto font-bold leading-[4rem] sm:leading-[2rem] mt-4">
                    Encontros no <span className="text-[#04C8B6]">zoom</span>
                </h1>
                <h2 className="text-[1.5rem] sm:text-[1rem] sm:max-w-[15.0625rem] sm:text-center  text-[#292929] font-bold sm:leading-[1.75rem] sm:mt-2">
                    Suporte como você <span className="text-[#04C8B6]">nunca viu</span> em nenhum curso
                </h2>
                <p className={`${inter.className} text-center text-[#363636] sm:text-[0.875rem] leading-[1.75rem] sm:leading-[1.5rem] pt-12 max-w-[63rem] sm:max-w-[19.4375rem] border-t-[0.0625rem] border-[#C8C8C8] sm:border-none mt-8 sm:mt-0`}>
                    Duas quartas-feiras por mês os alunos do Venda Todo Santo Dia têm aulas ao vivo sobre assuntos diversos do mundo do marketing digital além de momentos para tirar dúvidas, analisar erros, acertos, e criar anúncios. É praticamente uma imersão intensa de ideias em cada encontro. O melhor suporte do Brasil.
                </p>
                <Image className="mt-12 " src={ZoomPrint} alt="" />
            </section>

            <div className="mt-[6rem]">
                <Button />
            </div>

            <section className="mt-[5.75rem]  max-w-[79.164rem] sm:w-[20.375rem] mx-auto sm:hidden">
                <h1 className="text-[1.875rem] sm:text-[1.25rem] font-bold sm:leading-[1.875rem]">
                    Resultados incontestáveis
                </h1>
                <Resultados />
            </section>
            <section className="mt-[5.75rem]  w-[21.1875rem] mx-auto sm:block hidden">
                <h1 className="text-[1.5rem] font-bold sm:leading-[1.875rem]">
                    Resultados {" "} <span className="text-[#04C8B6]">incontestáveis</span>
                </h1>
                <ResultadosM />
            </section>
            <section className="mt-[5.75rem] max-w-[69.56rem] sm:max-w-[21.4375rem] mx-auto">
                <AutoCarousel />
            </section>


        </main>
    )
}