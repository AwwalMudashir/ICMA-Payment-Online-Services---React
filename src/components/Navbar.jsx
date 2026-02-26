function Navbar() {
  return ( 
    <div className=" fixed top-0 z-0 w-full flex items-center justify-between p-4 px-18 backdrop-opacity-100 ">
      <img src="src/assets/StateLogo.png" alt="State Logo" className="w-38"/>

      <a href="https://selfservice.deltairs.com/" className="bg-green-700 rounded-lg py-2 px-4 text-white font-medium text-lg">
        Self-Service
      </a>
    </div>
   );
}

export default Navbar;