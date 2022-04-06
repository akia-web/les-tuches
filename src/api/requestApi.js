import axios from "axios";

export async function requestApi() {
  
  await axios
    .get("https://api.jikan.moe/v4/characters")
    .then((response) => console.log(response))
    .catch((e) => e);
}
