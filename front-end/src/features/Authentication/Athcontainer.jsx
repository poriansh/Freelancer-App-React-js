import {useState} from "react";
import CheckOtpform from "./CheckOtpform";
import SendOtpform from "./SendOtpform";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/AthService";
import toast from "react-hot-toast";
function Athcontainer() {
  const init_Time = 90;
  const [phoneNumber, setphoneNumber] = useState("");
  const [step, setstep] = useState(1);
  const [time, settime] = useState(init_Time);
  const {
    isPending,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });
  const handelAhtentication = async (e) => {
    e.preventDefault();
    try {
      if (!phoneNumber) throw new Error("لطفاً شماره موبایل خود را وارد کنید.");
      const {message} = await mutateAsync({phoneNumber});
      setstep(2);
      settime(90)
      toast.success(message);
    } catch (error) {
      if (!phoneNumber) {
        toast.error(error.message);
      } else {
        toast.error(error?.response?.data?.message);
      }
    }
  };
  return (
    <>
      {step === 1 ? (
        <SendOtpform
          handelAhtentication={handelAhtentication}
          phoneNumber={phoneNumber}
          setphoneNumber={setphoneNumber}
          isPending={isPending}
        />
      ) : step === 2 ? (
        <CheckOtpform
          settime={settime}
          time={time}
          handelAhtentication={handelAhtentication}
          otpResponse={otpResponse}
          setstep={setstep}
          phoneNumber={phoneNumber}
        />
      ) : null}
    </>
  );
}

export default Athcontainer;
