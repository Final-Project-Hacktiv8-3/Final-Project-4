import { VideoPlayer } from "@components/molecules";
import { getDuration, getYearFromDate } from "@utils/index";
import PropTypes from "prop-types";

export const MovieDetail = ({
  title,
  overview,
  url,
  release_date,
  runtime,
}) => {
  return (
    <div className="flex w-full flex-col">
      <div className="my-5">
        <h1 className="mb-2 text-5xl font-semibold">{title}</h1>
        <span className="text-slate-700 dark:text-slate-400">
          {getYearFromDate(release_date)} • {getDuration(runtime)}
        </span>
      </div>
      <div className="mx-auto w-[95%]">
        <VideoPlayer url={url} />
      </div>
      <p>{overview}</p>
    </div>
  );
};

MovieDetail.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  url: PropTypes.string,
  release_date: PropTypes.string,
  runtime: PropTypes.number,
};
