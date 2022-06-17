import React from "react";

export default function Hero(props) {
  return (
    <div className="hero-container">
      <div className="columns-6 w-row">
        <div className="column-21 w-col w-col-6 w-col-small-small-stack">
          <div className="hero-content">
            <div className="hero-header-container">
              <h1 className="hero-header-text">Create.&nbsp;Share. Connect</h1>
              <div className="hero-text-container">
                <div className="hero-text">
                  HelloProfile is a no-code website builder profile page builder
                  that allows you to design, launch and manage your personal,
                  work and portfolio profile pages in minutes with contactless
                  technology to share your profile with anyone as well as manage
                  the contacts of people you meet.
                </div>
              </div>
            </div>
            <div className="hero-cta-container">
              <div className="w-row">
                <div className="w-col w-col-6 w-col-small-6 w-col-tiny-tiny-stack">
                  <div className="request-button-container" onClick={()=> props.setOpenDialog(true)} style = {{cursor: "pointer"}} >
                    <div className="request-invite-button">
                     <div className="button-text-white" >
                            Request Invite 
                            </div>
                            <div className="request-invite-icon-container">
                            <img
                              src="images/arrow-right-circle.svg"
                              loading="lazy"
                              alt=""
                              className="image-14"
                            />
                    </div>
                        </div>
                          
                  </div>
                </div>
                <div className="w-col w-col-6 w-col-small-6 w-col-tiny-tiny-stack">
                <a href="#about" className="about-hello-profile-button">
                  <div className="about-helloprofile-button">
                    <div className="about-hello-profile-button">
                      About HelloProfile
                    </div>
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-footer-container">
                <div className="footer-icon-container">
                  <img src="images/Group-7265.svg" loading="lazy" alt="" />
                </div>
                                <div className="hero-footer-text-container">
                  <div className="text-footer-hero">
                    Join our{" "}
                    <strong className="bold-text-2">
                      Exclusive Beta User Community
                    </strong>
                    . <br />
                    We are still in Beta. Be the first to use{" "}
                    <strong className="bold-text-3">HelloProfile</strong> for
                    FREE!
                  </div>
                </div>           
          </div>
        </div>
        <div className="w-col w-col-6 w-col-small-small-stack">
          <div className="hero-image-container">
            <img
              src="images/hero-picture-1.svg"
              loading="lazy"
              alt=""
              className="image-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
