import React from "react";

export default function Contact() {
  return (
    <div className="widget-container">
      <div className="widget-content">
        <div className="contact-container">
          <h2 className="profile-subheading">Contact</h2>
          <div className="w-row">
            <div className="w-col w-col-6 w-col-small-6 w-col-tiny-tiny-stack">
              <div className="contact-icons-container">
                <div className="columns-2 w-row">
                  <div className="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                    <img src="images/icon-phone.svg" loading="lazy" alt="" />
                  </div>
                  <div className="column-3 w-col w-col-10 w-col-small-10 w-col-tiny-10">
                    <div className="icon-content-container">
                      <div className="text">+234 812 345 6789</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-icons-container">
                <div className="columns-2 w-row">
                  <div className="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                    <img
                      src="images/email-icon.svg"
                      loading="lazy"
                      width={71}
                      alt=""
                    />
                  </div>
                  <div className="w-col w-col-10 w-col-small-10 w-col-tiny-10">
                    <div className="icon-content-container">
                      <div className="text">kelvin@startupgrind.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-col w-col-6 w-col-small-6 w-col-tiny-tiny-stack">
              <div className="contact-icons-container">
                <div className="columns-2 w-row">
                  <div className="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                    <img src="images/icon-location.svg" loading="lazy" alt="" />
                  </div>
                  <div className="w-col w-col-10 w-col-small-10 w-col-tiny-10">
                    <div className="icon-content-container">
                      <div className="text">Helsinki, Finland</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-icons-container">
                <div className="columns-2 w-row">
                  <div className="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                    <img src="images/website-icon.svg" loading="lazy" alt="" />
                  </div>
                  <div className="w-col w-col-10 w-col-small-10 w-col-tiny-10">
                    <div className="icon-content-container">
                      <div className="text">www.startupgrind.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
