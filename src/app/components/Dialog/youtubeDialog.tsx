import { useEffect, useRef, useState } from 'react';
import Dialog from './index';
import Image from 'next/image';


// Define the structure of a testimonial
interface Testimonial {
  nome: string;
  resumo: string;
  thumb: string;
  thumb2: string;
  embedId: string;
}

// Array of testimonials
const depoimentos = [
  {
    nome: "Renato Asse",
    resumo: (
      <>
        &quot;O resultado do primeiro dia que apliquei o VTSD foi maior que o investimento. &#91; &hellip; &#93; Só segue o passo-a-passo e não tem erro.&quot; <br /> {" "}
Pesquisando na internet, Renato encontrou o Podcast do Ladeira. Antes de entrar para o VTSD e mesmo sem entender muito bem, criou seu produto digital e colocou em prática o que o Leandro falava. Após entrar para o VTSD o crescimento foi impressionante. Renato já faturou mais de 1 MILHÃO DE REAIS em menos de um ano. No vídeo ele explica com detalhes como foi o processo e como as vendas começaram a acontecer.
      </>
    ),
    thumb: "renato-Asse.png",
    thumb2: "renato-AsseM.png",
    embedId: "QaTemJjmsd4",
  },
  {
    nome: "João Pedro e Amanda",
    resumo: (
      <>
       &quot;Comprei o VTSD com o cartão da minha avó. Em três meses faturamos mais de 100 MIL REAIS e até o momento quase 300 MIL REAIS.&quot;
Amanda ganhava R$500 por mês e saiu do interior do Piauí para tentar a vida em SP, junto com o namorado. Foram várias tentativas frustradas, gastaram tudo o que tinham juntado, se endividaram e ainda assim nada dava certo. Em uma busca pela internet encontraram o Leandro Ladeira e a vida deles mudou completamente. No vídeo eles contam como fizeram essa mudança incrível e inesperada.
      </>
    ),
    thumb: "joao-Pedro-e-Amanda.png",
    thumb2: "joao-Pedro-e-AmandaM.png",
    embedId: "4jHmCFLgbqM",
  },
  {
    nome: "Arthur Morais",
    resumo: (
      <>
        &quot;Antes eu não ia com a cara do Ladeira, mas a gente viu que funciona e agora não interessa se a gente gosta ou não. Ele dá resultado e agradecemos &#91; &hellip; &#93; &quot; <br /> {" "}
Sinceridade é tudo, né? (risos). Arthur demorou entrar para o VTSD porque a esposa não ia com a cara do Ladeira. E esse não foi o primeiro relato desse tipo. A realidade é que o Ladeira não é o cara mais apessoado do mundo e você pode até não gostar das piadas ruins ou daquele cabelo bagunçado, mas não há como negar os resultados incríveis que ele tem proporcionado aos alunos. É realmente incontestável.
      </>
    ),
    thumb: "arthur-Moraes-e-esposa.png",
    thumb2: "arthur-Moraes-e-esposaM.png",
    embedId: "2vH_2TjG6S8",
  },  
];

function YoutubeDialog() {
  const refDialog = useRef<HTMLDialogElement>(null);
  const [activeEmbedId, setActiveEmbedId] = useState('');

  // Function to open the modal and set the active YouTube embed ID
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
      <div className="max-w-[69.56rem] sm:w-[21.4rem] mx-auto mm:pr-3 justify-center gap-[1.25rem] flex sm:flex-col mt-[1.31rem]">
        {depoimentos.map((depoimento, index) => (
          <div key={index} className="w-fit sm:w-[21.375rem] bg-[#F5F5F5] rounded-2xl p-[2.81rem] sm:p-[1.81rem] cursor-pointer text-[#565656]" onClick={() => openModal(depoimento.embedId)}>
            
            <Image className="sm:hidden" src={`/Images/${depoimento.thumb}`} alt={depoimento.nome} layout="responsive" width={262} height={143} />
            <Image className="hidden sm:block rounded-t-2xl" src={`/Images/${depoimento.thumb2}`} alt={depoimento.nome} layout="responsive" width={262} height={143} />
            <div className="max-w-[16.5rem] sm:w-[14.56rem] mx-auto mt-[1.44rem]">
              <h1 className="text-[1.25rem] font-bold">
                {depoimento.nome}
              </h1>
              <p className="max-w-[16.5rem] sm:w-full mt-[1.44rem] text-[0.875rem] sm:text-[0.75rem]">
                {depoimento.resumo}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Dialog ref={refDialog} activeEmbedId={activeEmbedId} transitions="top-to-bottom"/>
    </div>
  );
  
}

export default YoutubeDialog;
