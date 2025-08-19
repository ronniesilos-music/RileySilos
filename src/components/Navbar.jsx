import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center space-x-6 py-4 bg-black text-white shadow-md">
      <Link to="/">Home</Link>
      <Link to="/bio">Bio</Link>
      <Link to="/music">Music</Link>
    </nav>
  );
}
