export const getImageUrl = (path, size = "w400") => {
  return `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/${size}${path}`;
};
export const getHeroImgUrl = (path, size = "original") => {
  return `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/${size}${path}`;
};

export const getYoutubeVideoUrl = (key) => {
  return `https://www.youtube.com/watch?v=${key}`;
};

export const formattedDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export function getYearFromDate(date) {
  return new Date(date).getFullYear();
}

export function getDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const formattedHours = hours > 0 ? hours + "h " : "";
  const formattedMinutes = remainingMinutes > 0 ? remainingMinutes + "m" : "";
  return formattedHours + formattedMinutes;
}
