import Image from "next/image";
import Grade from "public/Images/grade.png"
import Logo from "public/Images/logo-vtsd-obrigado.png"
import Verifique from "public/Icons/directbox-receive.svg"
import Procure from "public/Icons/sms-search.svg"
import Arrow from "public/Icons/arrow-down.svg"
import LogoFooter from "public/Icons/logo-ready-to-go 2.svg"

export default function Obrigado() {
    return (
        <main className="bg-[#F6F6F6]">
                <div className="absolute top-0 w-screen">
                    <div className="relative">
                        <Image src={Grade} alt="" />
                    </div>
                    <div className="bg-grade -mt-40 relative z-10"></div>
                </div>
            <div className="relative z-10">
                <div className="max-w-[53.9375rem] sm:w-[16.5625rem] h-[0.375rem] bg-[#00A99D] rounded-b-[0.9375rem] mx-auto z-10"></div>
                <div className="flex flex-col items-center mt-[9.19rem] sm:mt-[3rem] z-20 ">
                    <Image src={Logo} alt="" />
                    <h1 className="text-[3rem] sm:text-[2.5rem] font-bold text-[#04C8B6] mt-[5.4rem] sm:mt-[3rem]">
                        Parabéns!
                    </h1>
                    <h2 className="text-[1.25rem] sm:text-[1.15rem] leading-[1.875rem] max-w-[39.25rem] sm:max-w-[22rem] mt-[.94rem] sm:text-center">
                        <span className="text-[#04C8B6] font-semibold">Muito em breve</span> nossa equipe <br className="hidden sm:block"/> entrará em contato com você. <br className="hidden sm:block"/>
                        Para se preparar, siga estas etapas:
                    </h2>
                    <Image className="mt-[1.13rem]" src={Arrow} alt="" />
                    <div className="text-[.875rem] text-[#78787A] font-light leading-[1.375rem] bg-[#F4F4F4] py-[1.56rem] px-[1.88rem] rounded-xl border border-[#EDEDED] flex items-center gap-6 mt-[1.47rem]">
                        <Image src={Verifique} alt="" />
                        <p className="max-w-[39.3125rem] sm:max-w-[16rem]">
                            <span className="font-semibold text-[#363636]">Verifique seu e-mail:</span> <br /> {" "}
                            Dê uma olhada na sua caixa de entrada para confirmar sua inscrição e conhecer as próximas etapas para ingressar no VTSD.
                        </p>
                    </div>
                    <div className="text-[.875rem] text-[#78787A] font-light leading-[1.375rem] bg-[#F4F4F4] py-[1.56rem] px-[1.88rem] rounded-xl border border-[#EDEDED] flex items-center gap-6 mt-[1.13rem]">
                        <Image src={Procure} alt="" />
                        <p className="max-w-[39.3125rem] sm:max-w-[16rem]">
                            <span className="font-semibold text-[#363636]">Procure em outras pastas:</span> <br /> {" "}
                            Se não encontrar nosso e-mail na caixa de entrada, cheque na aba {" "} <strong>"Promoções"</strong> ou na caixa de {" "} <strong>"SPAM"</strong>. Se o e-mail estiver lá, mova-o para a caixa de entrada principal para garantir que você receberá nossas futuras mensagens.
                        </p>
                    </div>
                </div>
                <footer
                    className="flex flex-col justify-center items-center relative  py-8 px-20 sm:px-10 w-screen bg-[#363636] text-white mt-[3.5rem]">
                    <div className="text-[0.75rem] font-semibold flex sm:flex-col sm:text-center sm:items-center sm:gap-6 justify-between w-full">
                        <p>
                            © 2023 Ready To Go. Todos os direitos reservados.
                        </p>
                        <div className="flex gap-[.44rem]">
                            <p>
                                Designed by
                            </p>
                            <div>
                            <Image src={LogoFooter} alt="" />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    )
}