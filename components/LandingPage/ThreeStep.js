import React from "react";

export default function ThreeStep() {
  return (
    <div className="three-step-container" style={{ paddingBottom: "60px" }}>
      <div className="w-row">
        <div className="w-col w-col-4">
          <div className="step-item">
            <div className="w-row">
              <div className="w-col w-col-3">
                <div className="step-icon-container">
                  <img src="images/wifi-icon.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div className="w-col w-col-9">
                <div className="step-text-container">
                  <div className="text-bold-white">Share via NFC</div>
                  <div className="label-text-white">
                    Share your profile at physical events or meetings using our
                    NFC contactless feature.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-col w-col-4">
          <div className="step-item">
            <div className="w-row">
              <div className="w-col w-col-3">
                <div className="step-icon-container">
                  <img src="images/qr-code-icoon.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div className="w-col w-col-9">
                <div className="step-text-container">
                  <div className="text-bold-white">Share via QR Code</div>
                  <div className="label-text-white">
                    Share your profile in real life or in person using our QR
                    Code contactless feature.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-col w-col-4">
          <div className="step-item">
            <div className="w-row">
              <div className="w-col w-col-3">
                <div className="step-icon-container">
                  <img src="images/share-icon.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div className="w-col w-col-9">
                <div className="step-text-container">
                  <div className="text-bold-white">Share via link</div>
                  <div className="label-text-white">
                    Share your profile online and across every social network
                    using your custom profile link.
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
