import { requestApi } from "./requestApi";

export async function Service(page) {
  let res = await requestApi(page);
  console.log("yo", res.data.data);
  return res.data.data;
}
