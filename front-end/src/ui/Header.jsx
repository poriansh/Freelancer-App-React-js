import UserAvatar from "../features/Authentication/UserAvatar";
import useUser from "../features/Authentication/useUser";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const { isLoading, user } = useUser()
  console.log(user)
  return <div className="bg-secondary-0 p-5">
    <div className={`flex justify-end items-center gap-5 ${isLoading ? "blur-sm" : ""}`}>
      <UserAvatar user={user}/>
      <HeaderMenu />
    </div>
  </div>;
}

export default Header
