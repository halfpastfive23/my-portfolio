export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent h-16 flex items-center font-mono">
      {/* Logo fully left */}
      <h1 className="text-2xl font-mono font-bold text-white ml-4 fixed left-2.5">
        Manojkumar
      </h1>

      {/* Navigation menu container */}
      <div className="max-w-7xl mx-auto flex flex-1 justify-center px-4">
        <ul className="flex space-x-10 text-gray-100 font-medium font-mono">
          <li className="hover:text-indigo-300 cursor-pointer">Home</li>
          <li className="hover:text-indigo-300 cursor-pointer">About</li>
          <li className="hover:text-indigo-300 cursor-pointer">Projects</li>
          <li className="hover:text-indigo-300 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
