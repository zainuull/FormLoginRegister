const Navbar = () => {
  return (
    <div className="w-full h-[50px] bg-gray-200 p-10 flex justify-between items-center">
      <h1>Hello World</h1>
      <div className="flex justify-evenly items-center w-1/2">
        <p>Beranda</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button className="w-[100px] h-[50px] rounded-md bg-blue-200">Send</button>
    </div>
  );
}

export default Navbar;