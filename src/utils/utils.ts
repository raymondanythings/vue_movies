export function makeImagePath(id: string, format = "w500") {
  return `https://image.tmdb.org/t/p/${format}/${id}`;
}
