import {useForm} from "react-hook-form";
import SelectOption from "../../ui/SelectOption";
import useChangeStatus from "./useChangeStatus";
const options = [
  {
    title: "رد شده",
    _id: 0,
  },
  {
    title: "در انتظار تایید",
    _id: 1,
  },
  {
    title: "تایید شده",
    _id: 2,
  },
];
function ChangeStatusProposal({proposalId, onClose}) {
  const {register, handleSubmit} = useForm();
  const {ChangeStatus} = useChangeStatus();
  const onsubmit = (data) => {
    ChangeStatus(
      {
        id: proposalId,
        data: data,
      },
      {
        onSuccess: () => {
          onClose();
          
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <SelectOption register={register} options={options} label="وضعیت" name="status" />
      <button className="btn btn--primary mt-5">تایبد</button>
    </form>
  );
}

export default ChangeStatusProposal;
