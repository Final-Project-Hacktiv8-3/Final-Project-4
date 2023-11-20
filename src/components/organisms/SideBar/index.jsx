import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { getHeroImgUrl, getYearFromDate } from "@utils/index";
import empty from "../../../assets/empty.jpg";

export const SideBar = ({ movies }) => {
  const { id, title, release_date, backdrop_path, overview } = movies;
  return (
    <>
      <Link to={`/movie/${id}`} className="h-22 relative flex w-full gap-x-2 px-2">
        <div className="relative flex-none self-center">
          <img
            src={backdrop_path ? getHeroImgUrl(backdrop_path, "w400") : empty}
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="h-20 w-36 rounded-lg object-cover duration-500 hover:brightness-75"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <p className="line-clamp-2 text-sm font-semibold">
            {title} <span>({getYearFromDate(release_date)})</span>{" "}
          </p>
          <p className="text-muted-foreground line-clamp-3 text-xs">
            {overview}
          </p>
        </div>
      </Link>
    </>
  );
};

SideBar.propTypes = {
  movies: PropTypes.object,
};
