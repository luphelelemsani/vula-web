import React from "react";
import Header from "./Header";
import PropTypes from "prop-types";
import { Bottomnav } from "./Bottomnav";
import { Meta } from "./Meta";

const Layout = ({ children }) => (
  <>
    <Meta />
    <Header />
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      <Bottomnav />
    </main>
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
