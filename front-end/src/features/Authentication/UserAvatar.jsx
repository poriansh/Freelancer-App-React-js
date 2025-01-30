
function UserAvatar({user}) {
  return (
    <div>
      <span className="font-Vazir text-secondary-900 text-sm hidden sm:block">
        {`  سلام `}
        {user?.name}
      </span>
     
    </div>
  );
}

export default UserAvatar
