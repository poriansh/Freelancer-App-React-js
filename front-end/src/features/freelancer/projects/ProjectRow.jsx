import Table from "../../../ui/Table";
import TruncateText from "../../../utils/TruncateText"
import {persianNumber} from "../../../utils/persianNumber";
import toLocalDate from "../../../utils/toLocalDate";
import {ClipboardDocumentCheckIcon} from "@heroicons/react/20/solid";
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
 const {status, title, budget, deadline} = project;
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
        {/* <Modal open={open} onClose={() => setOpen(false)} title={`درخواست انجام پروژه ${title}`}>
          <CreateProposal projectId={project._id} onClose={() => setOpen(false)} />
        </Modal> */}
        <button className="flex items-center">
          <ClipboardDocumentCheckIcon className="w-5 h-5 text-pramery-900" />
        </button>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
