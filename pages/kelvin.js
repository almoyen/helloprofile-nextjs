import React from 'react';
import Acivities from "../components/Acivities";
import Booking from "../components/Booking";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import CoverBio from "../components/CoverBio";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import StickyNav from "../components/StickyNav";
import MetaTags from '../components/MetaTags';

export default function kelvin() {
  return <div className="body">
  <MetaTags/>       
  <StickyNav />
  <div className="profile-main-section wf-section">
    <div className="profile-container w-container">
      <CoverBio />
      <Contact />
      <Acivities />
      <Events />
      <CallToAction />
      <Socials />
      <Booking />
      <Footer />
    </div>
  </div>
</div>;
}
