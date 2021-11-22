import React from "react";
import classess from "../layout/Layout.module.css";
function Layout(props) {
  return <div className={classess.main_layout}>{props.children}</div>;
}

export default Layout;
