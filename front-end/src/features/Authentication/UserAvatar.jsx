
function UserAvatar({user}) {
  return (
    <div className="flex gap-3 items-center">
        <span className="font-Vazir text-sm">{`  سلام `}{user?.name}</span>
        <img className="w-7 h-7" src="../../../public/img/user.jpg" alt="user-avatar" />
    </div>
  )
}

export default UserAvatar
