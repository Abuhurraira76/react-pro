export default function Navbar(){
    return<>
    <nav className="bg-[#262626] text-white p-10 ">
      <div className="container mx-auto flex justify-between items- ">
        <div className="text-lg font-bold mt-6 ">
          SPOTMEDIA
        </div>
        <ul className="flex space-x-2 mt-2 gap-10 text-lg">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">Services</a></li>
          <li><a href="#" className="hover:text-gray-400">Work</a></li>
          <li><a href="#" className="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
    </>
}