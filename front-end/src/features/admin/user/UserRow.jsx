import { useState } from "react";
import Table from "../../../ui/Table"
import Modal from "../../../ui/Modal";
import ChangeUserStatus from "./ChangeUserStatus";
const options = [
  {
    title: "رد شده",
    _id: 0,
  },
  {
    title: "در انتظار تایید",
    _id: 1,
  },
  {
    title: "تایید شده",
    _id: 2,
  },
];
function UserRow({ user, index }) {
    const { status } = user
      const [open, setOpen] = useState(false);
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span
          className={`badge ${
            user.status === 0
              ? "badge--danger"
              : user.status === 1
              ? "badge--warning"
              : "badge--success"
          }`}
        >
          {options[status].title}
        </span>
      </td>
      <td>
        <Modal title="تغییر وضعیت کاربر" open={open} onClose={() => setOpen(false)}>
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
        <button
          className={user.role === "ADMIN" ? "text-secondary-400" : ""}
          disabled={user.role === "ADMIN"}
          onClick={() => setOpen(true)}
        >
          تغییر وضعیت
        </button>
      </td>
    </Table.Row>
  );
}

export default UserRow
