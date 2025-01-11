import {useState} from "react";
import SelectOption from "../../ui/SelectOption";
import Textfield from "../../ui/Textfield";
import {useForm} from "react-hook-form";
import {TagsInput} from "react-tag-input-component";
import DatePickerField from "../../ui/DataPicker";
import useCategory from "./useCategory";
import useCreatProject from "./useCreatProject";
import useEditProject from "./useEditProject";
function CreatProjectForm({onClose, projectToEdit = {}}) {
  const {_id: editID} = projectToEdit;
  const isEditSession = Boolean(editID);
  const {title, description, budget, category, tags: prevtags, deadline} = projectToEdit;
  let editValue = {};
  if (isEditSession) {
    editValue = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const [tags, settags] = useState(prevtags || []);
  const [date, setdate] = useState(new Date(deadline || ""));
  const {categorys} = useCategory();
  const {CreatProject} = useCreatProject();
  const {EditProject} = useEditProject();
  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm({defaultValues: editValue});

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      tags,
      deadline: new Date(date).toISOString(),
    };
    if (isEditSession) {
      EditProject(
        {id: editID, newProject},
        {
          onSuccess: () => {
            onClose(); // بستن فرم
            reset(); // ریست کردن فرم
          },
          onError: (error) => {
            console.error("خطا در ویرایش پروژه:", error);
          },
        }
      );
    } else {
      CreatProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
        onError: (error) => {
          console.error("خطا در ساخت پروژه:", error);
        },
      });
    }
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
      <SelectOption
        options={categorys}
        register={register}
        required
        label="دسته بندی"
        name="category"
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={settags} name="tags" />
      </div>
      <DatePickerField date={date} setdate={setdate} label="ددلاین" required />
      <button type="submit" className="btn btn--primary mt-5">
        تایید
      </button>
    </form>
  );
}

export default CreatProjectForm;
