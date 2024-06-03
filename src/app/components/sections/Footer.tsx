import Logo from "public/Icons/ready-to-go-logo.svg";
import Image from 'next/image';



export default function Footer() {
    return (
        <main >
            <section className="bg-[#D7D6D6] w-full py-8 ">
                <div className="max-w-[90rem] mx-auto flex sm:flex-col sm:items-center sm:gap-4 justify-between text-[.75rem] sm:text-[0.625rem] text-[#363636] font-semibold">
                    <p>
                        Todos os direitos reservados. Ready To Go. CNPJ: 37.643.030/0001-26
                    </p>
                    <div className="flex gap-4 sm:gap-2 sm:items-end sm:font-bold sm:text-[0.875rem]">
                        <p>
                            Designed by
                        </p>
                        <Image src={Logo} alt="" />

                    </div>
                </div>
            </section>
        </main>
    )
}