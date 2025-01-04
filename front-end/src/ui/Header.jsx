import useUser from "../features/Authentication/useUser";

function Header() {
  const { data } = useUser()
  console.log(data)
  return <div className="bg-white p-5">header</div>;
}

export default Header
