import React from "react";

export default function Footer() {
  return (
    <div className="landing-footer-container">
      <div className="w-row">
        <div className="w-col w-col-6 w-col-small-6">
          <div className="footer-content-container">
            <div className="logo-container">
              <img src="images/logo-black-text.svg" loading="lazy" alt="" />
            </div>
            <div className="footer-text-container">
              <div className="landing-footer-text">
                HelloProfile is a no-code website builder profile page builder
                that allows you to design, launch and manage your personal, work
                and portfolio profile pages in minutes
              </div>
              <div className="landing-copyright-text">
                Copyright ©&nbsp;HelloProfile. All rights reserved.
              </div>
            </div>
          </div>
        </div>
        <div className="w-col w-col-6 w-col-small-6">
          <div className="social-media-container">
            <div className="social-media-title-text">Social Media</div>
            <div className="soclal-media-text-container">
              <div className="social-media-text">
                Connect with us and join the community on social media.
              </div>
            </div>
            <div className="social-icons">
              <div className="w-row">
                <div className="w-col w-col-4 w-col-small-4 w-col-tiny-4">
                  <a href="https://instagram.com/helloprofile.io">
                    <div className="social-icon-container-landing">
                      <img
                        src="images/instagram-icon.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="w-col w-col-4 w-col-small-4 w-col-tiny-4">
                  <a href="https://www.facebook.com/HelloProfile.io">
                    <div className="social-icon-container-landing">
                      <img
                        src="images/facebook-icon.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                {/* To be replaced with Linkedin Later
                <div className="w-col w-col-4 w-col-small-4 w-col-tiny-4">
                  <div className="social-icon-container-landing">
                    <img src="images/twitter-icon.svg" loading="lazy" alt="" />
                  </div>
  </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
