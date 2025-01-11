import UserAvatar from "../features/Authentication/UserAvatar";
import useUser from "../features/Authentication/useUser";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const { data } = useUser()
  console.log(data)
  return <div className="bg-secondary-0 p-5">
    <div className="felx items-center ">
      <HeaderMenu />
      <UserAvatar/>
    </div>
  </div>;
}

export default Header
