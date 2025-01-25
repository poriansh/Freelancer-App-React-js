import Stats from "../features/admin/Stats";
import useUsers from "../features/admin/useUsers";
import useFreelancer from "../features/proposals/useFreelancer";
import useProjects from "../hooks/useProjects";
import DashbordHeader from "../ui/DashbordHeader";
import Loading from "../ui/Loading";

function AdminDashbord() {
  const { isLoading: loading1, projects } = useProjects();
  const { isLoading: loading2, proposals } = useFreelancer();
  const { users } = useUsers();
  console.log(users)
  if (loading1 || loading2) return <Loading />;
  return (
    <div className="px-5 mt-5">
      <DashbordHeader />
      <Stats
        proposals={proposals?.length || 0}
        projects={projects?.length || 0}
        users={users?.length || 0}
      />
    </div>
  );
}

export default AdminDashbord;
