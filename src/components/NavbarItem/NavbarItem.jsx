import { Link } from "react-router-dom";

const NavbarItem = () => {
  return (
    <div className="flex gap-x-12 items-center">
      <Link to="/">
        <p className="hover:text-gray-500 transition">Home</p>
      </Link>
      <Link to="/">
        <p className="hover:text-gray-500 transition">About</p>
      </Link>
      <Link to="/">
        <p className="hover:text-gray-500 transition">Service</p>
      </Link>
      <Link to="/">
        <p className="hover:text-gray-500 transition">Contact</p>
      </Link>
    </div>
  );
}

export default NavbarItem