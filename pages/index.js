import Head from "next/head";
import ComingSoon from "../components/LandingPage/ComingSoon";
import Footer from "../components/LandingPage/Footer";
import Header from "../components/LandingPage/Header";
import Hero from "../components/LandingPage/Hero";
import ThreeStep from "../components/LandingPage/ThreeStep";
import WhyUse from "../components/LandingPage/WhyUse";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HelloProfile: Networking Redefined!</title>
      </Head>
      <div>
        <Header />
        <div className="main-container">
          <Hero />
          <ThreeStep />
          <WhyUse />
          <ComingSoon/>
          <Footer />
        </div>
      </div>
    </div>
  );
}
