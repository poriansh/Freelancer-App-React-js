import DashbordHeader from "../features/freelancer/DashbordHeader";
import Stats from "../features/freelancer/Stats";
import useFreelancer from "../features/freelancer/useFreelancer";
import Loading from "../ui/Loading";


function FreelancerDashbord() {
    const { proposals, isLoading } = useFreelancer()
    if (isLoading) return <Loading />
  return (
    <div className="px-10 mt-5">
      <DashbordHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default FreelancerDashbord
