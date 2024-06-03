"use client";
import Image from "next/image";
import Hot from "public/Icons/hotmart.png"
import Novo from "public/Icons/o-novo-mercado.png"
import Erico from "public/Icons/Erico-Rocha.png"
import Ashtag from "public/Icons/ashtag.png"
import Estratégia from "public/Icons/estratégia-concursos.png"
import Studios from "public/Icons/loot-studios.png"
import Logos from "public/Icons/confiam.webp"
import Resultados from "../AcordionResults"
import Plano from "../umPlano"
import PlanoMobile from "../umPlano copy"




const Second: React.FC = () => {


  return (
    <main className="bg-[#F2F2F2]">
      <section className="flex sm:flex-col items-center sm:items-start justify-center gap-[5.31rem] sm:gap-[1.28rem] mt-[8rem] bg-[#363636] sm:bg-transparent py-10 overflow-x-hidden sm:border-y sm:border-y-white ">
        <p className="max-w-[16rem] sm:text-center sm:min-w-full text-[1.39169rem] sm:text-[0.65106rem] font-semibold text-[#E9E9E9] sm:text-[#78787A] ">
          Grandes players do mercado que confiam
          no VTSD:
        </p>
        <div className="sm:flex hidden w-[58.6rem] animate-r ">
        <Image src={Logos} alt="" />
        <Image src={Logos} alt="" />
        </div>
        <div className="flex items-center sm:hidden gap-[5.31rem]">
          <Image src={Hot} alt="" />
          <Image src={Novo} alt="" />
          <Image src={Erico} alt="" />
          <Image src={Ashtag} alt="" />
          <Image src={Estratégia} alt="" />
          <Image src={Studios} alt="" />
        </div>
      </section>
      <section>
        <Resultados />
      </section>
      <section className="pt-[9.5rem] sm:pt-[1.93rem]">
        <div className="max-w-[76rem] mx-auto">
          <div className="w-full flex justify-end">
          </div>
          <h1 className="max-w-[56rem] sm:w-[20rem] text-[3rem] sm:text-[1.5rem] leading-[4rem] sm:leading-7 text-center text-[#363636] font-bold mx-auto mt-[1.5rem] sm:hidden">
          Um plano comprovadamente eficiente para você fazer a {" "} <span className="text-[#04C8B6]"> sua primeira venda em pouco tempo</span>
          </h1>
          <h1 className="w-[20rem] text-[3rem] sm:text-[1.5rem] leading-8 text-center text-[#363636] font-bold mx-auto mt-[1.5rem] sm:block hidden">
          Um plano  {" "} <span className="text-[#04C8B6]"> comprovadamente</span> {" "} eficiente
          </h1>
          <div className="px-6 sm:px-4 sm:py-1 w-fit mx-auto bg-[#FCFCFC] sm:bg-transparent rounded-lg shadow-md sm:shadow-transparent mt-[2.56rem] sm:mt-6 sm:border sm:border-[#1DE4CF] sm:text-[0.625rem]">
            <p>
              +100 milhões de vendas online
            </p>
          </div>
          <p className="max-w-[50rem] sm:max-w-[18.6875rem] text-[.875rem] sm:text-[0.75rem] leading-[1.225rem] mx-auto text-center mt-12 sm:mt-[.94rem]">
          <strong className="hidden sm:block">Sair do zero e começa um negócio lucrativo na internet.</strong> {" "} <br className=""/> Essa é a base da metodologia do CEE - Crescimento Exponencial Estruturado. {" "} <br className=""/> O CEE quebra uma caminhada longa e complexa em passos simples e possíveis.
          </p>
        </div>
      </section>

      <div className="sm:hidden">
        <Plano />
      </div>

      <div className="sm:block hidden">
        <PlanoMobile />
      </div>
      

    </main>
  )
}

export default Second