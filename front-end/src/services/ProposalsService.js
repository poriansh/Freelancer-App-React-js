import http from "./httpService";

export function ChangeStatusApi({id,data}) {
  return http.patch(`/proposal/${id}`, data).then(({data}) => data.data);
}

