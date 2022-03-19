import React from "react";

export default function Events() {
  return (
    <div className="widget-container">
      <div className="widget-content">
        <div className="event-container">
          <h3 className="profile-subheading">Events</h3>
          <div className="activity-item">
            <div className="w-row">
              <div className="column-4 w-col w-col-6">
                <div className="activity-thumbnail-container">
                  <img
                    src="images/event-thumb.png"
                    loading="lazy"
                    sizes="(max-width: 767px) 87vw, (max-width: 991px) 41vw, (max-width: 1439px) 31vw, 420px"
                    srcSet="images/event-thumb-p-500.png 500w, images/event-thumb-p-800.png 800w, images/event-thumb.png 826w"
                    alt=""
                  />
                </div>
              </div>
              <div className="column-5 w-col w-col-6">
                <div className="activity-content">
                  <div className="event-label">
                    <div className="label-text-white">Fireside</div>
                  </div>
                  <div className="bold-text">About Startup Grind</div>
                  <div className="activity-text">
                    <p>
                      Startup Grind is the largest independent startup
                      community, actively educating, inspiring, and connecting
                      over 5,000,000 entrepreneurs in over 500 cities.
                      <br />
                    </p>
                  </div>
                </div>
                <div className="activity-cta">
                  <div className="w-row">
                    <div className="w-col w-col-5 w-col-small-5 w-col-tiny-5">
                      <p className="event-date">17 September 2021</p>
                    </div>
                    <div className="w-col w-col-5 w-col-small-5 w-col-tiny-5">
                      <div className="cta-text">Learn more</div>
                    </div>
                    <div className="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                      <img
                        src="images/Vector.svg"
                        loading="lazy"
                        alt=""
                        className="image-4"
                      />
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
