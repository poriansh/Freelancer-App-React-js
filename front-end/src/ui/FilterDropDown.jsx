import {useSearchParams} from "react-router-dom";
import Select from "./Select";
function FilterDropDown({option,filterField}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";
  const handelChange = (e) => {
      searchParams.set(filterField, e.target.value);
      setSearchParams(searchParams)
  };
  return <Select value={value} onChange={handelChange} option={option} />;
}

export default FilterDropDown;
