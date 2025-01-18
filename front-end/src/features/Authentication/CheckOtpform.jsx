import {useEffect, useState} from "react";
import OTPInput from "react-otp-input";
import Button from "../../ui/Button";
import {useMutation} from "@tanstack/react-query";
import {checkOtp} from "../../services/AthService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import {useNavigate} from "react-router-dom";
import {PencilSquareIcon} from "@heroicons/react/16/solid";

function CheckOtpform({phoneNumber, setstep, otpResponse, handelAhtentication, time, settime}) {
  const [otp, setotp] = useState();
  const navigate = useNavigate();
  const {isPending, mutateAsync} = useMutation({
    mutationFn: checkOtp,
  });
  const handelcheckOtp = async (e) => {
    e.preventDefault();
    try {
      if (!otp) throw new Error("کد ارسال شده را وارد کنید ");
      const {message, user} = await mutateAsync({phoneNumber, otp});
      toast.success(message);
      if (!user.isActive) return navigate("/CompleteProfile");
      if (user.status !== 2) return navigate("/");
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      if (!otp) {
        toast.error(error.message);
      } else {
        toast.error(error?.response?.data?.message);
      }
    }
  };
  useEffect(() => {
    const timer = time > 0 && setInterval(() => settime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);
  return (
    <div className="sm:max-w-96 m-auto mt-20">
      <form className="space-y-4" onSubmit={handelcheckOtp}>
        <h1 className="text-center mb-4 font-Vazir-Bold">کد تایید را وارد کنید </h1>
        <OTPInput
          value={otp}
          onChange={setotp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2rem",
            height: "2rem",
            color: "#1f2937",
            borderRadius: "0.5rem",
            border: "1px solid #9ca3af",
          }}
        />
        <div className="flex justify-center gap-2 items-center">
          {otpResponse && <p className="text-sm text-gray-700">{otpResponse?.message}</p>}
          <PencilSquareIcon
            onClick={() => setstep((s) => s - 1)}
            className="w-5 h-5 text-blue-500 cursor-pointer"
          />
        </div>
        <div className="text-center text-xs text-gray-700 mt-10">
          {time > 0 ? (
            <p>{time} ثانیه تا زمان ارسال مجدد کد </p>
          ) : (
            <button
              onClick={handelAhtentication}
              className="border-gray-400/50 border cursor-pointer p-2 rounded-lg"
            >
              ارسال مجدد کد
            </button>
          )}
        </div>
        <Button>{isPending ? <Loading /> : "ارسال کد تایید"}</Button>
      </form>
    </div>
  );
}

export default CheckOtpform;
