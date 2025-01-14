import {ClipboardDocumentCheckIcon, HomeIcon} from "@heroicons/react/16/solid";
import Applayout from "../../pages/Applayout";
import Sidbar from "../../ui/Sidbar";
import CustomNavlink from "../../ui/CustomNavlink";

function OwnerLayout() {
  return (
    <Applayout>
      <Sidbar>
        <CustomNavlink to="/owner/dashbord">
          <HomeIcon className="w-5 h-5" />
          <span>داشبورد</span>
        </CustomNavlink>
        <CustomNavlink to="/owner/projects">
          <ClipboardDocumentCheckIcon className="w-5 h-5" />
          <span>لیست پروژه ها</span>
        </CustomNavlink>
      </Sidbar>
    </Applayout>
  );
}

export default OwnerLayout;
