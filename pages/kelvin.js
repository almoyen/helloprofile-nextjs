import React from 'react';
import Acivities from "../components/ProfilePage/Acivities";
import Booking from "../components/ProfilePage/Booking";
import CallToAction from "../components/ProfilePage/CallToAction";
import Contact from "../components/ProfilePage/Contact";
import CoverBio from "../components/ProfilePage/CoverBio";
import Events from "../components/ProfilePage/Events";
import Footer from "../components/ProfilePage/Footer";
import Socials from "../components/ProfilePage/Socials";
import StickyNav from "../components/ProfilePage/StickyNav";
import MetaTags from '../components/ProfilePage/MetaTags';

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
