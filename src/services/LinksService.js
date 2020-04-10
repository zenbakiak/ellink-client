import axios from "axios";
const url = "https://evening-sierra-34689.herokuapp.com";

const linksService = (config) => {
  const service = axios.create({
    baseURL: `${url}/links`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return service(config);
};
const topRanked = () =>
  linksService({
    method: "GET",
    url: "/",
  }).then((response) => response.data);

const fetch = slug =>
  linksService({
    method: "GET",
    url: `/${slug}`,
  }).then((response) => response.data);

const create = url =>
  linksService({
    method: "POST",
    url: `/`,
    data: {
      link: { url }
    }
  }).then((response) => response.data);

export default {
  topRanked,
  fetch,
  create
};
