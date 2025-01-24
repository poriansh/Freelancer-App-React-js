import { useSearchParams } from "react-router-dom";

function FilterBtn({filterField, option}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || option.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span className="text-secondary-900">وضعیت</span>
      <div className="flex items-center gap-x-2">
        {option.map(({value, label}) => {
          const isActive = value === currentFilter;
          return (
            <button
              key={value}
              disabled={isActive}
              onClick={() => handleClick(value)}
              className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-300
             ${isActive ? "bg-pramery-900 text-white" : "text-secondary-800 bg-secondary-0"} 
              `}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterBtn
