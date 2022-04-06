import { requestApi } from "./requestApi";

export async function Service() {
    let res = await requestApi();
    console.log("yo", res.data.data);
    return res.data.data;
};
