import React from "react";

export default function SaveProfileSuccessful() {
  return (
    <div className="save-profille-container">
    <div className="save-profile-text-container">
      <div className="text-block">Adding <strong>Chikezie Kelvin</strong>’s Profile to your contacts. Learn more about <a href="#"><strong>HelloProfile</strong></a>
      </div>
    </div>
    <div className="save-profile-successful">
      <img
        src="images/sucess-icon.svg"
        loading="lazy"
        alt=""
        className="image-12"
      />
      <div className="save-profile-success-text">
        Chikezie Kelvin’s profile have successfully added to your contacts!
      </div>
      <div className="save-profile-success-view-profile">
        <strong>View Profile</strong>
      </div>
    </div>
    </div>
  );
}
