import { useEffect, useRef, useState } from 'react';
import Dialog from './index';
import Image from 'next/image';

// Define the structure of a testimonial
interface Testimonial {
  nome: string;
  sub: string | JSX.Element;
  resumo: JSX.Element;
  thumb: string;
  thumb2: string;
  embedId: string;
}

// Array of testimonials
const depoimentos: Testimonial[] = [
  {
    nome: "Renato Asse",
    sub: "+R$1M",
    resumo: (
      <>
        Após entrar para o VTSD o crescimento foi impressionante. Renato já faturou mais de 1 MILHÃO DE REAIS em seu primeiro ano. No vídeo ele explica com detalhes como foi o processo e como as vendas começaram a acontecer.
      </>
    ),
    thumb: "renato-asse.webp",
    thumb2: "renato-asseM.webp",
    embedId: "QaTemJjmsd4",
  },
  {
    nome: "João Pedro e Amanda",
    sub: "100K em 3 meses",
    resumo: (
      <>
        Em três meses faturamos mais de 100 MIL REAIS e até o momento quase 300 MIL REAIS.” Amanda ganhava R$500 por mês e saiu do interior do Piauí para tentar a vida em SP, junto com o namorado.
      </>
    ),
    thumb: "joao-e-amanda.webp",
    thumb2: "joao-e-amandaM.webp",
    embedId: "4jHmCFLgbqM",
  },
  {
    nome: "Arthur Morais",
    sub: (
      <>
        Não ia com a <br /> cara do Ladeira
      </>
    ),
    resumo: (
      <>
        Arthur demorou entrar para o VTSD porque a esposa não ia com a cara do Ladeira. E esse não foi o primeiro relato desse tipo. A realidade é que o Ladeira não é o cara mais apessoado do mundo e você pode até não gostar das piadas ruins ou daquele cabelo bagunçado, mas não há como negar os resultados incríveis que ele tem proporcionado aos alunos. É realmente incontestável.
      </>
    ),
    thumb: "arthur-morais.webp",
    thumb2: "arthur-moraisM.webp",
    embedId: "2vH_2TjG6S8",
  },
];

function YoutubeDialog() {
  const refDialog = useRef<HTMLDialogElement>(null);
  const [activeEmbedId, setActiveEmbedId] = useState<string>('');

  const openModal = (embedId: string) => {
    document.body.style.overflow = 'hidden';
    setActiveEmbedId(embedId);
    refDialog.current?.showModal();
  };

  const closeModal = (animation: string) => {
    document.body.style.overflow = '';
    document.body.style.overflowX = "";
    if (refDialog.current) {
      refDialog.current.classList.add(animation);
      refDialog.current.addEventListener(
        "webkitAnimationEnd",
        function animationEnd() {
          refDialog.current?.classList.remove(animation);
          refDialog.current?.close();
          refDialog.current?.removeEventListener(
            "webkitAnimationEnd",
            animationEnd,
            false
          );
        }
      );
    }
  };

  useEffect(() => {
    refDialog.current?.addEventListener("click", function (event) {
      var rect = refDialog.current?.getBoundingClientRect();
      if (rect) {
        if (
          rect.left > event.clientX ||
          rect.right < event.clientX ||
          rect.top > event.clientY ||
          rect.bottom < event.clientY
        ) {
          closeModal("hide-bottom");
        }
      }
    });
  }, []);

  return (
    <div>
      <div className="carousel-container w-full mx-auto flex justify-center gap-12 mt-6">
        {depoimentos.map((depoimento, index) => (
          <div key={index} className={`carousel-item w-full sm:w-1/3 rounded-2xl cursor-pointer text-[#565656] transition-all duration-300 ${index === 1 ? 'active' : ''}`} onClick={() => openModal(depoimento.embedId)}>
            <div className="carousel-image-wrapper">
              <Image className="carousel-image rounded-2xl min-h-[31.625rem]" src={`/vtsd/Images/${depoimento.thumb}`} alt={depoimento.nome} layout="responsive" width={664} height={490} style={{ objectFit: "cover" }} />
            </div>
            <div className={`carousel-text  max-w-[46.2rem] mx-auto mt-4 ${index === 1 ? 'active' : ''}`}>
              <div className='text-right'>
                <h1 className="text-[1.25rem] font-bold">{depoimento.nome}</h1>
                <p className='text-[1.5rem] font-bold text-[#04C8B6]'>{depoimento.sub}</p>
              </div>
              <p className="text-[0.875rem] text-[#363636] leading-[1.5rem] mt-2 max-w-[25.8125rem] border-l-[0.0625rem]  border-white pl-6">{depoimento.resumo}</p>
            </div>
          </div>
        ))}
      </div>
      <Dialog ref={refDialog} activeEmbedId={activeEmbedId} transitions="top-to-bottom" />
    </div>
  );
}

export default YoutubeDialog;
