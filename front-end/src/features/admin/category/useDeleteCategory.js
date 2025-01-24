import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCategoty } from "../../../services/CategoryService";

function useDeleteCategory() {
    const queryClient = useQueryClient();
    const {isPending: isLoading, mutate: removeCategory} = useMutation({
      mutationFn: deleteCategoty,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({
          queryKey: ["get-category"],
        });
      },
      onError: (err) => {
        toast.error(err?.response?.data?.massage);
      },
    });
    return {isLoading, removeCategory};
}

export default useDeleteCategory
