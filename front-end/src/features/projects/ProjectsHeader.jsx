import {useState} from "react";

import Modal from "../../ui/Modal";
import CreatProjectForm from "./CreatProjectForm";
function ProjectHeader() {
  const [CreatProject, setCreatProject] = useState(false);
  return (
    <div className="flex flex-col gap-4 xs:flex-row items-center justify-between mb-5">
      <h1 className="font-Vazir-Black text-secondary-900">لیست پروژه ها</h1>
      <button className="btn btn--primary w-auto" onClick={() => setCreatProject(true)}>
        {" "}
        + پروژه جدید
      </button>
      <Modal open={CreatProject} title="ساخت پروژه جدید" onClose={() => setCreatProject(false)}>
        <CreatProjectForm onClose={() => setCreatProject(false)} />
      </Modal>
    </div>
  );
}

export default ProjectHeader;
