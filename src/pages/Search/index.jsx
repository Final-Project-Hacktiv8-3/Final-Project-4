import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useFetchData } from "@hooks/index";
import { MovieSection } from "@components/organisms";
import { ErrorMessage, LoadingSpinner } from "@components/atoms";
import { NotFound } from "..";

export const Search = () => {
  const { nama } = useParams();

  const { data, isLoading, error } = useFetchData(
    `/search/movie?query=${nama}`,
  );
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
  if (data?.results?.length === 0) {
    return <NotFound />;
  }
  return (
    <>
      <MovieSection movies={data?.results} title={nama} />
    </>
  );
};
