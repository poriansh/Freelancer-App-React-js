

function Sidbar({children}) {
  return (
    <div className=" row-span-2 bg-secondary-0 row-start-1 p-4 border-l border-secondary-200">
      <ul className="flex flex-col gap-3">
       {children}
      </ul>
    </div>
  );
}

export default Sidbar;


