const Button = (props) => {
  const {children, style, onClick = () => {}, type = "button"} = props
  return (
    <div>
      <button onClick={onClick} className={`"h-10 ${style} px-2 bg-[var(--primary)] font-semibold hover:bg-green-300 transition cursor-pointer"`}>{children}</button>
    </div>
  );
}

export default Button