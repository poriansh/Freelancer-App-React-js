import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { StatusProjectApi } from "../../services/ProjectService";


function useToggleStatus() {
  const queryClient = useQueryClient();
  const {isPending: isLoading, mutate: StatusProject} = useMutation({
    mutationFn: StatusProjectApi,
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
  return {isLoading, StatusProject};
}

export default useToggleStatus
