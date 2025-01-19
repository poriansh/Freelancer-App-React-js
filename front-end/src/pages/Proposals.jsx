import ProposalsHeader from "../features/proposals/ProposalsHeader";
import ProposalTable from "../features/proposals/ProposalTable";

function Proposals() {
  return <div className="px-10 w-full overflow-x-auto mt-5">
    <ProposalsHeader />
    <ProposalTable/>
  </div>;
}

export default Proposals
