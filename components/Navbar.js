export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">FasterUI</div>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#how" className="hover:text-blue-500">
              How it works
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-500">
              Services
            </a>
          </li>
        </ul>
        <div className="hidden md:flex space-x-4">
          <button className="text-gray-700 hover:text-indigo-500">Sign In</button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
