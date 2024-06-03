import React, { useState, useEffect } from 'react';
import Image from "next/image";

interface ImageData {
  name: string;
  src: string;
}

const AccordionItem = ({ name, src }: ImageData) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [images1, setImages1] = useState<ImageData[]>([]);
  const [images2, setImages2] = useState<ImageData[]>([]);
  const [images3, setImages3] = useState<ImageData[]>([]);
  const [images4, setImages4] = useState<ImageData[]>([]);
  const [imagesMobile, setImagesMobile] = useState<ImageData[]>([]);

  useEffect(() => {
    const newImages1 = [];
    const newImages2 = [];
    const newImages3 = [];
    const newImages4 = [];
    const newImagesMobile = [];
    for (let i = 1; i <= 16; i++) {
      newImages1.push({ name: `Image ${i}`, src: `Depoimento_${i}.jpg` });
    }
    for (let i = 17; i <= 31; i++) {
      newImages2.push({ name: `Image ${i}`, src: `Depoimento_${i}.jpg` });
    }
    for (let i = 32; i <= 46; i++) {
      newImages3.push({ name: `Image ${i}`, src: `Depoimento_${i}.jpg` });
    }
    for (let i = 48; i <= 65; i++) {
      newImages4.push({ name: `Image ${i}`, src: `Depoimento_${i}.jpg` });
    }
    for (let i = 1; i <= 65; i++) {
      newImagesMobile.push({ name: `Image ${i}`, src: `Depoimento_${i}.jpg` });
    }
    setImages1(newImages1);
    setImages2(newImages2);
    setImages3(newImages3);
    setImages4(newImages4);
    setImagesMobile(newImagesMobile);
  }, []);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobile = () => {
    
  };

  return (
    <div className="w-fit mx-auto mt-[3.94rem] ">
      <div className='sm:hidden'>
        <h1 className="sm:w-[20rem] text-[3rem] sm:text-[1.125rem] sm:leading-7 text-center text-[#363636] font-bold mx-auto mt-[3.81rem] max-w-[50rem]">
          Veja alguns {" "}<span className="text-[#04C8B6]">resultados</span> {" "} reais dos alunos do VTSD
        </h1>

        <div className='mt-[5.69rem] flex items-start max-w-[76rem] gap-[.84rem]'>
          {/* Coluna 1 */}
          <div className="max-w-[18.6rem] flex justify-center items-center gap-2 flex-wrap">
            {images1.slice(0, isOpen ? images1.length : 2).map((image, index) => (
              <Image className='rounded-2xl' key={index} src={`/vtsd/b/resultados/${image.src}`} alt={image.name} width={297.96} height={0} />
            ))}
          </div>
          {/* Coluna 2 */}
          <div className="max-w-[18.6rem] flex justify-center items-center gap-2 flex-wrap">
            {images2.slice(0, isOpen ? images2.length : 2).map((image, index) => (
              <Image className='rounded-2xl' key={index} src={`/vtsd/b/resultados/${image.src}`} alt={image.name} width={297.96} height={0} />
            ))}
          </div>
          {/* Coluna 3 */}
          <div className="max-w-[18.6rem] flex justify-center items-center gap-2 flex-wrap">
            {images3.slice(0, isOpen ? images3.length : 2).map((image, index) => (
              <Image className='rounded-2xl' key={index} src={`/vtsd/b/resultados/${image.src}`} alt={image.name} width={297.96} height={0} />
            ))}
          </div>
          {/* Coluna 4 */}
          <div className="max-w-[18.6rem] flex justify-center items-center gap-2 flex-wrap">
            {images4.slice(0, isOpen ? images4.length : 2).map((image, index) => (
              <Image className='rounded-2xl' key={index} src={`/vtsd/b/resultados/${image.src}`} alt={image.name} width={297.96} height={0} />
            ))}
          </div>
        </div>
        <div className="bg-gradiente-result h-[15.25rem] w-full absolute left-0 flex justify-center items-center -mt-[11.7rem]">
          <button className="py-4 px-10 h-fit bg-[#DEDEDE] rounded-lg" type="button" onClick={toggleAccordion}>
            <p className="text-[.875rem] text-[#5D5E61]">
              Ver +165 Depoimentos
            </p>
          </button>
        </div>
      </div>
      <div className='sm:block hidden'>
        <h1 className="sm:w-[20rem] text-[1.5rem] leading-8 text-center text-[#363636] font-bold mx-auto mt-[3.81rem] max-w-[50rem]">
        Resultados dos {" "}<span className="text-[#04C8B6]"> Alunos</span>
        </h1>
        <div className='text-[.625rem] text-[#676767] px-4 py-1 border border-[#1DE4CF] rounded-lg w-fit mx-auto mt-[.94rem]'>
          <p>
          Alunos que faturam alto
          </p>
        </div>
        <div className='mt-[1.25rem] max-w-[20.509rem] w-full'>
          {/* Coluna Mobile */}
          <div className=" flex justify-center items-center gap-2 flex-wrap">
            {imagesMobile.slice(0, isOpen ? imagesMobile.length : 3).map((image, index) => (
              <Image className='rounded-2xl' key={index} src={`/vtsd/b/resultados/${image.src}`} alt={image.name} width={328.14} height={0} />
            ))}
          </div>
        </div>
        <div className="bg-gradiente-result h-[15.25rem] w-full absolute left-0 flex justify-center items-center -mt-[11.7rem]">
          <button className="py-4 px-10 h-fit bg-[#DEDEDE] rounded-lg" type="button" onClick={toggleAccordion}>
            <p className="text-[.875rem] text-[#5D5E61]">
              Ver +165 Depoimentos
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }: { items: ImageData[] }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} name={item.name} src={item.src} />
      ))}
    </div>
  );
};

// Example usage of the Accordion with dummy data
const accordionItems: ImageData[] = [
  { name: 'Results from our students', src: '/path/to/default/image.png' }
];

const App = () => {
  return (
    <div>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;
