import * as React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const separatorStyles = "shrink-0 w-px border border-gray-200 border-solid aspect-[0.01] stroke-[1px] stroke-gray-200";

interface ContentSectionProps {
  texts: string[];
  images: string[];
}

const ContentSection: React.FC<ContentSectionProps> = ({ texts, images }) => (
  <section className="flex gap-5 justify-center px-5 py-4 mt-10 leading-6 text-stone-500 max-md:flex-wrap">
    {texts.map((text, index) => (
      <React.Fragment key={index}>
        <p>{text}</p>
        {index < texts.length - 1 && <div className={separatorStyles} />}
      </React.Fragment>
    ))}
  </section>
);

const MyComponent: React.FC = () => {
  const sectionTexts = [
    "Como estruturar um produto inicial e fazer a sua primeira venda em pouco tempo.",
    "Quais Recursos você realmente precisa para iniciar (você tem e não sabe).",
    "Como impulsionar o seu produto usando google e o Instagram e construir uma fonte de renda recorrente.",
  ];

  return (
    <main className="flex flex-col py-9 text-base">
      <section className="flex justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-w-[1013px] max-md:max-w-full">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/025f340a646ea0580ca3bcee196686523a18ad4f32849387d8c8b8b9710b38b2?apiKey=416c2c8024f14a0786542cc237b7167d&"
            alt="Main visual content"
            className="max-w-full aspect-[3.03] w-[139px]"
          />
          <div className="flex gap-5 mt-10 leading-[150%] text-stone-500 max-md:flex-wrap">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/155db5e42e7b33b0a70a7f0ca40a35203a2f37851b3ff2d966bec75880d27a26?apiKey=416c2c8024f14a0786542cc237b7167d&"
              alt="Students badge"
              className="shrink-0 max-w-full aspect-[4.17] w-[101px]"
            />
            <p>+ 25 mil alunos que Vendem todo Santo Dia</p>
          </div>
          <h1 className="self-stretch mt-5 text-5xl font-bold text-center text-teal-500 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
            Crie um negócio digital do <span className="text-teal-500">zero</span> e faça sua{" "}
            <span className="text-teal-500">primeira venda</span> em pouco tempo.
          </h1>
          <p className="justify-center px-6 py-1 mt-10 font-semibold leading-7 text-center rounded-lg shadow-lg bg-zinc-50 text-stone-500 max-md:px-5 max-md:max-w-full">
            Assista a aula de introdução gratuitamente e você vai aprender 3 coisas:
          </p>
        </div>
      </section>
      <ContentSection texts={sectionTexts} images={[]} />
      <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/71190d033597098b0d2d98d165f6e4b4cd81d0f929f7003b7fbc89365165d82b?apiKey=416c2c8024f14a0786542cc237b7167d&" alt="Introduction lesson visual" className="mt-10 w-full aspect-[1.82] max-md:max-w-full" />
      <a
        className="justify-center items-center self-center px-10 py-6 mt-20 w-full text-lg font-bold leading-6 text-white bg-cyan-600 rounded-lg max-w-[890px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
        href="#"
      >
        Quero fazer minha primeira venda
      </a>
    </main>
  );
};

export default MyComponent;
