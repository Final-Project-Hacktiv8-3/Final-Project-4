import { PiFilmSlate } from "react-icons/pi";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-400 bg-white py-8 text-slate-900 duration-300 ease-out dark:bg-zinc-900 dark:text-slate-200">
      <div className="flex flex-col items-center justify-between gap-y-5 px-6 md:flex-row md:px-12">
        <Link to="/" className="flex items-center gap-x-2">
          <PiFilmSlate className="text-2xl" />
          <h3 className="font-mono text-lg font-bold">Movies</h3>
        </Link>
        <p className="text-center text-sm">
          This website was created for Final Project 4 of Hacktiv8 Kampus
          Merdeka.
        </p>
        <div className="flex items-center justify-center">
          <Link
            to="/about"
            className="font-semibold underline hover:text-purple-600"
          >
            About Dev
          </Link>
        </div>
      </div>
    </footer>
  );
};
