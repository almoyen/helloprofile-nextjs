import React from 'react'
import Acivities from "./ProfileComponents/Acivities";
import Booking from "./ProfileComponents/Booking";
import CallToAction from "./ProfileComponents/CallToAction";
import Contact from "./ProfileComponents/Contact";
import CoverBio from "./ProfileComponents/CoverBio";
import Events from "./ProfileComponents/Events";
import Footer from "./ProfileComponents/Footer";
import Socials from "./ProfileComponents/Socials";
import StickyNav from "./ProfileComponents/StickyNav";
import MetaTags from './ProfileComponents/MetaTags';

export default function ProfilePageContainer(props) {
  return (
    <div className="body">
  <MetaTags/>       
  <StickyNav setSaveProfileOpen = {props.setSaveProfileOpen} />
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
</div>
  )
}
