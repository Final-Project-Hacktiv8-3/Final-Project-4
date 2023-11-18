import PropTypes from "prop-types";

export const MovieDetail = ({ title, overview }) => {
  return (
    <div className="border bg-red-500">
      <h1>{title}</h1>
      <p>{overview}</p>
    </div>
  );
};

MovieDetail.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
};
