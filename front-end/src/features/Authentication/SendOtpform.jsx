/* eslint-disable react/prop-types */
import Textfield from "../../ui/Textfield";
import Button from "../../ui/Button";
import Loading from "../../ui/Loading";

function SendOtpform({register, handelAhtentication, isPending}) {
  return (
    <div className="sm:max-w-96 m-auto bg-secondary-0">
      <form className="space-y-4 pt-10" onSubmit={handelAhtentication}>
        <div>
          <Textfield
            label="شماره موبایل"
            className="lft"
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            register={register}
          />
        </div>
        <Button>{isPending ? <Loading /> : "ارسال شماره موبایل "}</Button>
      </form>
    </div>
  );
}

export default SendOtpform;
