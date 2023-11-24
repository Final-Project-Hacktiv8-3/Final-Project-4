import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "@components/organisms";
import { Sidebar } from "@components/organisms/Sidebar";
import { useToogle } from "@hooks/useToogle";

export const Layout = () => {
  const { state, parseState } = useToogle(false);

  const handleToggleState = () => {
    parseState();
  };
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
      <Sidebar sharedState={state} onToogleState={handleToggleState} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar onToogleState={handleToggleState} sharedState={state} />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-white text-slate-900 dark:bg-zinc-900 dark:text-slate-200 md:px-12">
          <div className="container mx-auto px-4 py-6">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};
