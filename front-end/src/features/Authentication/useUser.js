import {useQuery} from "@tanstack/react-query";
import {getUser} from "../../services/AthService";

function useUser() {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
    refetchOnWindowFocus: true,
  });
}

export default useUser;
