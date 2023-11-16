import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { formattedDate, getImageUrl } from "@utils";

export const MovieCard = ({ movie }) => {
  const { id, poster_path, title, release_date } = movie;

  return (
    <Link
      to={`/movie/${id}`}
      className="group flex w-full flex-col transition hover:scale-105"
    >
      <img
        src={getImageUrl(poster_path)}
        alt={`Poster of ${title}`}
        className="aspect-[9/14] rounded object-cover"
        title={title}
      />
      <div className="px-1 py-2">
        <h3
          className="truncate text-sm font-bold group-hover:text-purple-600"
          title={title}
        >
          {title}
        </h3>
        <span className="text-xs">{formattedDate(release_date)}</span>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
