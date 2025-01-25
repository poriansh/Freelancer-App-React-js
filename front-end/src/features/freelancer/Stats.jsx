import Stat from "../../ui/Stat";
function Stats({proposals}) {
  const proposalsProject = proposals.length;
  const proposalsAccepted = proposals.filter((p) => p.status === 2);
const lengthAccepted = proposalsAccepted.length
  const Balance = proposalsAccepted.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat color="pramery" title="درخواست ها" value={proposalsProject} />
      <Stat color="green" title="درخواست  های تایید شده" value={lengthAccepted} />
      <Stat color="orange" title="کیف پول" value={Balance} />
    </div>
  );
}

export default Stats;
