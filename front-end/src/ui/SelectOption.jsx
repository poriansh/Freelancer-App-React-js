function SelectOption({label, name, register, required, options}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} className="textinput">
        {options.map((option) => (
          <option key={option.status} value={option.status}>
            {option.lable}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectOption;
