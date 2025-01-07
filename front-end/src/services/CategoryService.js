import http from "./httpService";

export function getCategoty() {
  return http.get(`/category/list`).then(({data}) => data.data);
}
