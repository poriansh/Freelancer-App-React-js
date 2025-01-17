import ProposalsHeader from "../features/freelancer/proposalsHeader";
import ProposalTable from "../features/freelancer/ProposalTable";

function Proposals() {
  return <div className="px-10 w-full overflow-x-auto mt-5">
    <ProposalsHeader />
    <ProposalTable/>
  </div>;
}

export default Proposals
