import {useQuery} from "@tanstack/react-query";
import {getUser} from "../../services/AthService";

function useUser() {
    const {data, isLoading} = useQuery({
      queryKey: ["get-user"],
      queryFn: getUser,
      retry: false,
      refetchOnWindowFocus: true,
    });
    const {user} = data || {};
    return {user, isLoading};
}

export default useUser;
