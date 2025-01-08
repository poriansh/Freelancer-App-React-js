import useProject from "../features/project/useProject";
import Loading from "../ui/Loading"

function SingleProject() {
  const { isLoading, project } = useProject()
  console.log(project)
    if(isLoading) return <Loading/>
  
  return <div className="px-10 w-full overflow-x-auto mt-5 ">SingleProject</div>;
}

export default SingleProject
