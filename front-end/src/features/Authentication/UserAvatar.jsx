
function UserAvatar({user}) {
  return (
    <div className="flex gap-3 items-center">
      <span className="font-Vazir text-secondary-900 text-sm">
        {`  سلام `}
        {user?.name}
      </span>
      <div className="w-7 h-7 overflow-hidden rounded-full">
        <img className="w-7 h-7" src="../../../public/img/user.jpg" alt="user-avatar" />
      </div>
    </div>
  );
}

export default UserAvatar
