import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ChangeStatusApi} from "../../services/ProposalsService";
import toast from "react-hot-toast";

function useChangeStatus() {
  const queryClient = useQueryClient();
  const {isPending: isLoading, mutate: ChangeStatus} = useMutation({
    mutationFn: ChangeStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({queryKey: ["project"]});
    },
    onError: (err) => {
      toast.error(err?.response?.data?.massage);
    },
  });
  return {isLoading, ChangeStatus};
}

export default useChangeStatus;
