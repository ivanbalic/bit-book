import React from "react";

import "./Footer.css";

const Footer = () => (
  <footer className="button-active">
    <p className="container button-active">
      &copy;{new Date().getFullYear()} Four in for
    </p>
  </footer>
);

export { Footer };
