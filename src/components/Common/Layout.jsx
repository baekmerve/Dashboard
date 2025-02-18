import React from "react";

import TopBar from "./TopBar";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      <Sidebar />
      <div className="border rounded-xl p-5 ">
        <TopBar />
        {/* Page Content */}
        {children}
      </div>
    </main>
  );
};

export default Layout;
