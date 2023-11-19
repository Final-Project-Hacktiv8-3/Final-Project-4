import { useParams } from "react-router-dom";

import { MovieDetail } from "@components/organisms";
import { Sidebar } from "@components/molecules";
import { useFetchData } from "@hooks";
import { getYoutubeVideoUrl } from "@utils";
import axios from "axios";
import { useEffect,useState } from "react";

export const Detail = () => {
  const { id } = useParams();
  const [similiarity, setSimiliarity] = useState([])

  const { data } = useFetchData(
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
      }
      )
      setSimiliarity(res.data.results)
    }

    fetchSimiliar();
   
  }, [])

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
     
<div className="flex">
      
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
      <div className="relative w-96 mx-5">
        <h3 className="text-xl font-bold mb-4">Related Movies</h3>
        <div className="grid sticky top-0 overflow-y-auto gap-4">
          {similiarity.map(similiars => (
            <>
            
            <Sidebar movies={similiars} />
            </>

          ))}

        </div>
      </div>
     

  </div>

    </>
  );
};
