import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProposalApi } from "../../services/ProposalsService";
import toast from "react-hot-toast";

function useCreatProposals() {
  const queryClient = useQueryClient();

  const {isPending: isCreating, mutate: createProposal} = useMutation({
    mutationFn: createProposalApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["proposals"],
      });
    },

    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return {isCreating, createProposal};
}

export default useCreatProposals
