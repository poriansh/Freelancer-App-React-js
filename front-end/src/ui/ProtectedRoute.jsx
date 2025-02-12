import { useNavigate } from "react-router-dom";

import useAuthorize from "../features/Authentication/useAuthorize";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Loading from "./Loading";

function ProtectedRoute({children}) {
  const navigate = useNavigate();

  // 1. load the authenticated user
  const {isAuthenticated, isLoading, isAuthorized, isVerified} = useAuthorize();

  // 2. check if is Authorized or not, check is is Authenticagted or not
  useEffect(() => {
      if (!isAuthenticated && !isLoading) {
          
         return navigate("/Login");

        };
    if (!isVerified && !isLoading) {
      toast("پروفایل شما در انتظار تایید است ");
      navigate("/verify");
    }
      if (!isAuthorized && !isLoading) {
          navigate("/not-access", { replace: true });
          toast.error("شما به این قسمت دسترسی ندارید");
    };
  }, [isAuthenticated, isAuthorized, isLoading, navigate, isVerified]);

  // 3. while loading => show a loading
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );

  // 4.  if user isAuthenticated and isAuthrozexd => rendere the app
  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute
