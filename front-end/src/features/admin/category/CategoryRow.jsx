import {TrashIcon} from "@heroicons/react/20/solid";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import {useState} from "react";
import ConfrimDelete from "../../../ui/ConfrimDelete";
import useDeleteCategory from "./useDeleteCategory";

function CategoryRow({category, index}) {
  const [Deleteopen, setDeleteopen] = useState(false);
  const {removeCategory} = useDeleteCategory();
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{category.title}</td>
      <td>{category.englishTitle}</td>
      <td>{category.description}</td>

      <td>
        <div className="flex gap-3">
          <button onClick={() => setDeleteopen(true)}>
            <TrashIcon className="w-5 h-5 text-error" />
          </button>
          <Modal
            title={`حذف ${category.title}`}
            open={Deleteopen}
            onClose={() => setDeleteopen(false)}
          >
            <ConfrimDelete
              onClose={() => setDeleteopen(false)}
              resourcename={category.title}
              lable="دسته بندی"
              onConfrim={() =>
                removeCategory(
                  {id: category._id},
                  {
                    onSuccess: () => setDeleteopen(false),
                  }
                )
              }
              disablad={false}
            />
          </Modal>
        </div>
      </td>
    </Table.Row>
  );
}

export default CategoryRow;
