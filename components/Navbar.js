export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-[rgba(0,1,1,0.98)] backdrop-blur-md border-b bg-[rgb(0,0,0)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-mono font-bold text-[#f6f6f6]">Manojkumar</h1>
        <ul className="flex space-x-6 text-gray-100 font-medium">
          <li className="hover:text-indigo-300 font-mono cursor-pointer">Home</li>
          <li className="hover:text-indigo-300 font-mono cursor-pointer">About</li>
          <li className="hover:text-indigo-300 font-mono cursor-pointer">Projects</li>
          <li className="hover:text-indigo-300 font-mono cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
