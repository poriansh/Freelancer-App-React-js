
import Stats from "../features/owner/Stats";
import useOwnerProjects from "../features/projects/useOwnerProjects";
import DashbordHeader from "../ui/DashbordHeader";
import Loading from "../ui/Loading";

function OwnerDashbord() {
  const { isLoading, projects } = useOwnerProjects()
  if(isLoading) return <Loading/>
  return (
    <div className="px-10 mt-5">
      <DashbordHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default OwnerDashbord;
