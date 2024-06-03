"use client";
import Image from "next/image";
import ResultM from "public/Images/frame-resultados-mobi.png"
import xCircle from "public/Icons/x-circle.png"
import Arrow from "public/Icons/arrow-up-right-grey.png"
import Button from "../Buttons";
import Appbumper from "public/Images/appbumper-screen.webp"
import AppbumperM from "public/Images/appbumber-mobile.webp"
import AppbumperLogo from "public/Icons/appbumber.png"
import AppbumperLogoM from "public/Icons/Appbumper-logo-mobi.svg"
import App from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
{/* <Image src={} alt=""/> */ }

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const cardsData: CardData[] = [
  {
    id: 1,
    title: 'First Card',
    description: 'This is the description of the first card.',
    imageUrl: '/path/to/image1.jpg'
  },
  {
    id: 2,
    title: 'Second Card',
    description: 'This is the description of the second card.',
    imageUrl: '/path/to/image2.jpg'
  },
  {
    id: 3,
    title: 'Third Card',
    description: 'This is the description of the third card.',
    imageUrl: '/path/to/image3.jpg'
  },
  {
    id: 4,
    title: 'Thir Card',
    description: 'This is the description of the third card.',
    imageUrl: '/path/to/image3.jpg'
  },
  {
    id: 5,
    title: 'Thi Card',
    description: 'This is the description of the third card.',
    imageUrl: '/path/to/image3.jpg'
  },
  {
    id: 6,
    title: 'Third Crd',
    description: 'This is the description of the third card.',
    imageUrl: '/path/to/image3.jpg'
  },
  {
    id: 7,
    title: 'Third Cad',
    description: 'This is the description of the third card.',
    imageUrl: '/path/to/image3.jpg'
  },
  {
    id: 8,
    title: 'Third Car',
    description: 'This is the description of the third card.',
    imageUrl: '/path/to/image3.jpg'
  },
  {
    id: 9,
    title: 'Tird Card',
    description: 'This is the description of the third card.',
    imageUrl: '/path/to/image3.jpg'
  }
];

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
    <main className="bg-[#F2F2F2] sm:px-4">
      <div className="pt-[11.77rem] sm:pt-[3.5rem]"><Button /></div>
      <section className="h-[29.25rem] flex sm:flex-col justify-center mt-[5rem] sm:mt-[16.81rem]">
        <div className="text-white flex flex-col bg-[#0C8492] w-fit padding-zero rounded-l-[.75rem] sm:rounded-b-none sm:rounded-t-[.75rem] h-full sm:w-full">
          <h1 className="text-[2rem] font-bold leading-[2.25rem] max-w-[13.6875rem] sm:max-w-[18.9375rem]">
            Se está começando do zero:
          </h1>
          <p className={`${inter.className} text-[.875rem] max-w-[18.9375rem] leading-[1.75rem] sm:leading-[1.5rem] sm:mt-[.5rem]`}>
            Se você não tem experiência nenhuma com criação de produtos, já vai começar criando um produto do jeito certo. Vai aprender a criar um produto atrativo, a organizar as informações, pesquisar, estruturar, gravar, editar e subir para a plataforma de vendas.
          </p>
        </div>

        <div className="text-white flex flex-col bg-[#05A7B5] w-fit padding-zero rounded-r-[.75rem] sm:rounded-t-none sm:rounded-b-[.75rem] h-full sm:w-full">
          <h1 className="text-[2rem] font-bold leading-[2.25rem] max-w-[18.9375rem]">
            Se já está no mercado digital:
          </h1>
          <p className={`${inter.className} text-[.875rem] max-w-[18.9375rem] leading-[1.75rem] sm:leading-[1.5rem] sm:mt-[.5rem]`}>
            Se você já tem um produto digital, vai organizar a casa e encontrar as pontas soltas. Vai aprender a identificar em qual momento você está e em seguida traçar um plano para atingir o próximo nível de escala, faturamento e lucratividade. Ou seja, vai transformar seu produtinho em um produto ultra-interessante, que vende muito e Vende Todo Santo Dia.
          </p>
        </div>
      </section>

      <section>
        <div className="w-fit mx-auto py-[5rem] sm:pt-[15rem] sm:pb-[1.25rem]">
          <Image className="sm:hidden" src={AppbumperLogo} alt=""/>
          <Image className="sm:block hidden" src={AppbumperLogoM} alt=""/>
        </div>
        <div className="flex justify-center sm:hidden">
          <Image src={Appbumper} alt="" />
          {/* <div className="flex flex-wrap gap-[1.21rem] absolute max-w-[65.7rem] mt-[15rem]">
            {cardsData.map(card => (
              <div key={card.id} className=" border rounded-lg shadow-lg flex">
                <img src={card.imageUrl} alt='' className="" />
                <div>
                  <p></p>
                  <h2 className="text-lg font-bold mt-2">{card.title}</h2>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}

          </div> */}
        </div>
        <div className={`${inter.className} text-[#353639] leading-[1.75rem] sm:leading-[1.5rem] max-w-[63rem] mx-auto sm:text-[0.875rem]`}>
          <p className="font-semibold sm:font-bold sm:text-center ">
          Ao comprar o VTSD você ganha um ano de acesso ao AppBumper. Todos os processos de criação organizados em um só lugar.
          </p>
          <Image className="w-fit mx-auto sm:block hidden" src={AppbumperM} alt=""/>
          <p className="mt-4 sm:text-center sm:max-w-[19.1875rem] sm:mx-auto">
          Com o Appbumper é mais fácil fazer o que tem que ser feito e do jeito que tem que ser feito. É quase impossível errar e você nunca fica perdido, sem saber o que fazer.
          </p>
          <p className="sm:hidden">
          O CEE quebra uma caminhada longa e complexa em passos simples e possíveis.
          </p>
        </div>
      </section>



      {/* <section>
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
      </section> */}
    </main>
  )
}