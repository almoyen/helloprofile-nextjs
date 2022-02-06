import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="columns-5 w-row">
        <div className="w-col w-col-7 w-col-small-7">
          <div className="footer-credit--cta">Create a Profile Like This </div>
        </div>
        <div className="w-col w-col-5 w-col-small-5">
          <div className="helloprofile-credit-container">
            <div className="w-row">
              <div className="column-20 w-col w-col-3 w-col-small-3 w-col-tiny-3">
                <img
                  src="images/helloprofile-icon.svg"
                  loading="lazy"
                  alt=""
                  className="image-6"
                />
              </div>
              <div className="column-19 w-col w-col-9 w-col-small-9 w-col-tiny-9">
                <div className="footer-credit">Made with HelloProfile.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
