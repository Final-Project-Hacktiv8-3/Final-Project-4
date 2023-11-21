import { Outlet } from "react-router-dom";

import { Footer, Navbar } from "@components/organisms";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full bg-white px-4 py-6 text-slate-900 dark:bg-zinc-900 dark:text-slate-200 md:px-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
