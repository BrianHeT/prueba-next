export default function Navbar() {
  return (
    <nav className="w-full bg-transparent fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 hidden md:flex ">FasterUI</div>
        <ul className="hidden md:flex bg-white/60 backdrop-blur-md rounded-lg px-6 py-4 space-x-6 text-gray-700 font-medium shadow">
          <li>
            <a href="#home" className="hover:text-indigo-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-indigo-500">
              About
            </a>
          </li>
          <li>
            <a href="#how" className="hover:text-indigo-500">
              How it works
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-indigo-500">
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

//Liquid Glass effect
