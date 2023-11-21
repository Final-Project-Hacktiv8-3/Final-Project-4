import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PiFilmSlate } from "react-icons/pi";
import { SearchInput } from "@components/molecules";
import { ToogleDarkMode } from "@components/molecules/ToogleDarkMode";
export const Navbar = () => {
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
      className={`sticky top-0 z-50 flex h-[8vh] w-full items-center justify-between bg-white px-3 font-semibold text-slate-500 duration-300 ease-out  dark:bg-zinc-900 md:px-16`}
    >
      <NavLink to="/">
        <figure>
          <figcaption
            className={`flex   flex-row items-start gap-2 font-mono text-lg font-bold dark:text-slate-200`}
          >
            <PiFilmSlate className="text-2xl" />
            Movies
          </figcaption>
        </figure>
      </NavLink>
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
