import { useParams } from "react-router-dom";
import { useFetchData } from "@hooks/index";
import { MovieSection } from "@components/organisms";

export const Search = () => {

    const { nama } = useParams()

    const { data } = useFetchData(
        `/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${nama}`,
      );

  return (
    <>
        <MovieSection
        movies={data?.results.slice(0, 8)}
        title={nama}
      />
    </>
  );
};
