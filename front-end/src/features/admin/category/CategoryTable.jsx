import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import useCategory from "../../projects/useCategory";
import CategoryRow from "./CategoryRow";

function CategoryTable() {

    const {categorys, isLoading} = useCategory();
  if (isLoading) return <Loading />;
  if (!categorys.length) return <Empty resorcename="پروژه" />;
  return (
    <Table>
      <Table.Header>
        <th>شماره</th>
        <th>عنوان دسته بندی</th>
        <th>عنوان انگلیسی دسته بندی</th>
        <th>توضیحات</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {categorys.map((category, index) => (
          <CategoryRow key={category._id} category={category} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default CategoryTable
