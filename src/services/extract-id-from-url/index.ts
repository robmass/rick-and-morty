export const extractIdFromUrl: (url: string) => number = (url) => {
  const lastSlash = url.lastIndexOf("/") + 1;
  const id = url.slice(lastSlash);
  if (!id || isNaN(+id)) {
    return -1;
  }
  return +id;
};
