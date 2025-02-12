import useProject from "../features/project/useProject";
import Loading from "../ui/Loading";
import ProjectHeader from "../features/project/ProposalsHeader";
import ProposalsTable from "../features/project/ProposalsTable";

function SingleProject() {
  const {isLoading, project} = useProject();
  console.log(project);
  if (isLoading) return <Loading />;

  return (
    <div className="px-5 w-full mt-5 ">
      <ProjectHeader project={project} />
      <ProposalsTable project={project} proposals={project.proposals} />
    </div>
  );
}

export default SingleProject;
