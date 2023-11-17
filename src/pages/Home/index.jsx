import { MovieSection, Navbar } from "@components/organisms";
import { useFetchData } from "@hooks";

export const Home = () => {
  const { data: popularMovies } = useFetchData("/movie/popular");
  const { data: topRatedMovies } = useFetchData("/movie/top_rated");
  const { data: upcomingMovies } = useFetchData("/movie/upcoming");

  return (
    <>
      <Navbar />
      <MovieSection
        data={popularMovies?.results.slice(0, 10)}
        title="Popular"
      />
      <MovieSection
        data={topRatedMovies?.results.slice(0, 10)}
        title="Top Rated"
      />
      <MovieSection
        data={upcomingMovies?.results.slice(0, 10)}
        title="Upcoming"
      />
    </>
  );
};
