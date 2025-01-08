import {useQuery} from "@tanstack/react-query";
import {getProjectApi} from "../../services/ProjectService";
import {useParams} from "react-router-dom";
function useProject() {
  const {id} = useParams();
  const {data, isLoading} = useQuery({
    queryKey: ["project"],
    queryFn: () => getProjectApi(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
  const {project} = data || {};
  return {project, isLoading};
}

export default useProject;
