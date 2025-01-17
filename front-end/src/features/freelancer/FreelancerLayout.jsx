import { ClipboardDocumentCheckIcon, HomeIcon } from "@heroicons/react/16/solid";
import Applayout from "../../pages/Applayout";
import CustomNavlink from "../../ui/CustomNavlink";
import Sidbar from "../../ui/Sidbar";

function FreelancerLayout() {
    return (
      <Applayout>
        <Sidbar>
          <CustomNavlink to="dashbord">
            <HomeIcon className="w-5 h-5" />
            <span>داشبورد</span>
          </CustomNavlink>
          <CustomNavlink to="projects">
            <ClipboardDocumentCheckIcon className="w-5 h-5" />
            <span>لیست پروژه ها</span>
          </CustomNavlink>
          <CustomNavlink to="proposals">
            <ClipboardDocumentCheckIcon className="w-5 h-5" />
            <span>درخواست های من</span>
          </CustomNavlink>
        </Sidbar>
      </Applayout>
    );
}

export default FreelancerLayout
