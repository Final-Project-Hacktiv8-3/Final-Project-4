import { useParams } from "react-router-dom";

import { MovieDetail } from "@components/organisms";
import { useFetchData } from "@hooks/index";

export const Detail = () => {
  const { id } = useParams();

  const { data } = useFetchData(`/movie/${id}?append_to_response=videos`);

  return (
    <main>
      <MovieDetail title={data?.title} overview={data?.overview} />
    </main>
  );
};
