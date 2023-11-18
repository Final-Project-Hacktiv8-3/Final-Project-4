import { Outlet } from "react-router-dom";

import { Navbar } from "@components/organisms";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
