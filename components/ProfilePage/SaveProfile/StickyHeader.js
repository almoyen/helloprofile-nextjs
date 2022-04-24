import React from "react";

export default function StickyHeader(props) {
  return (
    <header id="nav" className="sticky-nav">
      <nav className="container w-container">
        <ul role="list" className="nav-grid w-list-unstyled">
          <li id="w-node-b2285e70-0b72-b229-6f0d-73b8e9cf7e17-ab8f1064">
            <a href="#" className="nav-logo-link">
              <img
                src="images/helloProfile-logo.svg"
                alt=""
                className="nav-logo"
              />
            </a>
          </li>
          <li
            id="w-node-b2285e70-0b72-b229-6f0d-73b8e9cf7e1a-ab8f1064"
            className="list-item"
          >
            <button
              onClick={() => props.setSaveProfileOpen(false)}
              className="sticky-header-button w-button"
            >
              Back to Profile
            </button>
          </li>
         
        </ul>
      </nav>
    </header>
  );
}
