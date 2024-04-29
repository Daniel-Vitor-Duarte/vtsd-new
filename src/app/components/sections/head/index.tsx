"use client";
import Image from "next/image";
import Logo from "public/Icons/Logo.png"
import Avatar from "public/Images/avatar-vtsd.png"
import Form from "@/app/components/Form"


interface YouTubePlayerProps {
    videoId?: string;
    containerClassName?: string;
    iframeClassName?: string;
    containerStyle?: React.CSSProperties;
    iframeStyle?: React.CSSProperties;
  }

 const Head: React.FC<YouTubePlayerProps> = ({ videoId }) => {
    return (
        <main className="mb-[2.61rem] mm:px-6 w-full">
            <div className="max-w-[53.9375rem] sm:w-[16.5625rem] h-[0.375rem] bg-[#00A99D] rounded-b-[0.9375rem] mx-auto"></div>
            <section className="flex flex-col items-center mt-[9.5rem] sm:mt-[6rem]">
                <Image src={Logo} alt="" />
                <h1 className="text-[3rem] sm:text-[1.5rem] text-[#363636] font-bold text-center w-[53rem] sm:w-[21.75rem] leading-[3.75rem] sm:leading-8 mt-[3.06rem]">
                    Qualquer pessoa pode {" "} <br />
                    <span className="text-[#B7BABA] ">começar um negócio digital.</span>
                </h1>
                <div className="flex gap-[1.12rem] sm:gap-[.31rem] mt-[1.12rem] items-center">
                    <Image src={Avatar} alt="" />
                    <p className="text-[#676767] sm:text-[0.625rem]">
                        + 25 mil  alunos que Vendem todo Santo Dia
                    </p>
                </div>

            </section>
            <div className="hidden sm:block w-[16.5625rem] h-[0.375rem] rounded-t-[0.9375rem] bg-[#D9D9D9] mx-auto mt-[3.51rem]"></div>
            <section className="py-[4.63rem] px-[6.94rem] sm:p-0 sm:w-[22.4375rem] flex items-center sm:flex-col sm:items-center gap-[1.81rem] mx-auto w-fit bg-[#F9F9F9] rounded-[0.9375rem] mt-[5.75rem] sm:mt-0 sm:py-[2.19rem]">
                <div className="sm:flex-col sm:items-center sm:flex">
                    <h1 className="text-[3rem] sm:text-[1.5rem] text-[#676767] font-bold leading-[3.75rem] sm:leading-8">
                        <span className="text-[#B7BABA]">Lista de espera</span> {" "} para <br /> o Venda Todo Santo Dia
                    </h1>
                    <p className="text-[#868282] ml-2 sm:ml-0 text-[1.1875rem] sm:text-[0.875rem] mt-[1.69rem]">
                        Preencha os campos para receber uma {" "} <br className="hidden sm:block" /> oferta especial:
                    </p>
                </div>
                <div>
                    <Form />
                </div>
            </section>
            <div className="hidden sm:block w-[16.5625rem] h-[0.375rem] rounded-b-[0.9375rem] bg-[#D9D9D9] mx-auto "></div>
            <section className="mt-[4.62rem] text-[1.125rem] sm:text-[0.75rem] font-light leading-[1.875rem] sm:leading-[1.25rem] text-[#676767] flex flex-col items-center max-w-[55.06rem] sm:w-[22.3125rem] mx-auto gap-[1.12rem] sm:px-[.62rem]">
                <h1 className="text-[1.87rem] sm:text-[1.125rem] text-[#363636] font-bold text-center sm:text-left w-[53rem] sm:w-[20.06rem]">
                    Assista a aula de introdução gratuitamente e você vai aprender {" "} <span className="text-[#A1A1A1]">3 coisas:</span>
                </h1>
                <div className="border-[#DFDFDF] border rounded-[0.47188rem] py-[1.44rem] sm:p-[.62rem] px-[4.31rem]">
                    <p>
                        Como criar um projeto protótipo e fazer a sua primeira venda em pouco tempo e gastando pouco dinheiro;
                    </p>
                </div>
                <div className="border-[#DFDFDF] border rounded-[0.47188rem] py-[1.44rem] sm:p-[.62rem] px-[4.31rem]">
                    <p>
                        Qual o melhor jeito de começar aproveitando os recursos que estão a sua disposição (e você não consegue enxergar), e superar suas possíveis limitações;
                    </p>
                </div>
                <div className="border-[#DFDFDF] border rounded-[0.47188rem] py-[1.44rem] sm:p-[.62rem] px-[4.31rem]">
                    <p>
                        Como usar o poder de inteligência do Google e Facebook para criar uma fonte de renda inacreditavelmente alta.
                    </p>
                </div>
                <iframe
                    className="w-full aspect-video youtube-vid rounded-md  mx-auto sm:max-w-[22rem] max-w-[54.43rem]"
                    src="https://www.youtube.com/embed/EdrQPJZ77vY"
                    allowFullScreen
                />
            </section>
        </main>
    )
}

export default Head