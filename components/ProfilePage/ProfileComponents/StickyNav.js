import React from "react";

export default function StickyNav(props) {
  return (
    <header id="nav" className="sticky-nav">
      <nav className="container w-container">
        <ul role="list" className="nav-grid w-list-unstyled">
          <li id="w-node-_8b4d7ff6-5271-e40b-c8d4-81af155b31f8-2c858b1a">
            <a href="#" className="nav-logo-link">
              <img
                src="images/helloProfile-logo.svg"
                alt=""
                className="nav-logo"
              />
            </a>
          </li>
          <li
            id="w-node-_8b4d7ff6-5271-e40b-c8d4-81af155b31fe-2c858b1a"
            className="list-item"
          >
            <button className="sticky-header-button w-button" onClick={()=> props.setSaveProfileOpen(true)}>
              Save Profile
            </button>
          </li>
         
        </ul>
      </nav>
    </header>
  );
}
