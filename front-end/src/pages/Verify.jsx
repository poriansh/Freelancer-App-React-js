import { useNavigate } from "react-router-dom";
import useUser from "../features/Authentication/useUser";

function Verify() {
    const navigate = useNavigate()
    const { user } = useUser()
    const handeluser = () => {
        if (user && user.role === "ADMIN") navigate("/admin", {replace: true});
        if (user && user.role === "OWNER") navigate("/owner", {replace: true});
        if (user && user.role === "FREELANCER") navigate("/freelancer", {replace: true});
    }  
  return (
    <div className="text-center min-h-screen pt-20 bg-secondary-0">
      <h1 className="text-6xl font-bold text-pramery-900 mb-4">404</h1>
      <p className="text-lg text-pramery-900 mb-6 p-5">
        پروفایل شما در انتظار تایید است لطفا صبور باشید پس از تایید از طریق لینک زیر میتوانید وارد
        پنل خود شوید
      </p>
      <button
        className="border border-pramery-900 text-pramery-800 p-3 rounded-md"
        onClick={handeluser}
      >
        ورود به پنل
      </button>
    </div>
  );
}

export default Verify;
