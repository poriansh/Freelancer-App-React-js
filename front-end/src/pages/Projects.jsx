import ProjectHeader from "../features/project/ProjectHeader";
import ProjectTable from "../features/project/ProjectTable";

function Projects() {
  return (
    <div className="max-w-screen-lg overflow-x-auto mt-5">
      <ProjectHeader/>
      <ProjectTable />
    </div>
  );
}

export default Projects;
