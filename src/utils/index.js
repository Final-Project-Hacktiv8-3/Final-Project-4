export const getImageUrl = (path, size = "w400") => {
  return `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/${size}${path}`;
};
export const getHeroImgUrl = (path, size = "original") => {
  return `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/${size}${path}`;
};

export const formattedDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
