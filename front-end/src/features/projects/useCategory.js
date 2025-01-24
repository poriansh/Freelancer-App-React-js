import {useQuery} from "@tanstack/react-query";
import {getCategoty} from "../../services/CategoryService";

function useCategory() {
  const {data, isLoading} = useQuery({
    queryKey: ["get-category"],
    queryFn: getCategoty,
    retry: false,
  });
  const {categories = []} = data || {};
  const categorys = categories.map((item) => item);
  const transformedCategories = categories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return {isLoading, categorys, transformedCategories};
}

export default useCategory;
