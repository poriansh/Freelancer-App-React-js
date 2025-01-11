import {ClipboardDocumentCheckIcon} from "@heroicons/react/20/solid";
import Table from "../../ui/Table";
import {useState} from "react";
import Modal from "../../ui/Modal";
import ChangeStatusProposal from "./ChangeStatusProposal";


function ProposalsRow({proposal, index, project}) {
  const [open, setopen] = useState(false);
  const {status} = proposal;
  const statusname = status === 0 ? "رد شده" : status === 1 ? "در انتظار تایید" : "تایید شده";
  
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>{proposal.description}</td>
      <td>{proposal.duration}</td>
      <td>{proposal.price}</td>
      <td>
        <div className="w-full h-full">
          <span
            className={`badge ${
              status === 0 ? "badge--danger" : status === 1 ? "badge--warning" : "badge--success"
            }`}
          >
            {statusname}
          </span>
        </div>
      </td>
      <td>
        <button onClick={() => setopen(true)}>
          <ClipboardDocumentCheckIcon className="w-5 h-5 text-pramery-900" />
        </button>
        <Modal
          title={` مدیریت درخواست های پروژه ${project.title}`}
          open={open}
          onClose={() => setopen(false)}
        >
          <ChangeStatusProposal onClose={() => setopen(false)} proposalId={proposal._id} />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProposalsRow;
