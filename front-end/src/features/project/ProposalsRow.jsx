import Table from "../../ui/Table";

function ProposalsRow({proposal, index}) {
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
    </Table.Row>
  );
}

export default ProposalsRow;
