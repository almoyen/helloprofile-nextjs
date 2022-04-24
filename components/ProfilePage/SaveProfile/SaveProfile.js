import React, { useState } from "react";
import SaveProfileContainer from "./SaveProfileContainer";
import SaveProfileForm from "./SaveProfileForm";
import SaveProfileSuccessful from "./SaveProfileSuccessful";
import StickyHeader from "./StickyHeader";

export default function SaveProfile(props) {
  const [saveProfileForm, openSaveProfileForm] = useState(false);
  const [saveProfileSuccess, setSaveProfileSuccess] = useState(false);
  const renderSaveProfileComponents = () => {
    if (saveProfileForm) {
      return <SaveProfileForm setSaveProfileSuccess={setSaveProfileSuccess} openSaveProfileForm={openSaveProfileForm} />;
    }
    if (saveProfileSuccess) {
      return <SaveProfileSuccessful />;
    } else {
    return <SaveProfileContainer openSaveProfileForm={openSaveProfileForm} />
}
  };
  return (
    <div className="save-profile-body">
      <StickyHeader setSaveProfileOpen={props.setSaveProfileOpen} />
      {renderSaveProfileComponents()}
      <div className="save-profile-footer">
        <div className="save-profile-footer-text">
          HelloProfile 2022 © Copyright All rights reserved
        </div>
      </div>
    </div>
  );
}
