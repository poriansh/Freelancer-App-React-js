function RedioInput({name, id, value, label, onChange, checked}) {
  return (
    <div className="flex items-center gap-x-2">
      <input
        className="cursor-pointer border border-gray-400 w-3 h-3 form-radio text-primary-900 focus:ring-0  focus:ring-offset-0"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label className="text-xs" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default RedioInput;
