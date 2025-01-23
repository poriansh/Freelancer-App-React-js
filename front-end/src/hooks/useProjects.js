import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/ProjectService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
function useProjects() {
  const { search } = useLocation();
  const queryObject = queryString.parse(search);
  // const queryObject = Object.fromEntries(new URLSearchParams(search));
  const { data, isLoading } = useQuery({
    queryKey: ["projects", queryObject],
    queryFn: () => getProjectsApi(search),
    refetchOnWindowFocus: true,
  });
  const { projects } = data || {};
  return { projects, isLoading };
}

export default useProjects;
