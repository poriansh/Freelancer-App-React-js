import CategoryHeader from "../features/admin/category/CategoryHeader";
import CategoryTable from "../features/admin/category/CategoryTable";

function Categorys() {
  return (
    <div className="px-5 w-full mt-5">
      <CategoryHeader/>
      <CategoryTable/>
    </div>
  );
}

export default Categorys;
