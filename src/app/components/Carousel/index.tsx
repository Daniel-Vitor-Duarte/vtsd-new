import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Dialog from '@/app/components/Dialog/index'; // Make sure to import your Dialog component

// Define an interface for the carousel data
interface CarouselData {
  id: number;
  imageUrl: string;
  title: string;
  nicho: string;
  description: string;
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
    slidesToShow: 3,
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

  const carouselItems: CarouselData[] = [
    {
      id: 1,
      imageUrl: 'images/aluno-1.webp',
      title: 'Giovana',
      nicho: 'Nutricionista',
      description: 'Já faturou mais de meio milhão de reais como VTSD.',
      embedId: 'LrSzIzgXSiA',
    },
    {
      id: 2,
      imageUrl: 'images/aluno-2.webp',
      title: 'Giovana',
      nicho: 'Nutricionista',
      description: 'Já faturou mais de meio milhão de reais como VTSD.',
      embedId: '-9F5S1MPWMk',
    },
    {
      id: 3,
      imageUrl: 'images/aluno-3.webp',
      title: 'Giovana',
      nicho: 'Nutricionista',
      description: 'Já faturou mais de meio milhão de reais como VTSD.',
      embedId: '9NMtJDUPFbY',
    },
    {
      id: 4,
      imageUrl: 'images/aluna-4.webp',
      title: 'Giovana',
      nicho: 'Nutricionista',
      description: 'Já faturou mais de meio milhão de reais como VTSD.',
      embedId: '19lZawTB6dc',
    },
    {
      id: 5,
      imageUrl: 'images/aluna-5.webp',
      title: 'Giovana',
      nicho: 'Nutricionista',
      description: 'Já faturou mais de meio milhão de reais como VTSD.',
      embedId: 'qE3SIAkxkuU',
    },
  ];

  return (
    <div className="w-full relative mt-12 sm:mt-[1.25rem]">
      <Slider ref={sliderRef} {...settings}>
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`p-4 transform transition-transform duration-500 ${
              index === currentSlide ? 'scale-110' : 'scale-90'
            }`}
            onClick={() => index === currentSlide && openModal(item.embedId)} // Open modal on click
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className={`w-full h-[16.5625rem]  object-cover rounded-2xl transition-filter duration-500 ${
                index !== currentSlide ? 'filter grayscale' : ''
              }`}
            />
            {index === currentSlide && (
              <div className="flex items-end justify-center mt-4 gap-[1.62rem]">
                <div>
                  <p className="text-[1.36444rem] font-bold">{item.title}</p>
                  <p className="text-[0.81869rem] ">{item.nicho}</p>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </Slider>
      <div className="flex w-[30.8rem] justify-between absolute -mt-[2.4rem] ml-[23.2rem]">
        <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current?.slickNext()} />
      </div>
      <Dialog ref={refDialog} activeEmbedId={activeEmbedId} transitions="top-to-bottom" />
    </div>
  );
};

export default Carousel;
