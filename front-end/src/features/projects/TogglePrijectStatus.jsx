import Togglebtn from "../../ui/Togglebtn";
import useToggleStatus from "./useToggleStatus";

function TogglePrijectStatus({project}) {
  const {status} = project;
  const {StatusProject} = useToggleStatus();
  const handelToggle = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    StatusProject({
      id: project._id,
      data: {status: newStatus},
    });
  };

  return (
    <Togglebtn
      lable={status === "OPEN" ? "باز" : "بسته"}
      enabled={status === "OPEN" ? true : false}
      onChange={handelToggle}
    />
  );
}

export default TogglePrijectStatus;
