import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { VideoPlayer } from "@components/molecules";
import { formattedDate, getDuration, getImageUrl } from "@utils";

export const MovieDetail = ({
  title,
  tagline,
  url,
  poster_path,
  genres,
  release_date,
  runtime,
  overview,
  directors,
  writers,
  casts,
}) => {
  const [showMoreText, setShowMoreText] = useState(false);

  // show more or less
  const showFullTextHandler = () => {
    setShowMoreText((prevState) => !prevState);
  };

  // if overview is more than 200 characters, slice it to 200 characters
  const overviewText = showMoreText ? overview : overview?.slice(0, 200);

  return (
    <article className="flex w-full flex-col gap-y-4">
      {/* Title */}
      <section className="w-[90%]">
        <h1 className="mb-2 text-2xl font-semibold md:text-5xl">{title}</h1>
        <span className="italic text-slate-700 dark:text-slate-400 md:text-lg">{`"${tagline}"`}</span>
      </section>
      {/* Video Player */}
      <section className="w-full">
        <VideoPlayer url={url} />
      </section>
      <div className="my-2 w-full border-t-2 border-slate-600" />
      {/* Details Movie*/}
      <section className="grid grid-cols-[140px_1fr] gap-x-2 px-2 lg:grid-cols-[200px_1fr]">
        <figure className="self-start">
          <img
            src={getImageUrl(poster_path)}
            alt={`Poster of ${title}`}
            className="h-full w-full rounded-lg object-contain"
          />
        </figure>
        <div className="text-sm md:text-base">
          {genres?.map((genre) => (
            <Link key={genre.id} to={`/genre/${genre.id}`}>
              <span className="mb-2 mr-2 inline-block rounded-lg bg-slate-700 px-2 py-1 text-white transition-colors hover:bg-purple-600">
                {genre.name}
              </span>
            </Link>
          ))}
          <p className="mb-1 text-slate-700 dark:text-slate-400">
            {formattedDate(release_date)} • {getDuration(runtime)}
          </p>
          <p>
            {overviewText}
            {overview?.length > 200 && (
              <button
                onClick={showFullTextHandler}
                className="text-purple-600 transition-colors hover:text-purple-400"
              >
                &nbsp;{showMoreText ? "Read Less" : "...Read More"}
              </button>
            )}
          </p>
        </div>
      </section>
      {/* Credits */}
      <section className="flex flex-col gap-y-2">
        <div className="border-t border-slate-600">
          <h3 className="text-lg font-bold lg:text-2xl">Directors</h3>
          {
            <span className="lg:font-medium">
              {directors?.length === 0
                ? "-"
                : directors?.map((director) => director.name).join(" • ")}
            </span>
          }
        </div>
        <div className="border-t border-slate-600">
          <h3 className="text-lg font-bold lg:text-2xl">Writers</h3>
          {
            <span className="lg:font-medium">
              {writers?.length === 0
                ? "-"
                : writers?.map((writer) => writer.name).join(" • ")}
            </span>
          }
        </div>
        <div className="border-t border-slate-600">
          <h3 className="text-lg font-bold lg:text-2xl">Casts</h3>
          <span className="lg:font-medium">
            {casts?.length === 0
              ? "-"
              : casts?.map((cast) => cast.name).join(" • ")}
          </span>
        </div>
      </section>
    </article>
  );
};

MovieDetail.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  url: PropTypes.string,
  poster_path: PropTypes.string,
  genres: PropTypes.array,
  release_date: PropTypes.string,
  runtime: PropTypes.number,
  overview: PropTypes.string,
  directors: PropTypes.array,
  writers: PropTypes.array,
  casts: PropTypes.array,
};
