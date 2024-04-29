"use client";
import Image from "next/image";
import Wpp from "public/Icons/whatsapp-WHITE.png"
import WppB from "public/Icons/whatsapp.png"
import Leandro from "public/Images/leandro.png"
import LeandroM from "public/Images/leandro-mobile.png"
import Suporte from "public/Images/suporte.png"
import SuporteM from "public/Images/suporte-mobile.png"
import Alunos from "public/Images/alunos-aovivo.png"
import AlunosM from "public/Images/alunos-aovivo-mobile.png"
import Button from "@/app/components/Buttons";
import Arrow from "public/Icons/arrow-up-right-grey.png"



export default function Fourth() {
    return (
        <main>
            <section className="max-w-[69rem] sm:w-[20.375rem] mx-auto mm:px-5">
                <div className=" mx-auto mt-[6.25rem] sm:mt-[2.04rem] text-[#363636] ">
                    <h1 className="text-[1.875rem] sm:text-[1.25rem] font-bold sm:leading-[1.875rem]">
                        Alguma dúvida?
                    </h1>
                    <p className="text-[1.25rem] sm:text-[0.875rem] leading-[1.875rem] sm:leading-[1.5625rem] mt-5 sm:mt-[.62rem]">
                        Se você tem alguma dúvida, nós temos um time que está pronto para responder qualquer pergunta no WhatsApp. É só clicar no botão abaixo e nos chamar.
                    </p>
                </div>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <button className=" py-[1.5rem] sm:py-[1.26rem] px-[2.5rem] sm:px-[2rem] text-[#F7F7F7] sm:text-[#5D5E61] text-[1rem] sm:text-[0.84244rem] rounded-[.5rem] font-semibold sm:font-normal bg-[#00A99D] sm:bg-[#F7F7F7] flex items-center justify-center gap-2 sm:gap-[.42rem] mx-auto mt-[2.62rem]">
                        <Image className="sm:hidden" src={Wpp} alt="" />
                        <Image className="sm:block hidden" src={WppB} alt="" />
                        <p>
                            Tirar dúvias com o time de Suporte
                        </p>
                    </button>
                </a>
                <div className="flex sm:flex-col items-center justify-end mm:justify-center sm:justify-center gap-[1.38rem] mt-[7.5rem]">
                    <h1 className="text-[#363636] text-[1.25rem] font-bold sm:block hidden">
                        Quem é {" "}<span className="text-[#00A99D]">Leandro Ladeira?</span>
                    </h1>
                    <Image className="sm:hidden" src={Leandro} alt="" />
                    <Image className="sm:block hidden" src={LeandroM} alt="" />
                    <div className="w-[31.81rem] sm:w-full sm:mt-2">
                        <h1 className="text-[#363636] text-[1.875rem]  font-bold sm:hidden">
                            Quem é {" "} <span className="text-[#00A99D]">Leandro Ladeira?</span>
                        </h1>
                        <p className="text-[#545454] text-[1.25rem] sm:text-[1rem] leading-[1.875rem] sm:leading-[1.5rem] font-bold">
                            Leandro Ladeira é um dos maiores nomes do Marketing Digital do Brasil.
                        </p>
                        <p className="text-[#545454] text-[1.25rem] sm:text-[0.875rem] leading-[1.875rem] sm:leading-[1.5rem] sm:mt-2">
                            É idealizador do MBR, projeto que impulsionou a carreira da influenciadora Cátia Damasceno, do VTSD, da Mentoria Fluxo, Stories 10x, AppBumper e outros diversos projetos que superam a marca de mais de 300 mil vendas online e 200 milhões de reais em faturamento.
                        </p>
                    </div>
                </div>
            </section>
            <section className=" bg-gradient-suport sm:bg-gradient-suport-mobile pt-[2.62rem] mt-[7.5rem] mm:px-4">
                <div className="max-w-[68.75rem] sm:w-[20.375rem] mx-auto">
                    <div className=" mx-auto text-[#363636] ">
                        <h1 className="text-[1.875rem] sm:text-[1.25rem] font-bold sm:leading-[1.875rem]">
                            Suporte como você nunca viu em nenhum curso.
                        </h1>
                        <p className="text-[1.25rem] sm:text-[0.875rem] leading-[1.875rem] sm:leading-[1.5625rem] mt-5 sm:mt-[.62rem]">
                            Duas quartas-feiras por mês os alunos do Venda Todo Santo Dia têm aulas ao vivo sobre assuntos diversos do mundo do marketing digital além de momentos para tirar dúvidas, analisar erros, acertos, e criar anúncios. É praticamente uma imersão intensa de ideias em cada encontro. O melhor suporte do Brasil.
                        </p>
                    </div>
                    <Image className="mt-[2.69rem] sm:hidden" src={Suporte} alt="" />
                    <Image className="mt-[2.69rem] sm:block hidden" src={SuporteM} alt="" />
                </div>
                <div className="mx-auto w-fit mt-[2.38rem] mb-[5.69rem] ">
                    <h1 className="text-[1.875rem] sm:text-[1.25rem] font-bold sm:leading-[1.875rem] text-center sm:text-left sm:w-[20.375rem] mx-auto">
                        O que os alunos estão falando das aulas ao vivo:
                    </h1>
                    <Image className="mt-[1.81rem] sm:hidden" src={Alunos} alt="" />
                    <Image className="mt-[1.81rem] sm:block hidden" src={AlunosM} alt="" />
                </div>
                <Button />
            </section>
            <section className="max-w-[70.56rem] sm:w-[20.375rem] mx-auto mt-[4.06rem] mm:px-4">
            <div className=" mx-auto text-[#363636] text-[1.25rem] sm:text-[0.875rem] leading-[1.875rem] sm:leading-[1.5625rem] mt-5 sm:mt-[.62rem] flex flex-col gap-2">
                        <h1 className="text-[1.875rem] sm:text-[1.25rem] font-bold sm:leading-[1.875rem]">
                        Vender na internet é difícil?
                        </h1>
                        <p className="mt-4">
                        Se você pensar em vender 10 mil cursos de uma só vez, certamente é difícil. Mas vender 1 curso, é mais simples do que você imagina, basta seguir os protocolos.
                        </p>
                        <p >
                        Quando você vende um curso, não é porque é um gênio do marketing e conseguiu encontrar um único cliente possível, mas porque atendeu a necessidade de alguém.
                        </p>
                        <p>
                        Conforme vai implementando os protocolos, você vende mais um, mais dois, mais dez, mais cem… Ou seja:
                        </p>
                        <p>
                        Se vende {" "}<strong>1</strong>, vende {" "}<strong>10</strong>. Se vende {" "}<strong>10</strong>, vende {" "}<strong>100</strong>. Se vende {" "}<strong>100</strong>, vende {" "}<strong>1.000</strong>. Se vende {" "}<strong>1.000</strong>, vende {" "}<strong>10.000</strong>.
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-[.94rem] sm:gap-[.31rem] text-[0.875rem] sm:text-[0.75rem] text-[#78787A] font-light leading-[1.375rem] w-[48.1875rem] sm:w-[20.625rem] h-[6.5rem] bg-[#F9F7F7] border border-[#C8C8C8] rounded-[.5rem] mx-auto mt-[4.87rem] sm:mt-[3.12rem] ">
          <Image src={Arrow} alt="" />
          <p className="w-[37.6875rem] sm:w-[17.43rem]">
          São mais de 100 milhões de brasileiros com acesso a internet, buscando por produtos digitais todos os dias.{" "}<span className="font-semibold">Eles estão procurando algo que você pode vender.</span>
          </p>
        </div>
            </section>
        </main>
    )
}