import Button from "../../ui/Button";
import RedioInput from "../../ui/RedioInput";
import Textfield from "../../ui/Textfield";
import toast from "react-hot-toast";
import {completProfile} from "../../services/AthService";
import {useMutation} from "@tanstack/react-query";
import Loading from "../../ui/Loading";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

function CompleteProfileForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();
  const navigate = useNavigate();
  const {isPending, mutateAsync} = useMutation({
    mutationFn: completProfile,
  });
  const handleSubmitForm = async (data) => {
    try {
      if (!data || !data || !data) throw new Error("اطلاعات کاربری خود را کامل کنید ");
      const {message, user} = await mutateAsync(data);
      toast.success(message);
      if (user.status !== 2) {
        toast("پروفایل شما در انتظار تایید است ");
        return navigate("/not-access");
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.status === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      if (!data || !data || !data) {
        toast.error(error.message);
      } else {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <div className="sm:max-w-96 m-auto pt-10">
      <h1 className="text-secondary-900 font-Vazir-Bold text-center">تکمیل اطلاعات</h1>
      <form className="space-y-4 mt-10" onSubmit={handleSubmit(handleSubmitForm)}>
        <div>
          <Textfield
            label="نام و نام خانوادگی"
            type="text"
            register={register}
            name="name"
            required
            id="name"
            ValidationSchema={{
              required: "نام و نام خانوادگی الزامی است ",
            }}
            errors={errors}
          />
        </div>
        <div>
          <Textfield
            label="ایمیل"
            type="text"
            register={register}
            required
            name="email"
            id="email"
            ValidationSchema={{
              required: " ایمیل الزامی است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نا معتبر است ",
              },
            }}
            errors={errors}
          />
        </div>
        <div className="flex items-center justify-center gap-x-6">
          <RedioInput
            label="کارفرما"
            register={register}
            id="OWNER"
            value="OWNER"
            name="role"
            type="radio"
            required
            checked={watch("role") === "OWNER"}
            ValidationSchema={{
              required: " انتخاب نقش الزامی است",
            }}
            errors={errors}
          />
          <RedioInput
            label="فریلنسر"
            register={register}
            id="FREELANCER"
            value="FREELANCER"
            name="role"
            type="radio"
            checked={watch("role") === "FREELANCER"}
            ValidationSchema={{
              required: " انتخاب نقش الزامی است",
            }}
            errors={errors}
          />
        </div>
        <Button type="submit">{isPending ? <Loading /> : "تایید"}</Button>
      </form>
    </div>
  );
}

export default CompleteProfileForm;
