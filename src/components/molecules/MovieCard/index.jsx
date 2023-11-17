import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { formattedDate, getHeroImgUrl } from "@utils";

export const MovieCard = ({ movie }) => {
  const { id, title, release_date, backdrop_path } = movie;

  return (
    <Link
      to={`/movie/${id}`}
      className="group flex w-full flex-col transition duration-300 ease-in-out hover:scale-105"
    >
      <img
        src={getHeroImgUrl(backdrop_path, "w400")}
        alt={`Poster of ${title}`}
        className="aspect-[14/8] rounded-lg object-cover duration-500 hover:brightness-75"
        title={title}
      />
      <div className="px-1 py-2">
        <h3
          className="-mb-1 truncate font-bold text-slate-900 group-hover:text-purple-600 dark:text-slate-200"
          title={title}
        >
          {title}
        </h3>
        <span className="text-sm font-medium tracking-tight text-slate-700 dark:text-slate-400">
          {formattedDate(release_date)}
        </span>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
