import {useState} from "react";
import SelectOption from "../../ui/SelectOption";
import Textfield from "../../ui/Textfield";
import {useForm} from "react-hook-form";
import {TagsInput} from "react-tag-input-component";
import DatePickerField from "../../ui/DataPicker";
function CreatProjectForm() {
  const [tags, settags] = useState([]);
  const [date, setdate] = useState(new Date());
  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Textfield
        label="عنوان پروژه"
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
        label="توضیحات پروژه"
        id="description"
        name="description"
        register={register}
        required
        ValidationSchema={{
          required: "توضیحات پروژه الزامی است",
          minLength: {value: 15, message: "توضیحات کمتر از 15 کاراکتر نمیتواند باشد"},
        }}
        errors={errors}
      />
      <Textfield
        type="number"
        label="قیمت پروژه"
        id="budget"
        name="budget"
        register={register}
        required
        ValidationSchema={{
          required: "قیمت پروژه الزامی است",
        }}
        errors={errors}
      />
      <SelectOption register={register} required label="دسته بندی" name="category" />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput  value={tags} onChange={settags} name="tags" />
      </div>
      <DatePickerField date={date} setdate={setdate} label="ددلاین" />
      <button type="submit" className="btn btn--primary mt-5">
        تایید
      </button>
    </form>
  );
}

export default CreatProjectForm;
