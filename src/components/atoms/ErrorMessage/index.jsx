import PropTypes from "prop-types";

export const ErrorMessage = ({ message }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 text-center">
      <h1 className="text-6xl font-bold">Oops...</h1>
      <h2 className="mb-4 text-xl">There is something went wrong.</h2>
      <p className="text-lg">Info: {message}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};
