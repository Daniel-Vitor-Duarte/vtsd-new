import Image from "next/image";
import Head from "./components/sections/head";
import Second from "./components/sections/2secondSection"
import Third from "./components/sections/3thirdSection"
import Fourth from "./components/sections/4fourthSection"
import Fifth from "./components/sections/5fifthSection"
import Footer from "./components/sections/Footer"

export default function Home() {
  return (
    <main className="bg-[#F2F2F2] sm:bg-[#EBEBEB] ">
      <Head />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Footer />
    </main>
  );
}
