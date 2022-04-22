import React from "react";

export default function SaveProfile() {
  return (
    <div className="save-profile-body">
      <header id="nav" className="sticky-nav">
        <nav className="container w-container">
          <ul role="list" className="nav-grid w-list-unstyled">
            <li id="w-node-b2285e70-0b72-b229-6f0d-73b8e9cf7e17-ab8f1064">
              <a href="#" className="nav-logo-link">
                <img
                  src="images/helloProfile-logo.svg"
                  alt=""
                  className="nav-logo"
                />
              </a>
            </li>
            <li
              id="w-node-b2285e70-0b72-b229-6f0d-73b8e9cf7e1a-ab8f1064"
              className="list-item"
            >
              <a href="#" className="sticky-header-button w-button">
                Go back to Profile View
              </a>
            </li>
            <li>
              <img
                src="images/cross-icon.svg"
                loading="lazy"
                alt=""
                className="image-5"
              />
            </li>
          </ul>
        </nav>
      </header>
      <div className="save-profille-container">
        <div className="save-profile-text-container">
          <div className="text-block">
            Adding <strong>Chikezie Kelvin</strong>’s Profile to your contacts.
            Learn more about{" "}
            <a href="#">
              <strong>HelloProfile</strong>
            </a>
          </div>
        </div>
        <div className="w-row">
          <div className="w-col w-col-6">
            <div className="save-to-phone-container">
              <div className="save-to-phone-icon-container">
                <img
                  src="images/save-to-phone-icon.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="save-to-phone-heading">
                <div className="save-profile-heading">Save to Phone</div>
              </div>
              <div className="save-profile-text">
                <div className="save-profile-text">
                  Note: Some details and information fields will be missing in
                  the CSV file. <br />
                  Sign up with{" "}
                  <a href="#">
                    <strong>HelloProfile</strong>
                  </a>{" "}
                  to have full access to information of his profile in realtime,
                  anytime, anywhere.
                </div>
              </div>
              <a href="#" className="save-to-phone-button w-button">
                Download CSV File
              </a>
            </div>
          </div>
          <div className="w-col w-col-6">
            <div className="save-to-hello-profile-container">
              <div className="save-to-helloprofile-icon-container-copy">
                <img
                  src="images/save-to-hello-profile-icon.svg"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="save-to-helloprofile-heading-copy">
                <div className="save-profile-heading-white">
                  Save to HelloProfile
                </div>
              </div>
              <div className="save-profile-text">
                <div className="save-profile-text-white">
                  Note: Some details and information fields will be missing in
                  the CSV file. <br />
                  Sign up with{" "}
                  <a href="#">
                    <strong className="bold-text-4">HelloProfile</strong>
                  </a>{" "}
                  to have full access to information of his profile in realtime,
                  anytime, anywhere.
                </div>
              </div>
              <a href="#" className="save-to-helloprofile-button w-button">
                Save Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="save-profile-footer">
        <div className="save-profile-footer-text">
          HelloProfile 2022 © Copyright All rights reserved
        </div>
      </div>
    </div>
  );
}
