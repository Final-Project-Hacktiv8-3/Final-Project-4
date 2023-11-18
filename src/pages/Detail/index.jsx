import { useParams } from "react-router-dom";

import { MovieDetail } from "@components/organisms";
import { useFetchData } from "@hooks";
import { getYoutubeVideoUrl } from "@utils";

export const Detail = () => {
  const { id } = useParams();

  const { data } = useFetchData(
    `/movie/${id}?append_to_response=videos,credits`,
  );

  const getUrlTrailer = data?.videos?.results.filter(
    (video) => video.type === "Trailer",
  )[0]?.key;

  const getDirectors = data?.credits?.crew.filter(
    (crew) => crew.job === "Director",
  );

  const getWriters = data?.credits?.crew.filter(
    (crew) => crew.job === "Writer",
  );

  const getCasts = data?.credits?.cast.slice(0, 4);

  return (
    <>
      <MovieDetail
        title={data?.title}
        tagline={data?.tagline}
        url={getYoutubeVideoUrl(getUrlTrailer)}
        poster_path={data?.poster_path}
        genres={data?.genres}
        release_date={data?.release_date}
        runtime={data?.runtime}
        overview={data?.overview}
        directors={getDirectors}
        writers={getWriters}
        casts={getCasts}
      />
    </>
  );
};
