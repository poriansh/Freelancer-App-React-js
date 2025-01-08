import {EyeIcon, PencilSquareIcon, TrashIcon} from "@heroicons/react/20/solid";
import Table from "../../ui/Table";
import TruncateText from "../../utils/TruncateText";
import {persianNumber} from "../../utils/persianNumber";
import toLocalDate from "../../utils/toLocalDate";
import Modal from "../../ui/Modal";
import {useState} from "react";
import ConfrimDelete from "../../ui/ConfrimDelete";
import useRemoveProjects from "./useRemoveProjects";
import CreatProjectForm from "./CreatProjectForm";

import TogglePrijectStatus from "./TogglePrijectStatus";
import { Link } from "react-router-dom";

function ProjectRow({project, index}) {
  const [Editopen, setEditopen] = useState(false);
  const [Deleteopen, setDeleteopen] = useState(false);
  const { removeProject } = useRemoveProjects();
  console.log(project._id)
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{TruncateText(project.title, 15)}</td>
      <td>{project.category.title}</td>
      <td>{persianNumber(project.budget)}</td>
      <td>{toLocalDate(project.deadline)}</td>
      <td>
        <div className="flex items-center gap-2 flex-wrap max-w-24 ">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <TogglePrijectStatus project={project} />
        {/* {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className=" badge badge--danger">بسته</span>
        )} */}
      </td>
      <td>
        <div className="flex gap-3">
          <button onClick={() => setEditopen(true)}>
            <PencilSquareIcon className="w-5 h-5 text-pramery-900" />
          </button>
          <Modal
            title={`ویرایش ${project.title}`}
            open={Editopen}
            onClose={() => setEditopen(false)}
          >
            <CreatProjectForm onClose={() => setEditopen(false)} projectToEdit={project} />
          </Modal>
          <button onClick={() => setDeleteopen(true)}>
            <TrashIcon className="w-5 h-5 text-error" />
          </button>
          <Modal
            title={`حذف ${project.title}`}
            open={Deleteopen}
            onClose={() => setDeleteopen(false)}
          >
            <ConfrimDelete
              onClose={() => setDeleteopen(false)}
              resourcename={project.title}
              onConfrim={() =>
                removeProject(project._id, {
                  onSuccess: () => setDeleteopen(false),
                })
              }
              disablad={false}
            />
          </Modal>
        </div>
      </td>
      <td>
        <Link to={project._id}>
          <EyeIcon className="w-5 h-5"/>
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
