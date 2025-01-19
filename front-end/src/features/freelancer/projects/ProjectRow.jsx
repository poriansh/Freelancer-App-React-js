import { useState } from "react";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import TruncateText from "../../../utils/TruncateText"
import {persianNumber} from "../../../utils/persianNumber";
import toLocalDate from "../../../utils/toLocalDate";
import {ClipboardDocumentCheckIcon} from "@heroicons/react/20/solid";
import CreatProposals from "../../proposals/CreatProposals";
const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};
function ProjectRow({project,index}) {
  const { status, title, budget, deadline } = project;
  const [open,setopen] = useState(false)
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{TruncateText(title, 30)}</td>
      <td>{persianNumber(budget)}</td>
      <td>{toLocalDate(deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal open={open} onClose={() => setopen(false)} title={`درخواست انجام پروژه ${title}`}>
          <CreatProposals projectId={project._id} onClose={() => setopen(false)} />
        </Modal>
        <button onClick={()=> setopen(true)} className="flex items-center">
          <ClipboardDocumentCheckIcon className="w-5 h-5 text-pramery-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
