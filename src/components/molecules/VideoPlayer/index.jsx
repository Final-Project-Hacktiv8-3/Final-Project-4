import ReactPlayer from "react-player";
import PropTypes from "prop-types";

export const VideoPlayer = ({ url }) => {
  return (
    <div className="relative aspect-video w-full lg:aspect-[9/5]">
      <ReactPlayer
        url={url}
        className="absolute inset-0"
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string,
};
