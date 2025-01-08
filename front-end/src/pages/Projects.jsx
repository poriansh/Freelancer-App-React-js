import ProjectHeader from "../features/projects/ProjectHeader";
import ProjectTable from "../features/projects/ProjectTable";

function Projects() {
  return (
    <div className="px-10 w-full overflow-x-auto mt-5">
      <ProjectHeader />
      <ProjectTable />
    </div>
  );
}

export default Projects;
