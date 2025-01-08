import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { EditProjectApi } from "../../services/ProjectService";

function useEditProject() {
  const queryClient = useQueryClient();
  const {isPending: isLoading, mutate: EditProject} = useMutation({
    mutationFn: EditProjectApi,
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
  return {isLoading, EditProject};
}

export default useEditProject
