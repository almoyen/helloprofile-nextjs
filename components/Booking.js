import React from "react";

export default function Booking() {
  return (
    <div className="widget-container">
      <div className="widget-content">
        <div className="booking-container">
          <h1 className="profile-subheading">Book a Meeting</h1>
          <div className="booking-columns w-row">
            <div className="column-15 w-col w-col-9 w-col-medium-9 w-col-small-9 w-col-tiny-tiny-stack">
              <div className="booking-url-container">
                <div className="booking-address-bar">
                  <div className="w-row">
                    <div className="w-col w-col-1 w-col-small-1 w-col-tiny-1">
                      <img src="images/Iconly.svg" loading="lazy" alt="" />
                    </div>
                    <div className="w-col w-col-11 w-col-small-11 w-col-tiny-11">
                      <div className="booking-bar-text">
                        www.calendly.com/calveenchikezie
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-14 w-col w-col-3 w-col-medium-3 w-col-small-3 w-col-tiny-tiny-stack">
              <a href="#" className="book-meeting-button w-button">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
