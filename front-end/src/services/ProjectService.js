import http from "./httpService";

export function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({data}) => data.data);
}
export function removeProjectsApi(id) {
  return http.delete(`/project/${id}`).then(({data}) => data.data);
}
export function CreatProjectApi(newProject) {
  return http.post("/project/add", newProject).then(({data}) => data.data);
}
export function EditProjectApi({id, newProject}) {
  return http.patch(`/project/update/${id}`, newProject).then(({data}) => data.data);
}
export function StatusProjectApi({id, data}) {
  return http.patch(`/project/${id}`, data).then(({data}) => data.data);
}
export function getProjectApi(id) {
  return http.get(`/project/${id}`).then(({data}) => data.data);
}
export function getProjectsApi() {
  return http.get(`/project/list`).then(({data}) => data.data);
}
