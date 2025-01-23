import {useEffect, useState} from "react";
import CheckOtpform from "./CheckOtpform";
import SendOtpform from "./SendOtpform";
import {useMutation} from "@tanstack/react-query";
import {getOtp} from "../../services/AthService";
import toast from "react-hot-toast";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import useUser from "./useUser";
function Athcontainer() {
  const navigate = useNavigate();
  const init_Time = 90;
  const [step, setstep] = useState(1);
  const [time, settime] = useState(init_Time);
  const {register, handleSubmit, getValues} = useForm();
  const {user} = useUser();
  useEffect(() => {
    if (user && user.role === "ADMIN") navigate("/admin", {replace: true});
    if (user && user.role === "OWNER") navigate("/owner", {replace: true});
    if (user && user.role === "FREELANCER") navigate("/freelancer", {replace: true});
  }, [user, navigate]);
  const {
    isPending,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });
  const handelAhtentication = async (data) => {
    try {
      if (!data) throw new Error("لطفاً شماره موبایل خود را وارد کنید.");
      const {message} = await mutateAsync(data);
      setstep(2);
      settime(90);
      toast.success(message);
    } catch (error) {
      if (!data) {
        toast.error(error.message);
      } else {
        toast.error(error?.response?.data?.message);
      }
    }
  };
  return (
    <div>
      {step === 1 ? (
        <SendOtpform
          handelAhtentication={handleSubmit(handelAhtentication)}
          register={register}
          isPending={isPending}
        />
      ) : step === 2 ? (
        <CheckOtpform
          settime={settime}
          time={time}
          handelAhtentication={handleSubmit(handelAhtentication)}
          otpResponse={otpResponse}
          setstep={setstep}
          phoneNumber={getValues("phoneNumber")}
        />
      ) : null}
    </div>
  );
}

export default Athcontainer;
