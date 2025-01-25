
import Stats from "../features/freelancer/Stats";
import useFreelancer from "../features/proposals/useFreelancer";
import DashbordHeader from "../ui/DashbordHeader";
import Loading from "../ui/Loading";


function FreelancerDashbord() {
    const { proposals, isLoading } = useFreelancer()
    if (isLoading) return <Loading />
  return (
    <div className="px-5 mt-5">
      <DashbordHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default FreelancerDashbord
