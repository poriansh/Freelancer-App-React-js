import ProposalsHeader from "../features/proposals/ProposalsHeader";
import ProposalTable from "../features/proposals/ProposalTable";

function Proposals() {
  return <div className="px-5 w-full mt-5">
    <ProposalsHeader />
    <ProposalTable/>
  </div>;
}

export default Proposals
