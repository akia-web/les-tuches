import axios from "axios";

export async function requestApi() {
  
  const response = await axios
    .get("https://api.jikan.moe/v4/characters")
    .catch((e) => e);
  return response;
}
