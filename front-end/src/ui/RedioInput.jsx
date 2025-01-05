function RedioInput({name, type, value, id, label, register, checked, ValidationSchema,errors}) {
  return (
    <div>
      <div className="flex items-center gap-x-2">
        <input
          className="cursor-pointer border border-gray-400 w-3 h-3 form-radio text-primary-900 focus:ring-0  focus:ring-offset-0"
          type={type}
          name={name}
          id={id}
          {...register(name, ValidationSchema)}
          checked={checked}
          value={value}
        />
        <label className="text-xs" htmlFor={id}>
          {label}
        </label>
      </div>
      <div>
        <p>
          {errors && errors[name] && (
            <span className="text-error block text-sm mt-2">{errors[name]?.message}</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default RedioInput;
