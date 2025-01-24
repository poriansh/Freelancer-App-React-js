function ConfrimDelete({resourcename, onClose, onConfrim,lable}) {
  return (
    <div>
      <h2 className="font-bold text-xs">{`ایا از حذف ${lable}  ${resourcename} مطمُن هستید ؟ `}</h2>
      <div className="flex gap-2 items-center  mt-3">
        <button onClick={onConfrim} className="btn btn--primary flex-1">
          تایید
        </button>
        <button onClick={onClose} className="btn btn--danger flex-1">
          لغو
        </button>
      </div>
    </div>
  );
}

export default ConfrimDelete;
