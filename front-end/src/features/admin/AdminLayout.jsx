import { ClipboardDocumentCheckIcon, HomeIcon } from "@heroicons/react/16/solid";
import Applayout from "../../pages/Applayout";
import CustomNavlink from "../../ui/CustomNavlink";
import Sidbar from "../../ui/Sidbar";

function AdminLayout() {
  return (
    <Applayout>
      <Sidbar>
        <CustomNavlink to="/admin/dashbord">
          <HomeIcon className="w-5 h-5" />
          <span>داشبورد</span>
        </CustomNavlink>
        <CustomNavlink to="/admin/projects">
          <ClipboardDocumentCheckIcon className="w-5 h-5" />
          <span>لیست پروژه ها</span>
        </CustomNavlink>
        <CustomNavlink to="/admin/proposals">
          <ClipboardDocumentCheckIcon className="w-5 h-5" />
          <span>لیست درخواست ها</span>
        </CustomNavlink>
        <CustomNavlink to="/admin/users">
          <ClipboardDocumentCheckIcon className="w-5 h-5" />
          <span>لیست کاربران </span>
        </CustomNavlink>
        <CustomNavlink to="/admin/category">
          <ClipboardDocumentCheckIcon className="w-5 h-5" />
          <span>دسته بندی</span>
        </CustomNavlink>
      </Sidbar>
    </Applayout>
  );
}

export default AdminLayout
