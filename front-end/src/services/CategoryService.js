import http from "./httpService";

export function getCategoty() {
  return http.get(`/category/list`).then(({data}) => data.data);
}
export function createCategoty(data) {
  return http.post(`admin/category/add`, data).then(({data}) => data.data);
}
export function deleteCategoty({id}) {
  return http.delete(`admin/category/remove/${id}`).then(({data}) => data.data);
}
