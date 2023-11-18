import { MovieDetail, Navbar } from "@components/organisms";
import { useFetchData } from "@hooks/index";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();

  const { data } = useFetchData(`/movie/${id}?append_to_response=videos`);

  console.log(data);

  return (
    <>
      <Navbar />
      <MovieDetail title={data?.title} overview={data?.overview} />
    </>
  );
};
