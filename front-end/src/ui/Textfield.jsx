function Textfield({register, id, name, type = "text", ValidationSchema, label, required, errors}) {
  return (
    <div>
      <label className="block text-secondary-900" htmlFor={id}>
        {label}
        {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, ValidationSchema)}
        id={id}
        className="textinput"
        type={type}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">{errors[name]?.message}</span>
      )}
    </div>
  );
}

export default Textfield;
