function Select({value, option, onChange}) {
  return (
    <select className="text-sm textinput bg-secondary-0 w-auto" value={value} onChange={onChange}>
      {option.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
