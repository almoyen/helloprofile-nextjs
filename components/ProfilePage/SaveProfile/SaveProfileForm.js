import React, {useState} from "react";

export default function SaveProfileForm(props) {
const [termsAgreed, setTermsAgreed] = useState(false);
const [termsViolation, setTermsViolation] = useState(false)
const handleSubmit = () => {
    if (!termsAgreed) {
        alert("You must accept our terms to continue");
        setTermsViolation(true)
    }
    if (termsAgreed && !termsViolation) {
        props.setSaveProfileSuccess(true);
        setTermsViolation(false)
        props.openSaveProfileForm(false);
    }
}

const handleTermsCheckbox = () => {
    if (termsAgreed){
        setTermsAgreed(false)
        setTermsViolation(false);

    }
    if (!termsAgreed) {
        setTermsAgreed(true);
        setTermsViolation(false);
    }
}
  return (
      
    <div className="save-profile-form">
      <div className="save-profile-text-container">
        <div className="text-block">
          Adding <strong>Chikezie Kelvin</strong>’s Profile to your contacts.
          Learn more about{" "}
          <a href="#">
            <strong>HelloProfile</strong>
          </a>
        </div>
      </div>
      <div className="columns-10 w-row">
        <div
          className="column-23 w-col w-col-5"
          style={{ paddingRight: "0px" }}
        >
          <div className="save-profile-form-side-container">
            <div className="save-profiile-logo">
              <img src="images/logo-white.svg" loading="lazy" alt="" />
            </div>
            <div className="save-profile-form-side-text">
              <div className="paragraph-white">
                HelloProfile will never sell or share your email address, or any
                other personal information that you provide to any 3rd parties.
                We’ll only use your personal information to administer your
                account and to provide the products and services you requested
                from us.
              </div>
            </div>
          </div>
        </div>
        <div className="column-24 w-col w-col-7" style={{ paddingLeft: "0px" }}>
          <div className="save-profile-form-main-container">
            <div className="save-profile-form-heading">
              <div className="save-profile-heading">Quick&nbsp;Sign Up</div>
            </div>
            <div className="save-profile-form-text">
              <div className="paragraph">
                We need to verify your identitiy before you can save this
                profile.
              </div>
            </div>
            <div className="save-profille-form-container">
              <div className="w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  className="form-2"
                >
                  <div className="w-row">
                    <div className="w-col w-col-6">
                      <div className="firstname">
                        <label htmlFor="name" className="field-label-2">
                          First&nbsp;Name
                        </label>
                        <input
                          type="text"
                          className="text-field-4 w-input"
                          maxLength={256}
                          name="name"
                          data-name="Name"
                          placeholder
                          id="name"
                        />
                      </div>
                    </div>
                    <div className="w-col w-col-6">
                      <div className="lastname">
                        <label htmlFor="name-2" className="field-label-3">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="text-field-5 w-input"
                          maxLength={256}
                          name="name-2"
                          data-name="Name 2"
                          placeholder
                          id="name-2"
                        />
                      </div>
                    </div>
                  </div>
                  <label htmlFor="email" className="field-label-4">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="text-field-6 w-input"
                    maxLength={256}
                    name="email"
                    data-name="Email"
                    placeholder
                    id="email"
                    required
                  />
                  <div className="columns-9 w-row">
                    <div className="column-26 w-col w-col-7">
                      <div className="terms-check-container">
                        <label className="w-checkbox checkbox-field">
                          <input
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                            data-name="Checkbox"
                            className="w-checkbox-input checkbox"
                            onClick={()=> handleTermsCheckbox()}
                          />
                          <span
                            className="checkbox-label w-form-label"
                            htmlFor="checkbox"
                            style = {{color: termsViolation ? "red" : null}} 
                          >
                            I agree to the <br />
                            <a href="#">
                              <strong style = {{color: termsViolation ? "red" : null}} >Terms &amp; Policies</strong>
                            </a>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="column-25 w-col w-col-5">
                      <div className="save-profile-button" onClick = {()=> handleSubmit()} style = {{cursor: "pointer"}}>
                        <div className="w-row">
                          <div className="w-col w-col-10 w-col-small-10 w-col-tiny-10">
                            <div className="button-text-white">
                              Save Profile
                            </div>
                          </div>
                          <div className="w-col w-col-2 w-col-small-2 w-col-tiny-2">
                            <div className="request-invite-icon-container">
                              <img
                                src="images/arrow-right-circle-1.svg"
                                loading="lazy"
                                alt=""
                                className="image-10"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
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
