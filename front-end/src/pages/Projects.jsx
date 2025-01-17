import ProjectstHeader from "../features/projects/ProjectsHeader";
import ProjectTable from "../features/projects/ProjectTable";

function Projects() {
  return (
    <div className="px-10 w-full overflow-x-auto mt-5">
      <ProjectstHeader />
      <ProjectTable />
    </div>
  );
}

export default Projects;
