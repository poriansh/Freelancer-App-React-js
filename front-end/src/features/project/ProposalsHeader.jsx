import useMoveBack from "../../hooks/useMoveBack"
function ProjectHeader({project}) {
  const back = useMoveBack();
  return (
    <div className="flex items-center justify-between mb-5">
      <h2 className="font-Vazir-Black text-secondary-900"> لیست درخواست های پروژه {project.title}</h2>
      <button onClick={back} className="btn btn--primary w-auto">
        لیست همه پروژه ها
      </button>
    </div>
  );
}

export default ProjectHeader
