import FilterBtn from "../../../ui/FilterBtn";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategory from "../../projects/useCategory";

const sortOptions = [
  {
    label: "مرتب سازی (جدید ترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی (قدیمی ترین)",
    value: "earliest",
  },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];
function ProjectHeader() {
  const {transformedCategories} = useCategory();
  return (
    <div className="flex items-center justify-between mb-5">
      <h1 className="font-Vazir-Black text-secondary-900">لیست همه پروژه ها</h1>
      <div className="flex gap-4">
        <FilterBtn filterField="status" option={statusOptions} />
        <FilterDropDown filterField="sort" option={sortOptions} />
        <FilterDropDown
          filterField="category"
          option={[
            {
              value: "All",
              label: "همه دسته بندی",
            },
            ...transformedCategories,
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectHeader;
