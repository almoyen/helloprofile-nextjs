import React from "react";

export default function CallToAction() {
  return (
    <div className="widget-container">
      <div className="widget-content">
        <div className="cta-widget-container">
          <h1 className="profile-subheading">Join as a member</h1>
          <div className="cta-columns w-row">
            <div className="column-6 w-col w-col-3">
              <div className="cta-img-container">
                <img
                  src="images/cta-thumb.png"
                  loading="lazy"
                  alt=""
                  className="cta-thumb"
                />
              </div>
            </div>
            <div className="column-7 w-col w-col-9">
              <div className="paragraph">
                Join the largest and most connected startup network in the
                world.
              </div>
              <div className="cta-form-container">
                <div className="w-form">
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                    className="form"
                  >
                    <div className="columns-4 w-row">
                      <div className="w-col w-col-6">
                        <div className="div-block-4">
                          <input
                            type="text"
                            className="form-textfield w-input"
                            maxLength={256}
                            name="name"
                            data-name="Name"
                            placeholder="First Name"
                            id="name"
                          />
                        </div>
                      </div>
                      <div className="w-col w-col-6">
                        <input
                          type="text"
                          className="text-field w-input"
                          maxLength={256}
                          name="field"
                          data-name="Field"
                          placeholder="Last Name"
                          id="field"
                          required
                        />
                      </div>
                    </div>
                    <div className="columns-3 w-row">
                      <div className="w-col w-col-9">
                        <div className="div-block-3">
                          <input
                            type="email"
                            className="text-field-3 w-input"
                            maxLength={256}
                            name="email"
                            data-name="Email"
                            placeholder="E-mail"
                            id="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="w-col w-col-3">
                        <input
                          type="submit"
                          defaultValue="Sign Up"
                          data-wait="Please wait..."
                          className="cta-button w-button"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
