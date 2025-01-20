import useProjects from "../../../hooks/useProjects";
import ProjectRow from "./ProjectRow";
import Table from "../../../ui/Table"
import Loading from "../../../ui/Loading";
import Empty from "../../../ui/Empty";
function ProjectTable() {
  const {isLoading, projects} = useProjects();

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty resorcename="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>شماره</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable
