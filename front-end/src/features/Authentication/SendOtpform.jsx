/* eslint-disable react/prop-types */
import Textfield from "../../ui/Textfield";
import Button from "../../ui/Button";
import Loading from "../../ui/Loading";

function SendOtpform({ phoneNumber, setphoneNumber, handelAhtentication, isPending}) {
  return (
    <div className="sm:max-w-96 m-auto mt-20">
      <form className="space-y-4" onSubmit={handelAhtentication}>
        <div>
          <label htmlFor="phonNumber" className="mb-4 text-center block font-Vazir-Bold">
            شماره موبایل
          </label>
          <Textfield
            className="lft"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
            id={"phoneNumber"}
          />
        </div>
        <Button >
          {isPending ? <Loading /> : "ارسال شماره موبایل "}
        </Button>
      </form>
    </div>
  );
}

export default SendOtpform;
