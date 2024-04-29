import React, { useState } from 'react';
import Image from "next/image";



const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item  text-[1.25rem] w-full bg-[#F5F5F5] min-h-[2.75rem] rounded-[0.5rem] mt-2 pl-4 pt-2 cursor-pointer">     
        <div className="accordion-header flex gap-2 items-center " onClick={toggleAccordion}>
        <Image src={isOpen ? '/Icons/chevron-down.svg' : '/Icons/chevron-right.svg'} alt="Chevron" className='w-[22px] h-[22px]' width={22} height={22}/>
          <h2 className='font-semibold text-[1.25rem] sm:text-[0.75rem] text-[#545353] leading-[1.75rem] sm:leading-[1.25rem] '>{title}</h2>
        </div>
      {isOpen && <div className="accordion-content max-w-[63.25rem] sm:max-w-[16.125rem] mx-auto text-[1.25rem] sm:text-[0.75rem] mt-[.81rem] font-light whitespace-pre-line pb-4" onClick={toggleAccordion}>{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

// Example usage
const accordionItems = [
  { title: 'Funciona para quem não entende de marketing?', content: 'Você não precisa entender de marketing para aplicar o VTSD. Para isso existe o método. Você vai ter acesso ao passo a passo e vai contar com a orientação para implementar cada etapa do processo.' },
  { title: 'Eu me sinto muito cru | Sinto que não tenho nada para ensinar. É para mim?', content: 'Quando comecei busquei uma parceria no mercado. No Venda Todo Santo Dia, temos um módulo específico para te ensinar a encontrar e abordar um parceiro(a) de negócios. Assim você pode trabalhar cuidando da estratégia, sem ter que aparecer ou ensinar.' },
  { title: 'Funciona para lançamento?', content: 'Se você faz lançamento e ainda não tem um produto perpétuo, está deixando dinheiro na mesa. Isso porque o perpétuo aumenta o resultado do lançamento (e vice versa). No VTSD, você aprende a combinar as duas estratégias através de Picos de Vendas. Resultado: você vende todos os dias e ainda tem um “BOOM” de vendas em períodos específicos do ano.' },
  { title: 'Funciona para afiliados?', content: 'O VTSD não é um curso específico para afiliados. Mas se você já trabalha vendendo como afiliado, vai poder utilizar o mesmo método para aumentar os resultados, afinal um afiliado que conhece a metodologia de um dos cursos que mais vende no Brasil, certamente terá uma performance melhor.' },
  { title: 'Ensina copy?', content: 'O módulo de copy é um verdadeiro curso de copy. Vai aprender como despertar interesse genuíno nas pessoas através da escrita. Copys para página de vendas, vídeo de vendas, copy para e-mail, para conteúdo no Youtube e Redes sociais. Ensino até uma copy que faz seu público lembrar de você por pelo menos uns 20 dias, aliás a usei nessa página. E também vai aprender também a técnica da escala de atenção que faz as pessoas ficarem vidradas em você.' },
  { title: 'Ensina tráfego?', content: 'Melhor que muito curso de tráfego que você já deve ter visto. Estratégias de tráfego do básico ao avançado para Facebook ADS, Google ADS e Youtube ADS, além de SEO para Youtube e SEO para Google. Aqui você aprende a não gastar mais do que o necessário para ter retorno.' },
];

const App = () => {
  return (
    <div className=''>
      
      <Accordion items={accordionItems} />
    </div>
  );
};

export default App;
