"use client";
import Image from "next/image";
import Clock from "public/Icons/Clock.png"
import Zoom from "public/Icons/Zoom.png"
import Check from "public/Icons/Verified.png"
import Aulas from "public/Images/Frame-aulas.png"
import AulasM from "public/Images/Frame-aulas-mobi.png"
import Result from "public/Images/frame-resultados.png"
import ResultM from "public/Images/frame-resultados-mobi.png"
import xCircle from "public/Icons/x-circle.png"
import Arrow from "public/Icons/arrow-up-right-grey.png"
import Button from "../Buttons";

{/* <Image src={} alt=""/> */ }


export default function Third() {
  const coresDasEtapas = {
    newbie: "border-l-[#F5F5F5]",
    soft: "border-l-[#DE4BB2]",
    hard: "border-l-black",
    pro: "border-l-[#8D0DC2]",
    master: "border-l-[#D9F900]",
  };

  const etapas = [
    {
      nivel: "Newbie",
      cor: coresDasEtapas["newbie"],
      objetivo: "Criação do produto",
      descricao:
        "Você terá um passo a passo para sair do zero e criar um produto digital superatrativo e em tempo recorde.",
      tags: ["QFD", "Estrutura", "Benchmarking", "Matriz", "Precificação"],
    },
    {
      nivel: "Soft",
      cor: coresDasEtapas["soft"],
      objetivo: "Faturar 10 mil reais",
      descricao:
        "Uma vez que você está com o seu produto pronto, vamos ativar o protocolo de validação e em seguida o protocolo 10K, para você fazer os seus primeiros 10 mil reais na internet.",
      tags: ["PV Seccionada", "VV de valor", "Mandala da Criatividade"],
    },
    {
      nivel: "Hard",
      cor: coresDasEtapas["hard"],
      objetivo: "Faturar 100 mil reais",
      descricao:
        "Com 10 mil reais na conta, você vai estar mais motivado e preparado para ativar os protocolos de escala. Nessa etapa você ganha seguidores, dinheiro, lucro, prestígio e reconhecimento do seu trabalho.",
      tags: [
        "Picos de Vendas",
        "Inbox Lucrativo",
        "SEO Youtube",
        "Multiplicação",
      ],
    },
    {
      nivel: "Pro",
      cor: coresDasEtapas["pro"],
      objetivo: "Faturar 2 milhões",
      descricao:
        "Aqui o jogo começa a ficar grande. Você vai ativar os protocolos de margem. Cria novos produtos, funis de alta performance e estrutura para que o negócio funcione independente do seu tempo. É nessa fase que você ganha mais e tem mais tempo para aproveitar as coisas boas da vida.",
      tags: [
        "Esteira Inteligente",
        "SEO Google",
        "Proteção da marca",
        "Projeto Gestão",
      ],
    },
    {
      nivel: "Master",
      cor: coresDasEtapas["master"],
      objetivo: "Faturar 10 milhões",
      descricao:
        "Aqui você vai ativar os protocolos de expansão. Vai em busca de um volume de tráfego de alta escala e de produtos com muito valor agregado, aumentando a quantidade de vendas e rentabilidade por venda.",
      tags: ["Popularidade", "marketplace", "Plano de Equity"],
    },
  ];

  return (
    <main>
      <section className="w-fit mx-auto mt-[3.94rem]">
        <div className="text-[0.875rem] sm:text-[0.5rem] font-semibold text-[#78787A] flex  justify-center gap-[1.78rem] sm:gap-[.66rem] mt-6 sm:hidden">
          <div className="flex justify-center items-center gap-2 sm:gap-[.31rem]">
            <Image className="sm:w-[0.9185rem] sm:h-[0.9185rem] " src={Clock} alt="" />
            <p>
              1 ano de acesso
            </p>
          </div>
          <div className="flex justify-center items-center gap-2 sm:gap-[.31rem]">
            <Image className="sm:w-[0.9185rem] sm:h-[0.9185rem] " src={Zoom} alt="" />
            <p>
              Suporte ao vivo no ZOOM
            </p>
          </div>
          <div className="flex justify-center items-center gap-2 sm:gap-[.31rem]">
            <Image className="sm:w-[0.9185rem] sm:h-[0.9185rem] " src={Check} alt="" />
            <p>
              Garantia de 15 dias
            </p>
          </div>
        </div>
        <h1 className="sm:w-[20rem] text-[1.875rem] sm:text-[1.125rem] sm:leading-7 text-center text-[#363636] font-bold mx-auto mt-[3.81rem]">
          O que os alunos estão falando das aulas ao vivo:
        </h1>
        <Image className="sm:hidden mt-[1.69rem]" src={Aulas} alt="" />
        <Image className="sm:block hidden mt-5" src={AulasM} alt="" />
      </section>
      <section className="mb-[6.31rem] sm:mb-[1.42rem]">
        <h1 className="sm:w-[20rem] text-[1.875rem] sm:text-[1.125rem] sm:leading-7 text-center text-[#363636] font-bold mx-auto mt-[3.81rem]">
          Em quanto tempo os resultados costumam aparecer?
        </h1>
        <h2 className="sm:w-[20rem] text-[1.25rem] sm:text-[0.875rem] sm:leading-[0.875rem] text-center text-[#363636] mx-auto ">
          É comum já começar a vender nas <br className="sm:block hidden" /> primeiras semanas.
        </h2>
        <Image className="mx-auto mt-[1.69rem] sm:hidden" src={Result} alt="" />
        <Image className="mx-auto mt-[1.69rem] sm:block hidden" src={ResultM} alt="" />
        <div className="flex items-center justify-center gap-[.94rem] sm:gap-[.31rem] text-[0.875rem] sm:text-[0.75rem] text-[#78787A] font-light leading-[1.375rem] w-[48.1875rem] sm:w-[20.625rem] h-[6.5rem] bg-[#F9F7F7] border border-[#C8C8C8] rounded-[.5rem] mx-auto mt-[1.31rem]">
          <Image src={xCircle} alt="" />
          <p className="w-[37.6875rem] sm:w-[17.43rem]">
            Nós temos mais de 800 prints como esses, mas a página ficaria muito chata se colocássemos todos. Em respeito ao seu tempo, colocamos apenas alguns aleatórios.
          </p>
        </div>
      </section>
      <Button />
      <section>
        <div className="max-w-[69rem] sm:w-[20.375rem] mx-auto mt-[6.25rem] sm:mt-[2.04rem] text-[#363636] mm:px-6">
          <h1 className="text-[1.875rem] sm:text-[1.25rem] font-bold sm:leading-[1.875rem]">
            Um plano comprovadamente eficiente
          </h1>
          <p className="text-[1.25rem] sm:text-[0.875rem] leading-[1.875rem] sm:leading-[1.5625rem] mt-5">
            Aqui você sai do zero e começa um negócio lucrativo na internet. Essa é a base da metodologia do CEE  Crescimento Exponencial Estruturado. O CEE quebra uma caminhada longa e complexa em passos simples e possíveis.
          </p>
        </div>
        <div className="mt-[96px] sm:mt-[2.39rem] w-[59rem] sm:w-full mx-auto">
          {etapas.map((etapa, index) => (
            <div key={index} className="flex items-center justify-right sm:flex-col">
              <div className="w-[15%] flex justify-end sm:hidden">
                <p className="text-[1.75rem] font-bold leading-[22.93px] pr-[1.56rem]">
                  {etapa.nivel}
                </p>
              </div>
              <div className={`w-[85%] py-7 border-l-[.325rem] px-4 ${etapa.cor}`}>
                <p className="text-[1.25rem] font-bold leading-[22.93px] pr-[1.56rem] hidden sm:block">
                  {etapa.nivel}
                </p>
                <p className="text-[16.66px] sm:text-[1rem] font-bold leading-[22.93px] mt-0 sm:mt-6">
                  Objetivo: {etapa.objetivo}
                </p>
                <p className="text-[16.66px] sm:text-[0.75rem] font-regular leading-[22.93px] sm:leading-[1.5625rem] mt-7 sm:mt-1">
                  {etapa.descricao}
                </p>
                <div className="flex flex-wrap mt-5 gap-[1.25rem] sm:gap-[.62rem]">
                  {etapa.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="rounded-[0.625rem] p-2 text-center font-regular text-[1rem] sm:text-[.875rem] border border-[#C7C7C7] "
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-[.94rem] sm:gap-[.31rem] text-[0.875rem] sm:text-[0.75rem] text-[#78787A] font-light leading-[1.375rem] w-[48.1875rem] sm:w-[20.625rem] h-[6.5rem] bg-[#F9F7F7] border border-[#C8C8C8] rounded-[.5rem] mx-auto mt-[4.87rem] sm:mt-[3.12rem] ">
          <Image src={Arrow} alt="" />
          <p className="w-[37.6875rem] sm:w-[17.43rem]">
          Assista ao vídeo no topo da página para aprender como cada protocolo funciona e como usar o Appbumper para ativar os protocolos.
          </p>
        </div>
      </section>
    </main>
  )
}