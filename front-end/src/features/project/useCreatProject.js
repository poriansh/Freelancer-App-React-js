import {useMutation, useQueryClient} from "@tanstack/react-query";
import {CreatProjectApi} from "../../services/ProjectService";
import toast from "react-hot-toast";

function useCreatProject() {
  const queryClient = useQueryClient();
  const {isPending: isLoading, mutate: CreatProject} = useMutation({
    mutationFn: CreatProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.massage);
    },
  });
    return {isLoading,CreatProject}
}

export default useCreatProject;
