import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import useFreelancer from "./useFreelancer";

function ProposalTable() {
  const {proposals, isLoading} = useFreelancer();
  console.log(proposals);
  if (isLoading) return <Loading />;
  if (!proposals.length) return <Empty resorcename="درخواست" />;
  return (
    <Table>
      <Table.Header>
        <th>شماره</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;
