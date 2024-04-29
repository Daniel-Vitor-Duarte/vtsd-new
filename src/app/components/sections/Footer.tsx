
export default function Footer(){
    return(
        <main className="">
            <div className="w-[85%] h-[0.0625rem] bg-[#B1B1B1] mx-auto mt-[6.25rem] sm:mt-[3.12rem]"></div>
            <section className="text-[#78787A] text-[0.75rem] sm:text-[0.5rem] leading-[1.3125rem] sm:leading-[0.8125rem] text-center flex flex-col items-center gap-2 max-w-[68.8125rem] sm:w-[22.56rem] mm:px-6 mx-auto pt-[1.56rem] pb-[1.25rem] sm:pb-[.67rem]">
                <p>
                Aviso Legal: “Nenhuma informação contida neste produto deve ser interpretada como uma afirmação da obtenção de resultados. Qualquer referência ao desempenho passado ou potencial de uma estratégia abordada no conteúdo não é, e não deve ser interpretada como uma recomendação ou como garantia de qualquer resultado específico.”
                </p>
                <p>
                Copyright © 2022 Inc. Todos os direitos reservados. Ready To Go. CNPJ: 37.643.030/0001-26 
                </p>
                <p className="font-semibold">
                Política de Privacidade | Política de vendas | Avisos legais
                </p>
            </section>
        </main>
    )
}