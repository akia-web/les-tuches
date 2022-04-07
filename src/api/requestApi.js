import axios from "axios";

export async function requestApi(page) {
  const response = await axios
    .get("https://api.jikan.moe/v4/characters?page=" + page)
    .catch((e) => e);
  return response;
}
