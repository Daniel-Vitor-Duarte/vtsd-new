import Image from "next/image";
import Line from "public/Icons/dashed-line.svg"


export default function PlanoMobile() {
  return (
    <main>
      <section className="w-full flex flex-row-reverse justify-end mt-[1.75rem] overflow-x-hidden pl-4">
        <div className="w-fit flex flex-col text-[#666] ">


          <div className="flex flex-col justify-center h-[9.05rem] pl-[2.06rem] font-bold rounded-r-2xl text-[#3D3D3D] bg-white">
            <div className="">
              <h1 className="text-[1.375rem]">Nível 01</h1>
              <h2 className="my-[.36rem] text-[0.71869rem] uppercase">Newbie</h2>
              <div className="text-black flex text-[0.75rem] font-medium gap-1 border-t-[0.8px] border-[#C8C8C8] pt-[.44rem] max-w-[15.8rem]">
                <p>
                  Objetivo:
                </p>
                <p className="font-bold">
                  Fazer a primeira venda.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-[1.5125rem] h-[1.5125rem] rotate-45 -ml-[.94rem] bg-[#D9D9D9] -mt-[5.8rem]"></div>
            <div className="w-fit py-5 px-6 ">
              <div className="max-w-[17.25rem] mx-auto ">
                <p className="text-[1.31988rem] leading-[1.75988rem] font-bold text-[#666] ">
                  Concepção do produto
                </p>
                <p className="text-[0.75rem] mt-[.31rem]">
                  Nos primeiros passos você já sai com um produto digital, atrativo, com identidade, você realmente acredita no seu produto e grava as suas primeiras aulas em tempo recorde.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center border-y border-[#E3E3E3]">
            <div className="w-[1.5125rem] h-[1.5125rem] rotate-45 -ml-[.94rem] bg-[#D9D9D9] -mt-[5rem]"></div>
            <div className="w-fit py-4 px-6">
              <div className="max-w-[17.25rem] mx-auto">
                <p className="text-[1.31988rem] leading-[1.75988rem] font-bold text-[#666] ">
                  Página de vendas
                </p>
                <p className="text-[0.75rem] mt-[.31rem]">
                  Você sai dessa fase com uma página seccionada que mostra o todo o valor do seu produto. Quem entrar nela, pode apostar, vai ficar com vontade de comprar.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center border-y border-[#E3E3E3]">
            <div className="w-[1.5125rem] h-[1.5125rem] rotate-45 -ml-[.94rem] bg-[#D9D9D9] -mt-[5rem]"></div>
            <div className="w-fit py-4 px-6">
              <div className="max-w-[17.25rem] mx-auto">
                <p className="text-[1.31988rem] leading-[1.75988rem] font-bold text-[#666] ">
                  Vídeo de Vendas
                </p>
                <p className="text-[0.75rem] mt-[.31rem]">
                  Hora de gravar um vídeo de vendas com um conteúdo de valor, você entrega um conteúdo tão bom que as pessoas vão querer comprar o seu produto.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center border-t border-[#E3E3E3]">
            <div className="w-[1.5125rem] h-[1.5125rem] rotate-45 -ml-[.94rem] bg-[#D9D9D9] -mt-[4.85rem]"></div>
            <div className="w-fit py-4 px-6">
              <div className="max-w-[17.25rem] mx-auto">
                <p className="text-[1.31988rem] leading-[1.75988rem] font-bold text-[#666] ">
                  Anúncios no Facebook
                </p>
                <p className="text-[0.75rem] mt-[.31rem]">
                  Você cria e coloca no ar os seus primeiros anúncios no instagram e no facebook. Você já sai dessa etapa com algumas vendas. É instigante, motivador.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center h-[9.05rem] pl-[2.06rem] font-bold rounded-r-2xl text-white bg-[#FF569D] mt-8">
            <h1 className="text-[1.375rem]">Nível 02</h1>
            <h2 className="my-[.36rem] text-[0.71869rem] uppercase ">soft</h2>
            <div className="flex gap-1 text-[0.75rem] border-t-[0.8px] border-[#FFFFFF] pt-[.44rem] max-w-[15.8rem]">
              <p>
                Objetivo:
              </p>
              <p className=" font-bold ">
                Faturar 10k
              </p>
            </div>
          </div>

          <div className="flex items-center mt-6">
            <div className="w-[1.5125rem] h-[1.5125rem] rotate-45 -ml-[.94rem] bg-[#D9D9D9] -mt-[5.5rem]"></div>
            <div className="w-fit py-4 px-6 rounded-lg">
              <div className="max-w-[17.25rem] mx-auto">
                <p className="text-[1.31988rem] leading-[1.75988rem] font-bold text-[#666] ">
                  Finaliza a gravação do curso
                </p>
                <p className="text-[0.75rem] mt-[.31rem]">
                  As primeiras vendas já aconteceram e você validou a sua ideia de produto, agora é só terminar de gravar.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center border-y border-[#E3E3E3]">
            <div className="w-[1.5125rem] h-[1.5125rem] rotate-45 -ml-[.94rem] bg-[#D9D9D9] -mt-[6.2rem]"></div>
            <div className="w-fit py-4 px-6 rounded-lg">
              <div className="max-w-[17.25rem] mx-auto">
                <p className="text-[1.31988rem] leading-[1.75988rem] font-bold text-[#666] ">
                  Otimização do tráfego
                </p>
                <p className="text-[0.75rem] mt-[.31rem]">
                  Aqui é quando começa a entender os números, quais anúncios parar e como identificar os que mais estão vendendo para aumentar o investimento e replicar o mesmo formato.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center border-y border-[#E3E3E3]">
            <div className="w-[1.5125rem] h-[1.5125rem] rotate-45 -ml-[.94rem] bg-[#D9D9D9] -mt-[6.7rem]"></div>
            <div className="w-fit py-4 px-6 rounded-lg">
              <div className="max-w-[17.25rem] mx-auto">
                <p className="text-[1.31988rem] leading-[1.75988rem] font-bold text-[#666] ">
                  Otimização da página e do vídeo de vendas
                </p>
                <p className="text-[0.75rem] mt-[.31rem]">
                  Você entende mais o seu público a medida que tem mais alunos e deixa a página e o vídeo de vendas cada vez mais direcionados e atrativos.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center border-y border-[#E3E3E3]">
            <div className="w-[1.5125rem] h-[1.5125rem] rotate-45 -ml-[.94rem] bg-[#D9D9D9] -mt-[5rem]"></div>
            <div className="w-fit py-4 px-6 rounded-lg">
              <div className="max-w-[17.25rem] mx-auto">
                <p className="text-[1.31988rem] leading-[1.75988rem] font-bold text-[#666] ">
                  Aumento de Base
                </p>
                <p className="text-[0.75rem] mt-[.31rem]">
                  Chegou a hora de crescer os seus seguidores, quanto mais pessoas te conhecerem mais chances você tem de vender.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center border-t border-[#E3E3E3]">
            <div className="w-[1.5125rem] h-[1.5125rem] rotate-45 -ml-[.94rem] bg-[#D9D9D9] -mt-[6rem]"></div>
            <div className="w-fit py-4 px-6 rounded-lg">
              <div className="max-w-[17.25rem] mx-auto">
                <p className="text-[1.31988rem] leading-[1.75988rem] font-bold text-[#666] ">
                  Pico de vendas
                </p>
                <p className="text-[0.75rem] mt-[.31rem]">
                  É a combinação de perpétuo e lançamento. Ou seja, você tem receita recorrente todo dia, e aproveita para fazer picos de faturamento. Isso pode dobrar o lucro no final do período.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl max-w-[352px] mt-8">
            <div className="flex flex-col justify-center px-8 py-10 font-bold rounded-r-2xl text-white bg-[#353639]">
              <h1 className="text-[1.31988rem] leading-[1.75988rem]">Nível 03</h1>
              <h2 className="my-[.44rem] text-[0.71869rem] uppercase">hard</h2>
              <div className="flex gap-1 text-[.75rem] font-medium border-t-[0.8px] border-[#FFFFFF] pt-[.44rem] max-w-[15.8rem]">
                <p>
                  Objetivo:
                </p>
                <p className="font-bold ">
                  Faturar 100k
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-[1.5125rem] h-[1.5125rem] rotate-45 -ml-[.94rem] bg-[#D9D9D9] -mt-[8.3rem]"></div>
            <div className="w-fit py-4 px-6">
              <div className="max-w-[17.25rem] mx-auto">
                <p className="text-[1.31988rem] leading-[1.75988rem] font-bold text-[#666] ">
                  Mandala 360º
                </p>
                <p className="text-[0.75rem] mt-[.31rem]">
                  Agora você está pronto para fazer todas as fases da mandala da criatividade infinita, descoberta, relacionamento, conversão e remarketing, aqui você aprende a trabalhar com as pessoas independente do momento de compra que elas estão para converter mais alunos no final.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center border-y border-[#E3E3E3]">
            <div className="w-[1.5125rem] h-[1.5125rem] rotate-45 -ml-[.94rem] bg-[#D9D9D9] -mt-[3.9rem]"></div>
            <div className="w-fit py-4 px-6">
              <div className="max-w-[17.25rem] mx-auto">
                <p className="text-[1.31988rem] leading-[1.75988rem] font-bold text-[#666] ">
                  Anúncios no Google
                </p>
                <p className="text-[0.75rem] mt-[.31rem]">
                  Além do facebook trabalhando para você, os seus anúncios também podem aparecer no google e no youtube.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center border-t border-[#E3E3E3]">
            <div className="w-[1.5125rem] h-[1.5125rem] rotate-45 -ml-[.94rem] bg-[#D9D9D9] -mt-[6.5rem]"></div>
            <div className="w-fit py-4 px-6">
              <div className="max-w-[17.25rem] mx-auto">
                <p className="text-[1.31988rem] leading-[1.75988rem] font-bold text-[#666] ">
                  Aumenta a frequência de Pico de vendas
                </p>
                <p className="text-[0.75rem] mt-[.31rem]">
                  Você já aprendeu como funciona o jogo, e pelo menos 3 vezes no ano vai aplicar a estratégia de pico de vendas para ter um pico de faturamento.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center px-8 py-10 font-bold  rounded-r-2xl text-white bg-[#CE42FF]">
            <h1 className="text-[1.31988rem] leading-[1.75988rem]">Nível 04</h1>
            <h2 className="my-[.44rem] text-[.75rem] uppercase">pro</h2>
            <div className=" flex gap-1 text-[0.75rem] border-t-[0.8px] border-[#FFFFFF] pt-[.44rem] max-w-[15.8rem]">
              <p>
                Objetivo:
              </p>
              <p className="font-bold ">
                1M de Faturamento
              </p>
            </div>
          </div>

          <div className="flex items-center ">
            <div className="w-[1.5125rem] h-[1.5125rem] rotate-45 -ml-[.94rem] bg-[#D9D9D9] -mt-[5rem]"></div>
            <div className="w-fit py-4 px-6 rounded-lg">
              <div className="max-w-[17.25rem] mx-auto">
                <p className="text-[1.31988rem] leading-[1.75988rem] font-bold text-[#666] ">
                  Contratação de time
                </p>
                <p className="text-[0.75rem] mt-[.31rem]">
                  Está na hora de crescer o seu time, você vai aprender quais são os primeiros profissionais que deve contratar e como treinar e gerir a sua equipe.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center border-y border-[#E3E3E3]">
            <div className="w-[1.5125rem] h-[1.5125rem] rotate-45 -ml-[.94rem] bg-[#D9D9D9] -mt-[6rem]"></div>
            <div className="w-fit py-4 px-6 rounded-lg">
              <div className="max-w-[17.25rem] mx-auto">
                <p className="text-[1.31988rem] leading-[1.75988rem] font-bold text-[#666] ">
                  Esteira inteligente
                </p>
                <p className="text-[0.75rem] mt-[.31rem]">
                  Aqui o jogo começa a ficar grande. Você vai ativar os protocolos de margem. Cria novos produtos, funis de alta performance e estrutura para que o negócio funcione independente do seu tempo.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center border-t border-[#E3E3E3]">
            <div className="w-[1.5125rem] h-[1.5125rem] rotate-45 -ml-[.94rem] bg-[#D9D9D9] -mt-[7rem]"></div>
            <div className="w-fit py-4 px-6 rounded-lg">
              <div className="max-w-[17.25rem] mx-auto">
                <p className="text-[1.31988rem] leading-[1.75988rem] font-bold text-[#666] ">
                  Escala
                </p>
                <p className="text-[0.75rem] mt-[.31rem]">
                  Aqui você vai ativar os protocolos de expansão. Vai em busca de um volume de tráfego de alta escala e de produtos com muito valor agregado, aumentando a quantidade de vendas e rentabilidade por venda.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* line */}
        <div>


          <div className="h-[185rem] w-[1.4rem] bg-[#A2BEBC]  border-x-[.45rem] border-[#D9D9D9] relative">

            <div className="relative z-20">
              <div className="flex flex-col justify-center items-center p-4 w-[.8125rem] h-[.8125rem] rounded-full border border-gray-400 border-solid shadow-lg bg-[#F0F0F0] absolute -ml-[.8rem] mt-[3.62rem]">
                <div className="shrink-0 w-[1.25rem] h-[1.25rem] bg-white rounded-full "></div>
              </div>
            </div>

            <div className="relative z-20">
              <div className="flex flex-col justify-center items-center p-4 w-[.8125rem] h-[.8125rem] rounded-full border border-gray-400 border-solid shadow-lg bg-[#F0F0F0] absolute -ml-[.8rem] mt-[50.8rem]">
                <div className="shrink-0 w-[1.25rem] h-[1.25rem] bg-[#FF569D] rounded-full "></div>
              </div>
            </div>

            <div className="relative z-20">
              <div className="flex flex-col justify-center items-center p-4 w-[.8125rem] h-[.8125rem] rounded-full border border-gray-400 border-solid shadow-lg bg-[#F0F0F0] absolute -ml-[.8rem] mt-[112rem]">
                <div className="shrink-0 w-[1.25rem] h-[1.25rem] bg-[#353639] rounded-full "></div>
              </div>
            </div>

            <div className="relative z-20">
              <div className="flex flex-col justify-center items-center p-4 w-[.8125rem] h-[.8125rem] rounded-full border border-gray-400 border-solid shadow-lg bg-[#F0F0F0] absolute -ml-[.8rem] mt-[152.2rem]">
                <div className="shrink-0 w-[1.25rem] h-[1.25rem] bg-[#CE42FF] rounded-full "></div>
              </div>
            </div>

          </div>
            <div className="bg-gradiente-result z-20 w-7 h-20 -ml-1  absolute -mt-[5rem]"></div>


        </div>

      </section>
    </main>
  )
}









// import React, { useState, useEffect, useRef } from 'react';

// const MovingCircle: React.FC = () => {
//   const [steps, setSteps] = useState<number>(0);
//   const [hasMoved, setHasMoved] = useState<boolean>(false);
//   const circleRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (circleRef.current && !hasMoved) {
//         const circleTop = circleRef.current.getBoundingClientRect().top;

//         // Se o círculo está a 10rem (160px) do topo da viewport e ainda não chegou ao limite, incrementa os passos
//         if (circleTop <= 160) {
//           setSteps((prevSteps) => prevSteps + 1);
//           setHasMoved(true); // Impede movimento adicional até a posição ser recalculada
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [hasMoved]);

//   useEffect(() => {
//     // Permite o próximo movimento após a transição
//     if (hasMoved) {
//       const timeout = setTimeout(() => {
//         setHasMoved(false);
//       }, 500); // O tempo deve coincidir com a duração da transição CSS

//       return () => clearTimeout(timeout);
//     }
//   }, [hasMoved]);

//   // Calcula a posição do círculo baseado nos passos atuais
//   const topPosition = `${10 + 50 * steps}rem`; // Inicia em 10rem e incrementa 50rem por passo

//   // Calcula a cor baseada nos passos (de preto a secundária)
//   const secondaryColor = '#ff5733'; // Cor secundária desejada
//   const colorStep = steps / 2; // Incremento da cor por passo (ajuste conforme necessário)
//   const circleColor = `rgba(0, 0, 0, ${1 - colorStep})`; // Transição de preto para transparente
//   const backgroundColor = `linear-gradient(to bottom, black ${1 - colorStep * 100}%, ${secondaryColor} ${colorStep * 100}%)`;

//   return (
//     <div
//       ref={circleRef}
//       style={{
//         width: '4rem',
//         height: '4rem',
//         position: 'absolute',
//         top: topPosition,
//         left: '50%',
//         transform: 'translateX(-50%)',
//         background: backgroundColor,
//         borderRadius: '50%',
//         transition: 'top 0.5s ease, background 0.5s ease',
//       }}
//     ></div>
//   );
// };

// export default MovingCircle;
