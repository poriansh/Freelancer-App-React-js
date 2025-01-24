import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCategoty } from "../../../services/CategoryService";

function useCreateCategory() {
 const queryClient = useQueryClient();
 const {isPending: isLoading, mutate: CreatCategory} = useMutation({
   mutationFn: createCategoty,
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
 return {isLoading, CreatCategory};
}

export default useCreateCategory;
