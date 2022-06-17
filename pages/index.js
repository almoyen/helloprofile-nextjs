import Head from "next/head";
import ComingSoon from "../components/LandingPage/ComingSoon";
import Footer from "../components/LandingPage/Footer";
import Header from "../components/LandingPage/Header";
import Hero from "../components/LandingPage/Hero";
import SignUpDialog from "../components/LandingPage/SignUpDialog";
import ThreeStep from "../components/LandingPage/ThreeStep";
import WhyUse from "../components/LandingPage/WhyUse";
import React from 'react'

export default function Home() {
  const [openDialog, setOpenDialog] = React.useState(false)
  return (
    <div>
      <Head>
        <title>HelloProfile - No Code Profile Page Builder</title>
      </Head>
      <div>
        <div className="body-2">
          <div className="main-container">
            <Header setOpenDialog={setOpenDialog} />
            <Hero setOpenDialog={setOpenDialog} />
            {openDialog ? (
              <SignUpDialog
                setOpenDialog={setOpenDialog}
                openDialog={openDialog}
              />
            ) : null}
            <ThreeStep />
            <WhyUse />
            <ComingSoon />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
