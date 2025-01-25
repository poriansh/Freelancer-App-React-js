import UserTable from "../features/admin/user/UserTable";


function Users() {

  return (
    <div className="px-5 w-full mt-5">
      <h1 className="font-Vazir-Black text-secondary-900 mb-5">لیست کاربران </h1>
      <UserTable/>
    </div>
  );
}

export default Users
