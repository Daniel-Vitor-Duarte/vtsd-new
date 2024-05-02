import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ArrowCircle from 'public/Icons/arrow-right-circle.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ModalVideo from 'react-modal-video';



interface Testimonial {
  nome: string;
  resumo: string;
  thumb: string;
  thumb2: string;
  embedId: string;
}


interface SliderProps {
  testimonials: Testimonial[];
}

export default function Carousel({ testimonials }: SliderProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
  const mainSliderRef = useRef<Slider>(null);
  const thumbSliderRef = useRef<Slider>(null);

  const [isOpen, setOpen] = useState(false);


  useEffect(() => {
    if (mainSliderRef.current && thumbSliderRef.current) {
      mainSliderRef.current.slickGoTo(currentVideoIndex);
    }
  }, [currentVideoIndex]);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    fade: true,
    autoplay: false,
    speed: 300,
    lazyLoad: "ondemand",
    asNavFor: thumbSliderRef.current,
    beforeChange: (currentSlide: number, nextSlide: number) => {
      setCurrentVideoIndex(nextSlide);
    }
  };

  const handleClick = (index) => {
    setCurrentVideoIndex(index)
    setOpen(true)
  }

  return (
    <main className='w-[62.1875rem] mt-[1.63rem] overflow-x-hidden'>
      <div className='sm:hidden'>
        <Slider ref={mainSliderRef} {...settings} className="w-full" lazyLoad='progressive'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className=''>
              {currentVideoIndex === index && (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${testimonial.embedId}`}
                title={testimonial.nome}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='mx-auto rounded-[0.49981rem] sm:hidden'
              ></iframe>
              )}
              <ModalVideo
                width="560"
                height="315"
                src={`${testimonial.embedId}`}
                title={testimonial.nome}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='mx-auto rounded-[0.49981rem] sm:block hidden'
              />
            </div>
          ))}
        </Slider>
      </div>


          {/* -------------------------/Mobile/----------------------------- */}
      <div className='hidden sm:block'>
          <div className="w-[60.1875rem] sm:w-full mx-auto mt-[1.5rem] sm:mt-0 gap-4 overflow-x-hidden ">
            <Slider
              ref={thumbSliderRef}
              slidesToShow={3}
              slidesToScroll={1}
              infinite={true}
              dots={false}
              centerMode={false}
              draggable={true}
              speed={200}
              focusOnSelect={true}
            >
              {testimonials.map((testimonial, index) => (
                <div key={'thumbs_' + index} className='px-2 ml-6' >
                  <React.Fragment>
                    <ModalVideo
                      channel="youtube"
                      youtube={{ mute: 0, autoplay: 0 }}
                      isOpen={isOpen}
                      videoId={`${testimonial.embedId}`}
                      onClose={() => setOpen(false)}
                    />
                    </React.Fragment>
                    <div className='bg-[#F9F9F9] px-[2.3rem] py-[1.12rem] rounded-2xl h-[20.625rem]' onClick={() => handleClick(index)}>
                      <h1 className='text-[#817E7E] text-[1.5rem] font-medium'>
                        {testimonial.nome}
                      </h1>
                      <p className='text-[#817E7E] text-[0.875rem]'>
                        Aluno VTSD
                      </p>
                      <img className='mt-4' src={`/images/${testimonial.thumb}`} alt={testimonial.nome} />
                      <p className='text-[#817E7E] text-[0.875rem] mt-[1.31rem]'>
                        {testimonial.resumo}
                      </p>
                    </div>
                  
                </div>
              ))}
            </Slider>
          </div>
        </div>


                {/* -------------------------/Desktop/----------------------------- */}
      <div className='flex justify-center items-center sm:hidden'>
        <button className='mr-2  h-fit rotate-180 sm:hidden' onClick={() => mainSliderRef.current?.slickPrev()}>
          <Image src={ArrowCircle} alt="" />
        </button>
        <div className="w-[60.1875rem] sm:w-full mx-auto mt-[1.5rem] sm:mt-0 gap-4 overflow-x-hidden ">
          <Slider
            ref={thumbSliderRef}
            slidesToShow={3}
            slidesToScroll={1}
            infinite={true}
            dots={false}
            centerMode={false}
            draggable={true}
            speed={200}
            focusOnSelect={true}
          >
            {testimonials.map((testimonial, index) => (
              <div key={'thumbs_' + index} className='px-2' onClick={() => handleClick(index)}>
                <div className='bg-[#F9F9F9] px-[2.3rem] py-[1.12rem] rounded-2xl h-[20.625rem] hover:cursor-pointer'>
                  <h1 className='text-[#817E7E] text-[1.5rem] font-medium'>
                  {testimonial.nome}
                  </h1>
                  <p className='text-[#817E7E] text-[0.875rem]'>
                  Aluno VTSD
                  </p>
                  <img className='mt-4' src={`/images/${testimonial.thumb}`} alt={testimonial.nome} />
                  <p className='text-[#817E7E] text-[0.875rem] mt-[1.31rem]'>
                  {testimonial.resumo}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button className='mr-2 h-fit  sm:hidden' onClick={() => mainSliderRef.current?.slickNext()}>
          <Image src={ArrowCircle} alt="" />
        </button>
      </div>
    </main>
  );
}