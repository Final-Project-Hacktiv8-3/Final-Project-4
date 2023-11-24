import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";

import { MovieDetail } from "@components/organisms";
import { getYoutubeVideoUrl } from "@utils";
import { useFetchData } from "@hooks/index";
import { ErrorMessage, LoadingSpinner } from "@components/atoms";
import { Related } from "@components/organisms/Related";

export const Detail = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetchData(
    `/movie/${id}?append_to_response=videos,credits,similar`,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="grid grid-cols-1 gap-x-2 lg:grid-cols-[1fr_350px]">
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
        <div className="w-full lg:px-2">
          <h3 className="mb-4 text-xl font-bold">Related Movies</h3>
          <div className="flex h-screen flex-col gap-y-2 overflow-y-scroll">
            {data?.similar?.results?.map((similiars) => (
              <Related movies={similiars} key={similiars.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
