import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { MovieDetail, MovieSection } from "@components/organisms";
import { getYoutubeVideoUrl } from "@utils";
import { useFetchData } from "@hooks/index";
import { ErrorMessage, LoadingSpinner } from "@components/atoms";

export const Detail = () => {
  const { id } = useParams();
  const [similiarity, setSimiliarity] = useState([]);

  const { data, isLoading, error } = useFetchData(
    `/movie/${id}?append_to_response=videos,credits`,
  );

  useEffect(() => {
    const fetchSimiliar = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
        },
      );
      setSimiliarity(res.data.results);
    };

    fetchSimiliar();
  }, [id]);

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
      <MovieSection movies={similiarity?.slice(0, 8)} title="Similiarity" />
    </>
  );
};
