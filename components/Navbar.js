export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-mono  font-bold text-indigo-600">Manojkumar</h1>
        <ul className="flex space-x-6 text-gray-600 font-medium">
          <li className="hover:text-indigo-600 font-mono cursor-pointer">Home</li>
          <li className="hover:text-indigo-600 font-mono cursor-pointer">About</li>
          <li className="hover:text-indigo-600 font-mono cursor-pointer">Projects</li>
          <li className="hover:text-indigo-600 font-mono cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
