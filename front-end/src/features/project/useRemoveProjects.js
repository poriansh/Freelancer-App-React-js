import {useMutation, useQueryClient} from "@tanstack/react-query";
import {removeProjectsApi} from "../../services/ProjectService";
import toast from "react-hot-toast";

function useRemoveProjects() {
    const queryClient = useQueryClient()
  const {isPending: isLoading, mutate: removeProject} = useMutation({
    mutationFn: removeProjectsApi,
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
  return {isLoading, removeProject};
}

export default useRemoveProjects;
