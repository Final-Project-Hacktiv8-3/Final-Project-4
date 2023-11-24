import PropTypes from "prop-types";

import { MovieCard } from "@components/molecules";

export const MovieSection = ({ title, movies }) => {
  return (
    <section>
      <div className=" flex items-center justify-between bg-white px-8 py-6 dark:bg-zinc-900">
        <h2 className="text-3xl font-bold capitalize text-slate-900 dark:text-white md:text-4xl">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 bg-white px-8 dark:bg-zinc-900 sm:grid-cols-3 lg:grid-cols-4">
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
