export const getImageUrl = (path) => {
  const width = 200;
  return `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/w${width}${path}`;
};

export const formattedDate = (date) => {
  if (!date) return "-";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
