import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { PiFilmSlate } from "react-icons/pi";
import { SearchInput } from "@components/molecules";
import { ToogleDarkMode } from "@components/molecules/ToogleDarkMode";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
export const Navbar = ({ onToogleState, sharedState }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleKeyPresed = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(`/search/${search}`);
    }
  };
  return (
    <header
      className={`sticky top-0 z-50 flex h-[8vh] w-full items-center justify-between bg-white px-8 font-semibold text-slate-500 duration-300 ease-out  dark:bg-zinc-900 md:px-16`}
    >
      <figure>
        <NavLink to="/">
          <p
            className={` hidden flex-row  items-start gap-2 font-mono text-lg font-bold dark:text-slate-200 md:flex`}
          >
            <PiFilmSlate className="text-2xl" />
            Movies
          </p>
        </NavLink>
        <div className="flex md:hidden">
          {sharedState ? (
            <GoSidebarExpand className="text-3xl" onClick={onToogleState} />
          ) : (
            <GoSidebarCollapse onClick={onToogleState} className="text-2xl" />
          )}
        </div>
      </figure>
      <SearchInput
        width="md:w-[15vw] w-[30vw]"
        placeholder="Search Movies"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleKeyPresed(e)}
      />
      <ToogleDarkMode />
      {/* Mobile */}
    </header>
  );
};
Navbar.propTypes = {
  onToogleState: PropTypes.func,
  sharedState: PropTypes,
};
