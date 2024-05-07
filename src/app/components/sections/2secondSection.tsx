"use client";
import Image from "next/image";
import Appbumber from "public/Icons/appbumber.png"
import AppbumberM from "public/Icons/Appbumper-mobi.png"
import Outros from "public/Images/Frame-outros-cursos.png"
import OutrosM from "public/Images/Frame-outros-cursos-mobi.png"
import Comments from "public/Images/frame-comments-appbumber.png"
import CommentsM from "public/Images/frame-comments-appbumber-mobi.png"
import Carousel from "../Carousel";

interface Testimonial {
  name: string;
  resumo: string;
  date: Date;
}


const testimonialData: Testimonial[] = [
    {
        nome: "Igor Braga",
        resumo: (
          <>
            &quot;Eu nunca tinha comprado nada à vista antes do VTSD&quot;
          </>
        ),
        thumb: "igor-braga.png",
        thumb2: "igor-bragaM.png",
        embedId: "f6gMSdQaFkk",
      },
      {
        nome: "João Pedro",
        resumo: (
          <>
            &quot;Graças ao VTSD eu vou me casar&quot;
          </>
        ),
        thumb: "joao-pedro.png",
        thumb2: "joao-pedroM.png",
        embedId: "LrSzIzgXSiA",
      },
      {
        nome: "Josiane Simonett",
        resumo: (
          <>
            &quot;Nunca ganhei no CLT o que eu ganho hoje, depois do VTSD&quot;
          </>
        ),
        thumb: "josiane-simonett.png",
        thumb2: "josiane-simonettM.png",
        embedId: "qCZi3bqdEzk",
      },
      {
        nome: "Luciano Ribeiro",
        resumo: (
          <>
            &quot;Não imaginava que fosse tão simples&quot;
          </>
        ),
        thumb: "Luciano-Ribeiro.png",
        thumb2: "Luciano-RibeiroM.png",
        embedId: "-9F5S1MPWMk",
      },
      {
        nome: "Yasmin Kobill",
        resumo: (
          <>
            &quot;É possível fazer uma venda por dia. Com leveza e sem bagunça&quot;
          </>
        ),
        thumb: "yasmin-kobill.png",
        thumb2: "yasmin-kobillM.png",
        embedId: "qE3SIAkxkuU",
      },
      {
        nome: "Janderson",
        resumo: (
          <>
            &quot;Eu nunca tinha comprado nada à vista antes do VTSD&quot;
          </>
        ),
        thumb: "janderson.png",
        thumb2: "jandersonM.png",
        embedId: "7ROOf4ekMdw",
      },
  ]


const Second: React.FC = () =>{


    return(
        <main>
            <section className="mt-[3.81rem] max-w-[68.875rem] sm:w-[20.375rem] mx-auto mm:px-5">
            <Image className="sm:hidden" src={Appbumber} alt=""/>
            <Image className="sm:block mx-auto hidden" src={AppbumberM} alt=""/>
            <h2 className="text-[1.375rem] sm:text-[0.75rem] font-medium leading-[1.9375rem] sm:leading-5 text-[#868282] mt-[3.63rem]">
            Ao comprar o VTSD você ganha um ano de acesso ao AppBumper. Todos os processos de criação organizados em um só lugar.
            </h2>
            <p className="text-[1.1875rem] sm:text-[0.75rem] text-[#868282] font-light mt-6 sm:mt-[.62rem] leading-[1.9375rem] sm:leading-5">
            Com o Appbumper é mais fácil fazer o que tem que ser feito e do jeito que tem que ser feito. É quase impossível errar e você nunca fica perdido, sem saber o que fazer.
            </p>
            <Image className="mt-[2.06rem] sm:hidden" src={Outros} alt=""/> 
            <Image className="mt-[1.56rem] sm:block hidden" src={OutrosM} alt=""/> 
            <Image className="mt-[5.35rem] sm:hidden" src={Comments} alt=""/> 
            <Image className="mt-[3.12rem] sm:block hidden" src={CommentsM} alt=""/> 
        </section>
        <section className="w-fit mx-auto mt-[3.94rem] sm:w-full sm:overflow-x-hidden">
            <h1 className="sm:w-[20rem] sm:mx-auto text-[1.875rem] sm:text-[1.125rem] sm:leading-7 text-center text-[#363636] font-bold ">
            Veja alguns resultados dos alunos do VTSD
            </h1>
              <Carousel testimonials={testimonialData} />
        </section>
        </main>
    )
}

export default Second