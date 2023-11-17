import PropTypes from "prop-types";

import { Button } from "@components/atoms";
import { MovieCard } from "@components/molecules";

export const MovieSection = ({ title, movies }) => {
  return (
    <div className="w-full bg-white  px-3  dark:bg-zinc-900 md:px-24">
      <div className="flex items-center justify-between py-4">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white ">
          {title}
        </h2>
        <Button className="border border-black text-slate-900 dark:border-slate-100 dark:text-white">
          See More
        </Button>
      </div>
      <div className="border-t border-black py-2 dark:border-slate-100" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

MovieSection.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array,
};
