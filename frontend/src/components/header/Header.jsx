import React from "react";

import Nav from "./Nav";

import Linksbar from "./Linksbar";

function Header() {
  return (
    <>
      <div className="z-40 ">
        <Linksbar />
      </div>
      <div className="sticky top-0 w-full z-40">
        <Nav />
      </div>
    </>
  );
}

export default Header;
