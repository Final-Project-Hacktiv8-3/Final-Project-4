import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useFetchData } from "@hooks/index";
import { MovieSection } from "@components/organisms";

export const Search = () => {
  const { nama } = useParams();

  const { data } = useFetchData(`/search/movie?query=${nama}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MovieSection movies={data?.results} title={nama} />
    </>
  );
};
