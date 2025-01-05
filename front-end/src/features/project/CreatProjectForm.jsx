import Textfield from "../../ui/Textfield";
import {useForm} from "react-hook-form";
function CreatProjectForm() {
  const {
    register,
    formState: {errors},
    handleSubmit,
    } = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <Textfield
        label="عنوان پروژه"
        id="title"
        name="title"
        register={register}
        required
        ValidationSchema={{
          required: "عنوان پروژه الزامی است",
          minLength: {value: 10, message: "عنوان کمتر از 10 کاراکتر نمیتواند باشد"},
        }}
        errors={errors}
      />
      <button type="submit" className="btn btn--primary">
        تایید
      </button>
    </form>
  );
}

export default CreatProjectForm;
