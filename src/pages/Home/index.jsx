import { useEffect } from "react";

import { ErrorMessage, LoadingSpinner } from "@components/atoms";
import { MovieSection } from "@components/organisms";
import { Hero } from "@components/organisms/Hero";
import { useFetchData } from "@hooks/index";

export const Home = () => {
  const {
    data: popularMovies,
    isLoading,
    error,
  } = useFetchData("/movie/popular");
  const { data: topRatedMovies } = useFetchData("/movie/top_rated");
  const { data: upcomingMovies } = useFetchData("/movie/upcoming");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <ErrorMessage message={error.message} />
      </div>
    );
  }

  return (
    <>
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
