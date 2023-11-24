import { ErrorMessage, LoadingSpinner } from "@components/atoms";
import { MovieSection } from "@components/organisms";
import { useFetchData } from "@hooks/index";
import { useParams } from "react-router-dom";

export const Choice = () => {
  const { choice } = useParams();
  const { data, isLoading, error } = useFetchData(`/movie/${choice}`);
  const title = (p) => {
    return p.replace(/_/g, " ");
  };
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

  return (
    <>
      <MovieSection movies={data?.results} title={`${title(choice)} Movies`} />
    </>
  );
};
