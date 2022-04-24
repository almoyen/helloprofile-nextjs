import React from 'react'

export default function SaveProfileContainer(props) {
  return (
    <div className="save-profille-container">
    <div className="save-profile-text-container">
      <div className="text-block">Adding <strong>Chikezie Kelvin</strong>’s Profile to your contacts. Learn more about <a href="#"><strong>HelloProfile</strong></a>
      </div>
    </div>
    <div className="w-row">
      <div className="w-col w-col-6 w-col-small-6">
        <div className="save-to-phone-container">
          <div className="save-to-phone-icon-container"><img src="images/save-to-phone-icon.svg" loading="lazy" alt="" /></div>
          <div className="save-to-phone-heading">
            <div className="save-profile-heading">Save to Phone</div>
          </div>
          <div className="save-profile-text">
            <div className="save-profile-text">Note: Some details and information fields will be missing in the CSV file. <br />Sign up with <a href="#"><strong>HelloProfile</strong></a> to have full access to information of his profile in realtime, anytime, anywhere.</div>
          </div>
          <a href="#" className="save-to-phone-button w-button">Download CSV File</a>
        </div>
      </div>
      <div className="w-col w-col-6 w-col-small-6">
        <div className="save-to-hello-profile-container">
          <div className="save-to-helloprofile-icon-container-copy"><img src="images/save-to-hello-profile-icon.svg" loading="lazy" alt="" /></div>
          <div className="save-to-helloprofile-heading-copy">
            <div className="save-profile-heading-white">Save to HelloProfile</div>
          </div>
          <div className="save-profile-text">
            <div className="save-profile-text-white">Save your HelloProfile account and have full access to this profile anytime. Be on the go with HelloProfile app. Manage, view and share with your network.</div>
          </div>
          <button onClick={()=> props.openSaveProfileForm(true)} className="save-to-helloprofile-button w-button">Save Profile</button>
        </div>
      </div>
    </div>
  </div>
  )
}
