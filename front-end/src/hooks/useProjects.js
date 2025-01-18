import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/ProjectService";

function useProjects() {
  const {data, isLoading} = useQuery({
    queryKey: ["projects"],
    queryFn: getProjectsApi,
    refetchOnWindowFocus: true,
  });
  const {projects} = data || {};
  return {projects, isLoading};
}

export default useProjects
