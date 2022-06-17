import React from "react";

export default function Header(props) {
  return (
    <header id="nav" className="sticky-nav-2">
      
            <a href="#" className="nav-logo-link">
              <img
                src="images/logo-black-text.svg"
                alt=""
                className="nav-logo-2"
              />
            </a>
      
            <div onClick={()=> props.setOpenDialog(true)} className="sticky-header-button-landing w-button">
              Request Invite
            </div>
               
    </header>
  );
}
