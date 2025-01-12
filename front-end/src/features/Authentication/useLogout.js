import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOutApi } from "../../services/AthService";
import {  useNavigate } from "react-router-dom";

function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending: isLoading, mutate: logout } = useMutation({
    mutationFn: logOutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/Login", {replace : true});
    },
    onError: (err) => {
      toast.error(err?.response?.data?.massage);
    },
  });
  return { isLoading, logout };
}

export default useLogout;
