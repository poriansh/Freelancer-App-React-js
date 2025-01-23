function SelectOption({label, name, register, required, options}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} className="textinput">
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectOption;
