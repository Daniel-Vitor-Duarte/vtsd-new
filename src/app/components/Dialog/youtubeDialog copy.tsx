import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Dialog from '@/app/components/Dialog/index'; // Make sure to import your Dialog component

// Define an interface for the testimonial data
interface Testimonial {
  nome: string;
  sub: string | React.ReactNode;
  resumo: React.ReactNode;
  thumb: string;
  embedId: string;
}

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="custom-arrow prev-arrow mx-2" onClick={onClick}>
      <img src="Icons/arrow-left.svg" alt="Previous" />
    </div>
  );
};

// Custom Next Arrow Component
const NextArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="custom-arrow next-arrow mx-2 rotate-180" onClick={onClick}>
      <img src="Icons/arrow-left.svg" alt="Next" />
    </div>
  );
};

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(2); // Start from the third item
  const sliderRef = useRef<Slider>(null);

  const refDialog = useRef<HTMLDialogElement>(null);
  const [activeEmbedId, setActiveEmbedId] = useState('');

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
    const handleClickOutside = (event: MouseEvent) => {
      const rect = refDialog.current?.getBoundingClientRect();
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
    };

    refDialog.current?.addEventListener("click", handleClickOutside);

    return () => {
      refDialog.current?.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    cssEase: 'linear',
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  const depoimentos: Testimonial[] = [
    {
      nome: "Renato Asse",
      sub: "+R$1M",
      resumo: (
        <>
          Após entrar para o VTSD o crescimento foi impressionante. Renato já faturou mais de 1 MILHÃO DE REAIS em seu primeiro ano. No vídeo ele explica com detalhes como foi o processo e como as vendas começaram a acontecer.
        </>
      ),
      thumb: "images/renato-asseM.webp",
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
      thumb: "images/joao-e-amandaM.webp",
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
      thumb: "images/arthur-moraisM.webp",
      embedId: "2vH_2TjG6S8",
    },
  ];

  return (
    <div className="w-full relative mt-[1.25rem]">
      <Slider ref={sliderRef} {...settings}>
        {depoimentos.map((item, index) => (
          <div
            key={index}
            className={`  `}
            onClick={() => index === currentSlide && openModal(item.embedId)} // Open modal on click
          >
            <img
              src={item.thumb}
              alt={item.nome}
              className={`w-full   object-cover rounded-2xl transition-filter duration-500`}
            />
            {index === currentSlide && (
              <div className="flex flex-col items-center text-center mt-4 gap-[1.62rem]">
                <div>
                  <p className="text-[1.5rem] font-bold">{item.nome}</p>
                  <p className="text-[1.75rem] font-semibold text-[#04C8B6]">{item.sub}</p>
                </div>
                <p className="text-[0.75rem] leading-5 text-[#363636] ">{item.resumo}</p>
              </div>
            )}
          </div>
        ))}
      </Slider>
      <Dialog ref={refDialog} activeEmbedId={activeEmbedId} transitions="top-to-bottom" />
    </div>
  );
};

export default Carousel;
