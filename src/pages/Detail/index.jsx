import { useParams } from "react-router-dom";

import { MovieDetail } from "@components/organisms";
import { useFetchData } from "@hooks/index";
import { getYoutubeVideoUrl } from "@utils/index";

export const Detail = () => {
  const { id } = useParams();

  const { data } = useFetchData(`/movie/${id}?append_to_response=videos`);

  const urlTrailer = data?.videos?.results.filter(
    (video) => video.type === "Trailer",
  )[0]?.key;

  return (
    <>
      <MovieDetail
        title={data?.title}
        release_date={data?.release_date}
        runtime={data?.runtime}
        overview={data?.overview}
        url={getYoutubeVideoUrl(urlTrailer)}
      />
    </>
  );
};
