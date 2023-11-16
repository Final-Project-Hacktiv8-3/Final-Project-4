import { MovieCard } from "@components/molecules";
import { useFetchData } from "@hooks";

export const Home = () => {
  const { data } = useFetchData("/discover/movie");

  return (
    <>
      <div className="grid grid-cols-2 gap-4 px-3 sm:grid-cols-3 md:grid-cols-4 md:px-6 lg:grid-cols-5">
        {data?.results?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
