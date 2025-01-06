function Button({children}) {
  return (
    <button  type="submit" className="btn btn--primary">
      {children}
    </button>
  );
}

export default Button;