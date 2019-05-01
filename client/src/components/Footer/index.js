import React from "react";

// creates the footer
function Footer() {
  return (
    // footer is set to the right and has a github logo
    <footer>
      <hr />
      <p className="pull-right">
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}

// exports the footer to be reused
export default Footer;
