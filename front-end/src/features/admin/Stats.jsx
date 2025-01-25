import Stat from "../../ui/Stat";
function Stats({ proposals, projects,users }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Stat color="pramery" title="درخواست ها" value={proposals} />
      <Stat color="green" title="پروژه ها" value={projects} />
      <Stat color="orange" title="کاربران" value={users} />
    </div>
  );
}

export default Stats;
