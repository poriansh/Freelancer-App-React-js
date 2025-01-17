import Table from "../../ui/Table";
import { persianNumber } from "../../utils/persianNumber";
const options = [
  {
    title: "رد شده",
    _id: 0,
  },
  {
    title: "در انتظار تایید",
    _id: 1,
  },
  {
    title: "تایید شده",
    _id: 2,
  },
];
function ProposalRow({proposal, index}) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.description}</td>
      <td>{persianNumber(proposal.duration)}</td>
      <td>{persianNumber(proposal.price)}</td>
      <td>
        <div className="w-full h-full">
          <span
            className={`badge ${
              proposal.status === 0
                ? "badge--danger"
                : proposal.status === 1
                ? "badge--warning"
                : "badge--success"
            }`}
          >
            {options[proposal.status].title}
          </span>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
