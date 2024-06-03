"use client";
import { useState } from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from "@chakra-ui/react";

const SectionFaq: React.FC = () => {
  const faqs = [
    {
      title: 'Funciona para quem não entende de marketing?',
      text: () => (
        <div>
          Você não precisa entender de marketing para aplicar o VTSD. Para isso existe o método. Você vai ter acesso ao passo a passo e vai contar com a orientação para implementar cada etapa do processo.
        </div>
      ),
    },
    {
      title: 'Eu me sinto muito cru | Sinto que não tenho nada para ensinar. É para mim?',
      text: () => (
        <div>
          Quando comecei busquei uma parceria no mercado. No Venda Todo Santo Dia, temos um módulo específico para te ensinar a encontrar e abordar um parceiro(a) de negócios. Assim você pode trabalhar cuidando da estratégia, sem ter que aparecer ou ensinar.
        </div>
      ),
    },
    {
      title: 'Funciona para lançamento?',
      text: () => (
        <div>
          Se você faz lançamento e ainda não tem um produto perpétuo, está deixando dinheiro na mesa. Isso porque o perpétuo aumenta o resultado do lançamento (e vice versa). No VTSD, você aprende a combinar as duas estratégias através de Picos de Vendas. Resultado: você vende todos os dias e ainda tem um “BOOM” de vendas em períodos específicos do ano.
        </div>
      ),
    },
    {
      title: 'Funciona para afiliados?',
      text: () => (
        <div>
          O VTSD não é um curso específico para afiliados. Mas se você já trabalha vendendo como afiliado, vai poder utilizar o mesmo método para aumentar os resultados, afinal um afiliado que conhece a metodologia de um dos cursos que mais vende no Brasil, certamente terá uma performance melhor.
        </div>
      ),
    },
    {
      title: 'Ensina copy?',
      text: () => (
        <div>
          O módulo de copy é um verdadeiro curso de copy. Vai aprender como despertar interesse genuíno nas pessoas através da escrita. Copys para página de vendas, vídeo de vendas, copy para e-mail, para conteúdo no Youtube e Redes sociais. Ensino até uma copy que faz seu público lembrar de você por pelo menos uns 20 dias, aliás a usei nessa página. E também vai aprender também a técnica da escala de atenção que faz as pessoas ficarem vidradas em você.
        </div>
      ),
    },
    {
      title: 'Ensina tráfego?',
      text: () => (
        <div>
          Melhor que muito curso de tráfego que você já deve ter visto. Estratégias de tráfego do básico ao avançado para Facebook ADS, Google ADS e Youtube ADS, além de SEO para Youtube e SEO para Google. Aqui você aprende a não gastar mais do que o necessário para ter retorno.
        </div>
      ),
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | number[]>([]);

  const handleToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? [] : index));
  };

  return (
    <div className="w-full mt-12 sm:mt-6 text-[#363636]">
      <div className="flex flex-col">
        <Accordion index={expandedIndex} allowMultiple={false}>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <>
                <h2>
                  <AccordionButton
                    className={`${expandedIndex === index ? "rounded-t-2xl " : "rounded-2xl"
                      } w-full relative flex mt-2 sm:text-[.875rem] lg:font-semibold leading-[25px] text-left font-semibold py-4 px-[1.5rem] pl-[19px] bg-white sm:bg-transparent`}
                    onClick={() => handleToggle(index)}
                  >
                    {faq.title}
                    <AccordionIcon
                      style={{ color: "#DFDFDF" }}
                      className="absolute right-[15px] text-[1.5rem]"
                    />
                  </AccordionButton>
                </h2>
                <AccordionPanel className="text-[#545353] flex justify-center pt-[20px] sm:text-[.875rem] text-left p-[20px] sm:px-4 bg-white sm:bg-transparent rounded-b-lg">
                  <span>{faq.text()}</span>
                </AccordionPanel>
              </>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default SectionFaq;
