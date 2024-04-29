"use client";
import Image from "next/image";
import Resultados from "@/app/components/Dialog/youtubeDialog"
import Faq from "@/app/components/accordion/accordion"
import Button from "@/app/components/Buttons";
import Pessoas from "public/Images/pessoas-comuns.png"
import Logo from "public/Icons/logo-vtsd-2.png"
import LogoM from "public/Icons/logo-vtsd-2-mobi.png"





export default function Fifth() {
    return (
        <main className="">
            <section className="max-w-[69.56rem] sm:w-[20.375rem] mx-auto mm:pr-4">
                <div className=" mx-auto mt-[5.75rem] sm:mt-[2.04rem] text-[#363636] ">
                    <h1 className="text-[1.875rem] sm:text-[1.25rem] font-bold sm:leading-[1.875rem]">
                        Se está começando do zero:
                    </h1>
                    <p className="text-[1.25rem] sm:text-[0.875rem] leading-[1.875rem] sm:leading-[1.5625rem] mt-[1.25rem]">
                        Se você não tem experiência nenhuma com criação de produtos, já vai começar criando um produto do jeito certo. Vai aprender a criar um produto atrativo, a organizar as informações, pesquisar, estruturar, gravar, editar e subir para a plataforma de vendas.
                    </p>
                    <h2 className="text-[1.875rem] sm:text-[1.25rem] font-bold sm:leading-[1.875rem] mt-[1.25rem]">
                        Se já está no mercado digital:
                    </h2>
                    <p className="text-[1.25rem] sm:text-[0.875rem] leading-[1.875rem] sm:leading-[1.5625rem] mt-[1.25rem]">
                        Se você já tem um produto digital, vai organizar a casa e encontrar as pontas soltas. Vai aprender a identificar em qual momento você está e em seguida traçar um plano para atingir o próximo nível de escala, faturamento e lucratividade. Ou seja, vai transformar seu produtinho em um produto ultra-interessante, que vende muito e Vende Todo Santo Dia.
                    </p>
                </div>
            </section>
            <section className="mt-[5.75rem] max-w-[69.56rem] sm:w-[20.375rem] mx-auto">
                <h1 className="text-[1.875rem] sm:text-[1.25rem] font-bold sm:leading-[1.875rem]">
                    Resultados incontestáveis
                </h1>
                <Resultados />
            </section>
            <section className="mt-[5.75rem] max-w-[69.56rem] sm:w-[20.375rem] mx-auto mb-[4.5rem] mm:px-4">
                <h1 className="text-[1.875rem] sm:text-[1.25rem] font-bold sm:leading-[1.875rem] mb-[.94rem] sm:mb-[1.12rem]">
                    FAQ - Perguntas frequentes
                </h1>
                <Faq />
                <p className="sm:block hidden text-[#363636] text-[.875rem] leading-[1.5625rem] mt-[4.06rem]">
                <strong>Clique no botão abaixo</strong>{" "}e dê o primeiro passo para a criação de um negócio que vende em escala, com alta margem de lucro, cresce exponencialmente ao longo tempo e te dá conforto e segurança.
                </p>
            </section>
            <Button />
            <section className="mt-[7.88rem] sm:mt-[3.12rem] overflow-x-hidden">
                <Image className="min-w-[360rem] sm:hidden animate-r" src={Pessoas} alt="" />
                <div className="flex sm:flex-col justify-center items-center gap-[2.75rem] sm:gap-[3.15rem] max-w-[65.21rem] sm:w-[20.365rem] mx-auto mt-[5.12rem] sm:mt-0 mm:px-4">
                    <Image className="sm:hidden" src={Logo} alt="" />
                    <h1 className="text-[#363636] text-[1.875rem] sm:text-[1.25rem] sm:font-normal font-bold leading-[2.375rem] sm:leading-[1.875rem]">
                        Milhares de pessoas comuns estão mudando a suas realidades com o poder do digital. <span className="text-[#00A99D] font-bold">Você também pode.</span>
                    </h1>
                    <Image className="sm:block hidden " src={LogoM} alt="" />
                </div>
            </section>
        </main>
    )
}