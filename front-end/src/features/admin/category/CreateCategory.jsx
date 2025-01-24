import {useForm} from "react-hook-form";
import Textfield from "../../../ui/Textfield";
import useCreateCategory from "./useCreateCategory";

function CreateCategory({ onClose }) {
  const {CreatCategory} =   useCreateCategory()
  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    CreatCategory(
      {...data, type: "project"},
      {
        onSuccess: () => {
          onClose();
          reset();
        },
        onError: (error) => {
          console.error("خطا در ساخت پروژه:", error);
        },
      }
    );
  };
  return (
    <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Textfield
        label="عنوان دسته بندی"
        id="title"
        name="title"
        register={register}
        required
        ValidationSchema={{
          required: "عنوان پروژه الزامی است",
          minLength: {value: 5, message: "عنوان کمتر از 5 کاراکتر نمیتواند باشد"},
        }}
        errors={errors}
      />
      <Textfield
        label="توضیحات دسته بندی"
        id="description"
        name="description"
        register={register}
        required
        ValidationSchema={{
          required: "توضیحات دسته بندی الزامی است",
          minLength: {value: 10, message: "توضیحات کمتر از 10 کاراکتر نمیتواند باشد"},
        }}
        errors={errors}
      />
      <Textfield
        label="عنوان لاتین"
        id="englishTitle"
        name="englishTitle"
        register={register}
        required
        ValidationSchema={{
          required: "عنوان انگلیسی دسته بندی الزامی است",
          minLength: {value: 3, message: "توضیحات کمتر از 3 کاراکتر نمیتواند باشد"},
        }}
        errors={errors}
      />
      <button type="submit" className="btn btn--primary mt-5">
        تایید
      </button>
    </form>
  );
}

export default CreateCategory;
