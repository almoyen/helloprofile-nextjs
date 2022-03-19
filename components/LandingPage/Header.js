import React from "react";

export default function Header() {
  return (
    <header id="nav" className="sticky-nav-2">
      <div className="header-container-landing">
        <div className="w-row">
          <div className="w-col w-col-6 w-col-small-6 w-col-tiny-6">
            <a href="#" className="nav-logo-link">
              <img
                src="images/logo-black-text.svg"
                alt=""
                className="nav-logo-2"
              />
            </a>
          </div>
          <div className="column-22 w-col w-col-6 w-col-small-6 w-col-tiny-6">
            <a href="#" className="sticky-header-button-landing w-button">
              Request Invite
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
