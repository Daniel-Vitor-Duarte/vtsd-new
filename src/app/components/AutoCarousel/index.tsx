"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Certificado from "public/images/certificado.png";
import Jovem from "public/images/jovem-pani.jpg";
import JovemM from "public/images/fire-festival.webp";
import Galaxy from "public/images/hotmart-galaxy.jpg";
import GalaxyM from "public/images/hotmart-galaxyM.webp";
import Fluxo from "public/images/fluxo-festival.jpg";
import FluxoM from "public/images/fluxo-festivalM.webp";
import Metropoles from "public/images/metropoles.png";
import MetropolesM from "public/images/metropolesM.webp";
import OsSocios from "public/images/os-socios.png";
import OsSociosM from "public/images/os-sociosM.webp";
import JovemLogo from "public/Icons/jovem-pan-logo.svg";
import HotmartLogo from "public/Icons/hotmart-logo.svg";
import VtsdLogo from "public/Icons/vtsd-logo.svg";
import MetropolesLogo from "public/Icons/metropoles-logo.svg";
import OsSociosLogo from "public/Icons/circle-play.svg";
import ArrowR from "public/Icons/chevron-down.svg"
// import ButtonCustom from "@/_components/ButtonCustom";

function SectionBonus() {
    const [activeCarousel, setActiveCarousel] = useState(0);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setActiveCarousel(val => (val === 4 ? 0 : val + 1));
        }, 10000);
        return () => clearTimeout(timer1);
    }, [activeCarousel]);

    const nextSlide = () => {
        setActiveCarousel(currentSlide => (currentSlide === 4 ? 0 : currentSlide + 1));
    };

    const prevSlide = () => {
        setActiveCarousel(currentSlide => (currentSlide === 0 ? 4 : currentSlide - 1));
    };

    const carousel = [
        {
            title: "Jovem Pan",
            tag:"Mídia",
            logo: JovemLogo,
            content: (
                <div>
                    <p className="">
                    Leandro Ladeira foi o convidado do programa SOS Empreendedor para falar sobre estratégias do Marketing Digital.
                    </p>
                </div>
            ),
            img: Jovem,
            img2: JovemM,
        },
        {
            title: "Hotmart Galaxy",
            tag:"Hotmart",
            logo: HotmartLogo,
            content: (
                <div>
                    <p className="">
                    Leandro Ladeira está entre os 25 maiores produtores digitais do mundo pela Hotmart Galaxy.
                    </p>
                </div>
            ),
            img: Galaxy,
            img2: GalaxyM,
        },
        {
            title: "Fluxo Festival",
            tag:"VTSD",
            logo: VtsdLogo,
            content: (
                <div>
                    <p className="">
                    O Evento Fluxo é um evento da Mentoria Fluxo realizada por Leandro Ladeira, Vitor e Ruy. O evento acontece anualmente e faz parte da entrega da Mentorial Fluxo, nele acontecem diversas palestras e experiências, com convidados especiais, que desenvolvem os mentorados na busca de seu desenvolvimento pessoal e profissional no mercado digital.
                    </p>
                </div>
            ),
            img: Fluxo,
            img2: FluxoM,
        },
        {
            title: "Metrópoles",
            tag:"Mídia",
            logo: MetropolesLogo,
            content: (
                <div>
                    <p className="">
                    Em 2021 vendeu uma de suas empresas, o Saveleads, um sistema de automação para atendimento humanizado para o Hotmart. A gigante dos produtos digitais viu valor e potencial na ferramenta que até então só era usada de maneira interna nos projetos da casa.
                    </p>
                </div>
            ),
            img: Metropoles,
            img2: MetropolesM,
        },
        {
            title: "Os Sócios",
            tag:"Mídia",
            logo: OsSociosLogo,
            content: (
                <div>
                    <p className="">
                    Participação no podcast Os Sócios com foco no tema como utilizar o marketing digital para vender todos os dias.
                    </p>
                </div>
            ),
            img: OsSocios,
            img2: OsSociosM,
        },
    ];

    return (
        <div className="xl:w-container lg:w-[76rem] w-[342px] mx-auto lg:mt-[175px] mt-[6.77rem] py-[5rem]">
            <div className="flex items-center justify-center gap-[1.56rem]">
                <button className="rotate-90 sm:hidden" onClick={prevSlide}>
                    <Image src={ArrowR} alt=""/>
                </button>
                
                    <div className="flex sm:flex-col-reverse items-center justify-center gap-[5.81rem] sm:gap-0">
                        <div className=" relative sm:mt-[1.25rem]">
                            <p className="text-[1.75rem] sm:text-[30px] font-bold">
                                {carousel[activeCarousel].title}
                            </p>
                            <p className="text-[0.875rem] text-[#C8C8C8] font-medium border border-[#BDBDBD] px-[.81rem] rounded-[0.875rem] w-fit mt-[1.25rem]">
                            {carousel[activeCarousel].tag} 
                            </p>
                            <p className="text-[0.875rem] leading-[1.5rem] text-[#999999] max-w-[13.25rem] sm:max-w-[20.125rem] mt-[1.31rem] sm:mt-[.63rem]">
                                {carousel[activeCarousel].content}
                            </p>
                        </div>
                        <Image className="absolute mr-[24rem] sm:hidden" src={carousel[activeCarousel].logo} alt="Leandro" />
                        <div className="w-fit mx-auto">
                            <Image className="rounded sm:hidden" src={carousel[activeCarousel].img} alt="Leandro" />
                            <Image className="rounded sm:block hidden" src={carousel[activeCarousel].img2} alt="Leandro" />
                            <div className="flex absolute z-20 lg:-mt-4 sm:-mt-4 lg:ml-12 sm:ml-3">
                                <div className="flex  gap-[10px]">
                                    <button
                                        className={`w-[7rem] sm:w-[3.5rem] bg-[#ffffff4d] ${activeCarousel === 0 && "isActive"
                                            } `}
                                        onClick={() => setActiveCarousel(0)}
                                    >
                                        <div className="w-0 h-full bg-white" />
                                    </button>
                                    <button
                                        className={`w-[7rem] sm:w-[3.5rem] h-[3px] bg-[#ffffff4d] ${activeCarousel === 1 && "isActive"
                                            } `}
                                        onClick={() => setActiveCarousel(1)}
                                    >
                                        <div className="w-0 h-full bg-white" />
                                    </button>
                                    <button
                                        className={`w-[7rem] sm:w-[3.5rem] h-[3px] bg-[#ffffff4d] ${activeCarousel === 2 && "isActive"
                                            } `}
                                        onClick={() => setActiveCarousel(2)}
                                    >
                                        <div className="w-0 h-full bg-white" />
                                    </button>
                                    <button
                                        className={`w-[7rem] sm:w-[3.5rem] h-[3px] bg-[#ffffff4d] ${activeCarousel === 3 && "isActive"
                                            } `}
                                        onClick={() => setActiveCarousel(3)}
                                    >
                                        <div className="w-0 h-full bg-white" />
                                    </button>
                                    <button
                                        className={`w-[7rem] sm:w-[3.5rem] h-[3px] bg-[#ffffff4d] ${activeCarousel === 4 && "isActive"
                                            } `}
                                        onClick={() => setActiveCarousel(4)}
                                    >
                                        <div className="w-0 h-full bg-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                <button className="-rotate-90 sm:hidden" onClick={nextSlide}>
                    <Image src={ArrowR} alt=""/>
                </button>
            </div>
        </div>
    );
}

export default SectionBonus;



