import {useQuery} from "@tanstack/react-query";
import {getProposalsApi} from "../../services/ProposalsService";

function useFreelancer() {
  const {data, isLoading} = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposalsApi,
  });
  const {proposals} = data || {};
  return {proposals, isLoading};
}
export default useFreelancer;
