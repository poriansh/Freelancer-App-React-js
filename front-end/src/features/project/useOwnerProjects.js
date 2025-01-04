import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/ProjectService";

function useOwnerProjects() {
  const {data,isLoading} =  useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
    refetchOnWindowFocus: true,
  });
    const { projects } = data || {}
    return {projects,isLoading}
}
export default useOwnerProjects