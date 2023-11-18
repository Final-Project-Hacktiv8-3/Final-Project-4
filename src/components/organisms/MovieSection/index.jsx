import PropTypes from "prop-types";

import { MovieCard } from "@components/molecules";
import { Link } from "react-router-dom";

export const MovieSection = ({ title, movies }) => {
  return (
    <section className="w-full bg-white  px-3  dark:bg-zinc-900 md:px-24">
      <div className="flex items-center justify-between py-6">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white ">
          {title}
        </h2>
        <Link className="font-medium text-purple-600 hover:underline">
          See More
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {movies?.map((movie) => (
          <article key={movie.id}>
            <MovieCard movie={movie} />
          </article>
        ))}
      </div>
    </section>
  );
};

MovieSection.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array,
};
