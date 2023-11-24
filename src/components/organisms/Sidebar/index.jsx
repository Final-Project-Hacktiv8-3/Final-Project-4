import PropTypes from "prop-types";
import { useFetchData } from "@hooks/index";
import { PiFilmSlate } from "react-icons/pi";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { NavLink } from "react-router-dom";
export const Sidebar = ({ sharedState, onToogleState }) => {
  const { data } = useFetchData(`/genre/movie/list`);
  const link = [
    {
      name: "Popular",
      path: "/popular",
    },
    {
      name: "Top Rated",
      path: "/top_rated",
    },
    {
      name: "Upcoming",
      path: "/upcoming",
    },
  ];
  const genre = data?.genres;
  console.log(genre);
  const navClass = ({ isActive }) => {
    return isActive
      ? `capitalize  text-black  bg-slate-800 w-36 md:h-10 h-32 flex justify-start pl-3 items-center rounded-md text-left text-slate-50 duration-300 ease-out`
      : ` capitalize font-medium duration-200 dark:text-slate-50   text-zinc-900   hover:dark:border-slate-100 duration-300 ease-out `;
  };

  return (
    <>
      <aside
        className={` h- hidden h-screen flex-col items-center overflow-y-auto border-r-2 border-r-slate-800 bg-white px-4  py-1 transition-all  duration-500 ease-in-out dark:bg-zinc-900 md:w-[30%]  lg:flex lg:w-[25%] lg:gap-3 xl:w-[15%] xl:gap-3`}
      >
        {/* SideList */}
        <section className="mb-4 flex w-full flex-col items-start justify-center gap-4 px-3 py-5 ease-in">
          {link?.map((item, index) => (
            <NavLink key={index} to={item.path} className={navClass}>
              {item.name}
            </NavLink>
          ))}
          <h1 className="border-b-2  pb-2 text-xl text-zinc-900 dark:text-slate-50">
            Genres
          </h1>

          {genre?.map((item, index) => (
            <NavLink
              key={index}
              to={`/genre/${item.id}/${item.name}`}
              className={navClass}
            >
              <span className="pl-2 text-left hover:text-slate-400">
                {item.name}
              </span>
            </NavLink>
          ))}
        </section>
      </aside>
      {/* Mobile */}
      <aside
        className={`border-slate-3 fixed z-[99]  flex h-full w-[60%] flex-col gap-5 overflow-y-auto  bg-white px-4 py-2 shadow-md 
        transition-all dark:bg-zinc-900 sm:w-[45%] md:w-[30%] lg:hidden ${
          sharedState ? "-translate-x-0" : "-translate-x-full"
        }
        `}
      >
        {/* Header section */}
        <header className="mt-2 flex w-full flex-row items-center justify-between gap-6 ">
          <NavLink to="/">
            <p
              className={` flex flex-row  items-start gap-2 font-mono text-lg font-bold dark:text-slate-200 md:flex`}
            >
              <PiFilmSlate className="text-2xl" />
              Movies
            </p>
          </NavLink>

          <GoSidebarExpand
            className="text-2xl text-slate-500"
            onClick={onToogleState}
          />
        </header>

        <section className="mb-4 flex h-screen w-full flex-col items-start justify-start gap-5 overflow-auto px-3 py-5 ease-in">
          {link?.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={navClass}
              onClick={onToogleState}
            >
              {item.name}
            </NavLink>
          ))}
          <h1 className="border-b-2  pb-2 text-xl text-zinc-900 dark:text-slate-50">
            Genres
          </h1>

          {genre?.map((item, index) => (
            <NavLink
              key={index}
              to={`/genre/${item.id}/${item.name}`}
              className={navClass}
              onClick={onToogleState}
            >
              <span className="pl-2 text-left hover:text-slate-400">
                {item.name}
              </span>
            </NavLink>
          ))}
        </section>
      </aside>
    </>
  );
};
Sidebar.propTypes = {
  sideList: PropTypes.array,
  onToogleState: PropTypes.func,
  sharedState: PropTypes.bool,
};
