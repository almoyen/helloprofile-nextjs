import React from 'react'

export default function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <div className="columns-8 w-row">
        <div className="w-col w-col-6 w-col-small-6">
          <div className="coming-soon-content">
            <div className="coming-soon-logo-container">
              <img src="images/logo-white.svg" loading="lazy" alt="" />
            </div>
            <div className="coming-soon-text-container">
              <div className="coming-soon-text-white">
                Our team is working tiredlessly to make HelloProfile available
                on different platform so you are able to create, manage and
                share your profile from anywhere, anytime with anyone!
                <br />
                <br />
                HelloProfile will be supported on the following platforms:
                <br />
              </div>
            </div>
            <div className="supported-platform-container">
              <div className="supported-platforms">
                <img
                  src="images/supported-platforms.svg"
                  loading="lazy"
                  width={500}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-col w-col-6 w-col-small-6">
          <div className="coming-soon-image-container">
            <img
              src="images/HelloProfile-comingsoon-prop.png"
              loading="lazy"
              alt=""
              className="image-9"
            />
          </div>
          <div className="first-launch-container">
            <div className="w-row">
              <div className="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                <div className="first-launch-text">
                  <div className="first-launch">
                    First&nbsp;
                    <br />
                    launch
                  </div>
                </div>
              </div>
              <div className="w-col w-col-10 w-col-small-10 w-col-tiny-10">
                <div className="appstore-image-container">
                  <img src="images/appstore-icons.svg" loading="lazy" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
