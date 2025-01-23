import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import useUsers from "../useUsers";
import UserRow from "./UserRow";

function UserTable() {
    const { users, isLoading } = useUsers()
     if (isLoading) return <Loading />;
     if (!users.length) return <Empty resorcename="کاربر" />;
  return (
    <Table>
      <Table.Header>
        <th>شماره</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <UserRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UserTable
