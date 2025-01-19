import { useForm } from "react-hook-form"
import Textfield from "../../ui/Textfield"
import Button from "../../ui/Button";
import useCreatProposals from "./useCreatProposals";

function CreatProposals({projectId, onClose}) {
  const {createProposal} = useCreatProposals();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = (data) => {
    createProposal(
      {...data, projectId},
      {
        onSuccess: () => {
          onClose()
        },
      }
    );
  };
  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Textfield
          label="توضیحات"
          name="description"
          register={register}
          required
          ValidationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />
        <Textfield
          label="قیمت"
          name="price"
          type="number"
          register={register}
          required
          ValidationSchema={{
            required: "قیمت ضروری است",
          }}
          errors={errors}
        />
        <Textfield
          label="مدت زمان"
          name="duration"
          type="number"
          register={register}
          required
          ValidationSchema={{
            required: "مدت زمان ضروری است",
          }}
          errors={errors}
        />
        <Button>تایید</Button>
      </form>
    </div>
  );
}

export default CreatProposals;
