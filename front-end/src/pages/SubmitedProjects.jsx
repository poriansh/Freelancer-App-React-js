import ProjectHeader from "../features/freelancer/projects/ProjectHeader";
import ProjectTable from "../features/freelancer/projects/ProjectTable";


function SubmitedProjects() {
  return <div className="px-10 w-full overflow-x-auto mt-5">
    <ProjectHeader />
    <ProjectTable/>
  </div>;
}
export default SubmitedProjects
