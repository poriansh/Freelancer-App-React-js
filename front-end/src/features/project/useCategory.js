import {useQuery} from "@tanstack/react-query";
import {getCategoty} from "../../services/CategoryService";

function useCategory() {
  const {data, isLoading} = useQuery({
    queryKey: ["gat-category"],
    queryFn: getCategoty,
    retry: false,
  });
  const {categories = []} = data || {};
  const categorys = categories.map((item) => item);

  return {isLoading, categorys};
}

export default useCategory;
