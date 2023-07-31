

const IconSign = (props) => {
  const {name, icon} = props
  return (
    <div className="w-[90px] h-[35px] border border-black rounded-lg p-2 flex items-center gap-x-2">
      {icon}
      <p className="font-semibold text-xs">{name}</p>
    </div>
  );
}

export default IconSign