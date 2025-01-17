import Stat from "../../ui/Stat";


function Stats({ projects }) {
  const numOfProject = projects.length;
  const numOfAccepted = projects.filter((p) => p.status === "OPEN").length;
  const numOfProposals = projects.reduce((acc, curr) => curr.proposals.length + acc, 0);
  return (
    <div className="grid grid-cols-3 gap-8">
      <Stat color="pramery" title="پروژه ها" value={numOfProject} />
      <Stat color="green" title="پروژه های واگذار شده" value={numOfAccepted} />
      <Stat color="orange" title="درخواست ها" value={numOfProposals} />
    </div>
  );
}

export default Stats;
