import React from "react";

export default function CoverBio() {
  return (
    <div className="widget-container">
      <div className="cover-container">
        <div className="cover">
          <div className="cover-image-conatainer">
            <img
              src="images/cover.png"
              loading="lazy"
              sizes="(max-width: 479px) 96vw, (max-width: 767px) 95vw, (max-width: 991px) 90vw, (max-width: 1439px) 65vw, 940px"
              srcSet="images/cover-p-500.png 500w, images/cover-p-800.png 800w, images/cover.png 955w"
              alt=""
            />
          </div>
          <div className="cover-title-container">
            <div className="columns w-row">
              <div className="column-2 w-col w-col-3">
                <img
                  src="images/image-2-1.png"
                  loading="lazy"
                  alt=""
                  className="image-2"
                />
              </div>
              <div className="w-col w-col-9">
                <div className="title-container">
                  <h1 className="heading">Kelvin Chickezie</h1>
                  <div className="profile-subtitle">
                    Director, Startup Grind Helsinki
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="widget-content">
        <div className="bio-container">
          <h2 className="profile-subheading">Bio</h2>
          <p className="paragraph-3">
            Startup Grind is the largest independent startup community, actively
            educating, inspiring, and connecting over 5,000,000 entrepreneurs in
            over 500 cities.
            <br />
            <br />
            With over 3,000 members and 10 volunteers in Finland, I Lead the
            Startup Grind Helsinki Chapter as the Director and constantly create
            value for the startup ecosystem in Finland through our monthly
            fireside chat events, partnerships and other startup activities.
          </p>
          <div className="view-portfolio">
            <div className="cta-text">View Portfolio</div><img src="images/Vector.svg" loading="lazy" alt="" className="image-11"/>
          </div>
        </div>
      </div>
    </div>
  );
}
