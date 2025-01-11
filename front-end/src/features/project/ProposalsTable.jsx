import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalsRow from "./ProposalsRow";
function ProposalsTable({proposals, project}) {
  if (!proposals.length) return <Empty resorcename="درخواستی" />;
  return (
    <Table>
      <Table.Header>
        <th>شماره</th>
        <th>فریلنسر</th>
        <th>توضیحات</th>
        <th>زمان</th>
        <th>هزینه</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalsRow key={proposal._id} project={project} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable;
