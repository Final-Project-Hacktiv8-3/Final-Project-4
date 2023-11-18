import { MovieSection, Navbar } from "@components/organisms";
import { Hero } from "@components/organisms/Hero";
import { useFetchData } from "@hooks";

export const Home = () => {
  const { data: popularMovies } = useFetchData("/movie/popular");
  const { data: topRatedMovies } = useFetchData("/movie/top_rated");
  const { data: upcomingMovies } = useFetchData("/movie/upcoming");

  return (
    <>
      <Navbar />
      <Hero data={popularMovies?.results.slice(0, 3)} />
      <MovieSection
        movies={popularMovies?.results.slice(0, 8)}
        title="Popular"
      />
      <MovieSection
        movies={topRatedMovies?.results.slice(0, 8)}
        title="Top Rated"
      />
      <MovieSection
        movies={upcomingMovies?.results.slice(0, 8)}
        title="Upcoming"
      />
    </>
  );
};
