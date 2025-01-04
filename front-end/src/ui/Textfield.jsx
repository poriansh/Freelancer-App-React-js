function Textfield({value, onChange, id}) {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        id={id}
        className="textinput"
        type="text"
        autoComplete="off"
      />
    </>
  );
}

export default Textfield;
