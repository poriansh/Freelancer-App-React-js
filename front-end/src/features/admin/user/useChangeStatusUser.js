import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ChangeStatusUserApi } from "../../../services/AthService";

function useChangeStatusUser() {
    const queryClient = useQueryClient();
    const {isPending: isLoading, mutate: ChangeStatusUser} = useMutation({
      mutationFn: ChangeStatusUserApi,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({queryKey: ["users"]});
      },
      onError: (err) => {
        toast.error(err?.response?.data?.massage);
      },
    });
    return {isLoading, ChangeStatusUser};
}

export default useChangeStatusUser
