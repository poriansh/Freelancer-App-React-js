import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../services/AthService";

function useUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    retry: false,
    refetchOnWindowFocus: true,
  });
  const { users } = data || {};
  return { users, isLoading };
}

export default useUsers;
