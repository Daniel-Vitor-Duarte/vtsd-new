"use client";
import Image from "next/image";
import Logo from "public/Icons/Logo.png"
import LogoM from "public/Icons/logo-mobi.svg"
import Avatar from "public/Images/avatar-vtsd.png"
import Form from "@/app/components/Form"
import { Inter } from "next/font/google";
import Wpp from "public/Icons/whatsapp.png"
import Clock from "public/Icons/Clock.png"
import Zoom from "public/Icons/Zoom.png"
import Check from "public/Icons/Verified.png"
import appbumper from "public/Icons/setting-4.svg"

const inter = Inter({ subsets: ["latin"] });



interface YouTubePlayerProps {
    videoId?: string;
    containerClassName?: string;
    iframeClassName?: string;
    containerStyle?: React.CSSProperties;
    iframeStyle?: React.CSSProperties;
}

const Head: React.FC<YouTubePlayerProps> = ({ videoId }) => {
    return (
        <main className="mb-[2.61rem]  mm:px-6 w-full ">
            <section className="flex flex-col items-center pt-[2.75rem] sm:pt-12">
                <Image className="sm:hidden" src={Logo} alt="" />
                <Image className="sm:block hidden" src={LogoM} alt="" />
                <div className="flex gap-[1.12rem] sm:gap-[.31rem] mt-[2.19rem] items-center">
                    <Image src={Avatar} alt="" />
                    <p className="text-[#676767] sm:text-[0.625rem]">
                        + 25 mil  alunos que Vendem todo Santo Dia
                    </p>
                </div>
                <h1 className="text-[3rem] sm:text-[1.5rem] text-[#363636] font-bold text-center w-[63.31rem] sm:w-[21.4375rem] leading-[4rem] sm:leading-normal sm:mt-[.38rem]8 mt-[1.19rem]">
                    Crie um negócio digital do {" "}<span className="text-[#B7BABA]">zero</span> e faça sua {" "}
                    <span className="text-[#B7BABA] ">primeira venda</span> em pouco tempo.
                </h1>

                <p className="text-[#666] sm:text-[0.875rem] font-semibold text-center mt-[2.66rem] sm:mt-5 rounded-lg py-1 px-6 sm:px-6 bg-[#FCFCFC] sm:bg-transparent">
                    Assista a aula de introdução gratuitamente e você vai aprender 3 coisas:
                </p>

                <div className={inter.className}>
                    <div className="leading-[1.5rem] text-[#78787A] flex sm:flex-col gap-24 sm:gap-2 mt-[2.25rem] sm:mt-4 sm:text-[0.875rem] sm:max-w-[21.4375rem]">
                        <div className=" max-w-[21.33rem]  flex gap-1">
                            <p>
                                1.
                            </p>
                            <p>
                                Como estruturar um produto inicial e fazer a sua primeira venda em pouco tempo.
                            </p>
                        </div>
                        <div className="sm:block hidden max-w-[21.4375rem] h-[0.0625rem] bg-[#BDBDBD]"></div>
                        <div className=" max-w-[21.33rem]  flex gap-1">
                            <p>
                                2.
                            </p>
                            <p>
                                Quais Recursos você realmente precisa para iniciar (você tem e não sabe).
                            </p>
                        </div>
                        <div className="sm:block hidden bg-[#BDBDBD] max-w-[21.4375rem] h-[.0625rem]"></div>
                        <div className=" max-w-[21.875rem] flex gap-1">
                            <p>
                                3.
                            </p>
                            <p>
                                Como impulsionar o seu produto usando google e o Instagram e construir uma fonte de renda recorrente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-[2.5rem] sm:mt-[1.56rem]">
                <iframe
                    className="w-full aspect-video youtube-vid rounded-md  mx-auto sm:max-w-[22rem] max-w-[54.43rem]"
                    src="https://www.youtube.com/embed/EdrQPJZ77vY"
                    allowFullScreen
                />
            </section>

            <section className=" mt-[4.5rem] sm:w-[21rem] sm:mx-auto">
                <div className="w-[55.625rem] sm:w-full mx-auto flex sm:flex-col items-start justify-center gap-[1.12rem]">
                    <a className="w-full" href="http://" target="_blank" rel="noopener noreferrer">
                        <button className="w-full py-[1.37rem] sm:py-[1.5rem] px-[2.5rem] text-[#FEFEFF] text-[1.125rem] sm:text-[0.94775rem] rounded-[.5rem] font-bold bg-[#05A7B5] sm:bg-[#04C8B6] hover:scale-105 transition-all">
                            <p className="sm:hidden">
                                Quero fazer minha primeira venda
                            </p>
                            <p className="sm:block hidden">
                                Entrar no Venda todo Santo Dia
                            </p>
                        </button>
                    </a>
                </div>
                <div className="text-[1.125rem] sm:text-[0.5rem] font-semibold text-[#78787A] flex sm:flex-col  justify-center gap-[1.17rem] sm:gap-[1.17rem] mt-[4.53rem] sm:mt-[.94rem] sm:max-w-[14.7rem] sm:mx-auto">
                    <div className="flex flex-col items-start gap-5 ">
                        <div className="flex justify-center items-start gap-2 sm:gap-[.31rem] max-w-[22.30rem] ">
                            <Image className="sm:w-[1.19688rem] sm:h-[1.19688rem] 
                            " src={Clock} alt="" />
                            <div>
                                <p>
                                    1 ano de acesso ao VTSD
                                </p>
                                <p className={`${inter.className} text-[#78787A] leading-7 sm:leading-normal sm:mt-[.38rem] text-[1rem] font-normal sm:text-[0.5rem]`}>
                                    Você terá acesso de 1 ano ao curso Venda Todo Santo Dia.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-start gap-2 sm:gap-[.31rem] ml-1 sm:ml-[.1rem] max-w-[25.30rem]">
                            <Image
                                className="sm:w-[1.19688rem] sm:h-[1.19688rem] "
                                src={appbumper}
                                alt=""
                            />
                            <div>
                                <p>365 dias de acesso ao appBumper</p>
                                <p className={`${inter.className} text-[#78787A] leading-7 sm:leading-normal sm:mt-[.38rem] text-[1rem] sm:text-[0.5rem] font-normal`}>
                                    Durante 365 dias você poderá usar o aplicativo de implementação e organizar todas os processos em um só lugar
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <div className="flex justify-center items-start gap-2 sm:gap-[.31rem] max-w-[25.30rem]">
                            <Image className="sm:w-[1.19688rem] sm:h-[1.19688rem] " src={Zoom} alt="" />
                            <div>
                                <p>
                                    Suporte ao vivo no ZOOM
                                </p>
                                <p className={`${inter.className} text-[#78787A] leading-7 sm:leading-normal sm:mt-[.38rem] text-[1rem] sm:text-[0.5rem] font-normal`}>
                                    Tire todas as suas dúvidas sobre tráfego, copy, anúncios, criação de produto e muito mais
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-start gap-2 sm:gap-[.31rem] max-w-[24.30rem]">
                            <Image className="sm:w-[1.19688rem] sm:h-[1.19688rem] " src={Check} alt="" />
                            <div>
                                <p>
                                    Garantia de 15 dias
                                </p>
                                <p className={`${inter.className} text-[#78787A] leading-7 sm:leading-normal sm:mt-[.38rem] text-[1rem] sm:text-[0.5rem] font-normal`}>
                                    Você poderá pedir seu reembolso em até 15 dias e ter todo o seu dinheiro de volta
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Head