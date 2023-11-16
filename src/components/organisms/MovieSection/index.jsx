import PropTypes from "prop-types";

import { Button } from "@components/atoms";
import { MovieCard } from "@components/molecules";

export const MovieSection = ({ title, data }) => {
  return (
    <div className="w-full px-3 md:px-6">
      <div className="flex items-center justify-between py-4">
        <h2 className="text-4xl font-bold ">{title}</h2>
        <Button className="border border-black">See More</Button>
      </div>
      <div className="border-t border-black py-2" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

MovieSection.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};
