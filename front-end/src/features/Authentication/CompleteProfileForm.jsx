import {useState} from "react";
import Button from "../../ui/Button";
import RedioInput from "../../ui/RedioInput";
import Textfield from "../../ui/Textfield";
import toast from "react-hot-toast";
import {completProfile} from "../../services/AthService";
import {useMutation} from "@tanstack/react-query";
import Loading from "../../ui/Loading";
import {useNavigate} from "react-router-dom";

function CompleteProfileForm() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [role, setrole] = useState();
  const navigate = useNavigate();
  const {isPending, mutateAsync} = useMutation({
    mutationFn: completProfile,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !role) throw new Error("اطلاعات کاربری خود را کامل کنید ");
      const {message, user} = await mutateAsync({name, email, role});
      toast.success(message);
      if (user.status !== 2) {
        toast("پروفایل شما در انتظار تایید است ");
        return navigate("/");
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.status === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      if (!name || !email || !role) {
        toast.error(error.message);
      } else {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return (
    <div className="sm:max-w-96 m-auto mt-20">
      <h1 className="font-Vazir-Bold text-center">تکمیل اطلاعات</h1>
      <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm" htmlFor="name">
            نام و نام خانوادگی
          </label>
          <Textfield value={name} name="name" onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
          <label className="text-sm" htmlFor="email">
            ایمیل
          </label>
          <Textfield value={email} onChange={(e) => setemail(e.target.value)} name="email" />
        </div>
        <div className="flex items-center justify-center gap-x-6">
          <RedioInput
            label="کارفرما"
            onChange={(e) => setrole(e.target.value)}
            id="OWNER"
            value="OWNER"
            name={role}
            checked={role === "OWNER"}
          />
          <RedioInput
            label="فریلنسر"
            onChange={(e) => setrole(e.target.value)}
            id="FREELANCER"
            value="FREELANCER"
            name={role}
            checked={role === "FREELANCER"}
          />
        </div>
        <Button type="submit">{isPending ? <Loading /> : "تایید"}</Button>
      </form>
    </div>
  );
}

export default CompleteProfileForm;
