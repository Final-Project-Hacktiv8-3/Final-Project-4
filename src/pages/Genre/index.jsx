import { ErrorMessage, LoadingSpinner } from "@components/atoms";
import { MovieSection } from "@components/organisms";
import { useFetchData } from "@hooks/index";
import { useParams } from "react-router-dom";

export const Genre = () => {
  const { id, name } = useParams();
  const { data, isLoading, error } = useFetchData(
    `discover/movie?with_genres=${id}`,
  );
  console.log(data);
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
  return <MovieSection title={name} movies={data?.results} />;
};
