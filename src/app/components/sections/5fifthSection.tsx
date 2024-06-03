"use client";
import Image from "next/image";
import Resultados from "@/app/components/Dialog/youtubeDialog"
import Faq from "@/app/components/accordion/accordion"
import Button from "@/app/components/Buttons";
import Pessoas from "public/Images/pessoas-comuns.png"
import Logo from "public/Icons/logo-bottom.webp"
import LogoM from "public/Icons/logo-vtsd-2-mobi.png"
import Leandro from "public/Images/leandro.png";
import LeandroM from "public/Images/leandro-mobile.webp";
import Alunos from "public/Images/avatar_vtsd.webp";
import Star from "public/Icons/star.svg";
import Wpp from "public/Icons/whatsapp.png"





export default function Fifth() {
  return (
    <main className="bg-[#F2F2F2]">

      <section className="max-w-[69rem] sm:w-[20.375rem] mx-auto mm:px-5 pt-[7.5rem] sm:pt-[1.54rem]">
        <div className="flex sm:flex-col items-center justify-center mm:justify-center sm:justify-center gap-[8rem] sm:gap-0">
          <h1 className="text-[#363636] text-[1.5rem] font-bold sm:block hidden text-center">
            Quem é {" "} <br /> <span className="text-[#00A99D]">Leandro Ladeira?</span>
          </h1>
          <Image className="sm:hidden" src={Leandro} alt="" />
          <Image className="sm:block hidden" src={LeandroM} alt="" />
          <div className="max-w-[33.5rem] sm:w-full sm:mt-2">
            <h1 className="text-[#363636] text-[3rem] font-bold sm:hidden leading-[4rem]">
              Quem é <br /> Leandro Ladeira?
            </h1>
            <div className="flex gap-1 text-[#666666] font-medium bg-white px-4 py-1 w-fit rounded-lg mt-2 sm:mt-[2.19rem] sm:hidden">
              <Image src={Star} alt="" />
              <p>
                Criador do Método VTSD
              </p>
            </div>
            <p className="text-[#353639] sm:text-[0.875rem] leading-[1.75rem] sm:leading-[1.5rem] mt-12 sm:mt-2">
              Leandro Ladeira é uma das mentes por trás de um dos maiores negócios digitais do Brasil. Tudo começa em 2014, quando iniciou um negócio despretensiosamente para lançar o curso online da fisioterapeuta pélvica Cátia Damasceno. <br /> {" "}
              Começaram do zero, sem audiência, sem dinheiro e sem recursos. De lá para cá, criaram o maior canal de relacionamento do mundo no Youtube, com mais de 9 milhões de inscritos, e fizeram mais de 200 mil vendas do curso. É o único desse nicho &quot;pouco convencional&quot; que está entre os 30 maiores da Hotmart no mundo.
            </p>
          </div>
        </div>
      </section>

      
      <section className="mt-[5.75rem] max-w-[69.56rem] sm:w-[20.375rem] mx-auto mb-[4.5rem] mm:px-4">
        <h1 className="text-[3rem] text-center sm:text-[1.25rem] font-bold sm:leading-[1.875rem] mb-[.94rem] sm:mb-[1.12rem] sm:hidden">
          FAQ - <span className="text-[#04C8B6]">Perguntas frequentes</span>
        </h1>
        <h1 className=" text-center text-[1.25rem] font-bold leading-[1.875rem] mb-[1.12rem] sm:block hidden">
            <span className="text-[#04C8B6]">FAQ</span> <br /> {" "}Perguntas frequentes
        </h1>
        <div className="text-[#666] font-medium sm:text-[0.625rem] w-fit mx-auto px-4 bg-[#FCFCFC] sm:bg-transparent rounded-lg leading-7 sm:border sm:border-[#1DE4CF]">
          <p>Sobre o Produto</p>
        </div>
        <Faq />
      </section>

      <section className="mt-[5rem] sm:mt-[3.12rem] bg-[#E9E9E9] pt-[5.5rem] sm:pt-6 pb-[8rem] sm:pb-[1.56rem]">
        <div className=" flex sm:flex-col  items-center justify-between max-w-[63rem] mx-auto border-y border-[#D7D6D6] sm:border-none py-10">
        <Image className="sm:block hidden" src={Alunos} alt="" />
          <div className="flex items-center gap-[1.13rem] sm:text-center sm:mt-[1.12rem]">
            <Image className="sm:hidden" src={Alunos} alt="" />
            <div className="text-[#363636]">
              <p className="text-[2rem] font-bold">+ 30 mil  alunos</p>
              <p className="text-[0.75rem] sm:text-[0.875rem] sm:max-w-[16.1875rem]">Junte-se a comunidade do Venda  Todo Santo Dia hoje!</p>
            </div>
          </div>
          <div className="max-w-[20.84rem] sm:mt-[1.5rem]">
            <a className="sm:w-full" href="http://" target="_blank" rel="noopener noreferrer">
              <button className="sm:w-full py-[1.25rem] sm:py-[1.26rem] px-[2.42rem] sm:px-[2.11rem] text-[#FEFEFF]  sm:text-[0.94775rem] rounded-[.5rem] font-bold bg-[#04C8B6] hover:scale-105 transition-all">
                <p>
                  Entrar no Venda todo Santo Dia
                </p>
              </button>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <button className="sm:w-full py-[1rem] sm:py-[1.26rem] px-[2.6rem] sm:px-[2.11rem] text-[#5D5E61] sm:text-[0.84244rem] rounded-[.5rem] font-bold bg-[#EDEDED] sm:bg-[#F7F7F7] flex items-center justify-center gap-2 hover:scale-105 transition-all border border-[#676767] mt-4">
                <Image src={Wpp} alt="" />
                <p>
                  Tirar dúvidas via Whatsapp
                </p>
              </button>
            </a>
          </div>
        </div>

        <div className="flex sm:flex-col-reverse justify-between max-w-[63rem] mx-auto mt-[3.19rem]">
          <div className="max-w-[25.75rem]">
            <Image className="sm:hidden" src={Logo} alt="" />
            <p className="max-w-[19.1875rem] sm;max-w-[21.4375rem] sm:mx-auto sm:text-center text-[0.625rem] text-[#292929] mt-12">
              Aviso Legal: &quot;Nenhuma informação contida neste produto deve ser interpretada como uma afirmação da obtenção de resultados. Qualquer referência ao desempenho passado ou potencial de uma estratégia abordada no conteúdo não é, e não deve ser interpretada como uma recomendação ou como garantia de qualquer resultado específico.&quot;
            </p>
          </div>
          <div className="flex sm:flex-col justify-center gap-10 sm:w-fit sm:mx-auto sm:mt-12">
            <div className="sm:flex sm:gap-12">
              <div >
                <p className="text-[#363636] text-[1.125rem] sm:text-[1rem] font-semibold">Navegação</p>
                <div className="flex flex-col gap-3 mt-[1.56rem] text-[#666] text-[0.75rem] sm:text-[0.625rem] font-medium">
                  <p >Aula gratuita</p>
                  <p>Sobre o método</p>
                  <p>Resultados dos alunos</p>
                  <p>Perguntas frequentes</p>
                </div>
              </div>
              <div>
                  <p className="text-[#363636] text-[1.125rem] sm:text-[1rem] font-semibold">Suporte</p>
                  <div className="flex flex-col gap-3 mt-[1.56rem] text-[#666] text-[0.75rem] sm:text-[0.625rem] font-medium">
                    <p >Suporte Técnico</p>
                    <p>Cobranças e Finanças</p>
                    <p>Tirar Dúvidas via Whatsapp</p>
                  </div>
                </div>
            </div>
              <div>
                <p className="text-[#363636] text-[1.125rem] sm:text-[1rem] font-semibold">Politicas</p>
                <div className="flex flex-col gap-3 mt-[1.56rem] text-[#666] text-[0.75rem] sm:text-[0.625rem] font-medium">
                  <p >Política de privacidade</p>
                  <p>Política de vendas</p>
                  <p>Política de Reembolso</p>
                </div>
              </div>
          </div>
              <Image className="sm:block hidden w-fit mx-auto" src={Logo} alt="" />
        </div>
      </section>
    </main>
  )
}