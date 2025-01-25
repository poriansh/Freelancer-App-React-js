import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateCategory from "./CreateCategory";

function CategoryHeader() {
    const [open,Setopen] = useState(false)
  return (
    <div className="flex flex-col gap-4 xs:flex-row items-center justify-between mb-5">
      <h1 className="font-Vazir-Black text-secondary-900">لیست دسته بندی ها</h1>
      <button onClick={() => Setopen(true)} className="btn btn--primary w-auto">
        {" "}
        + دسته بندی جدید
      </button>
      <Modal open={open} title="ساخت دسته بندی جدید" onClose={() => Setopen(false)}>
        <CreateCategory onClose={() => Setopen(false)} />
      </Modal>
    </div>
  );
}

export default CategoryHeader
