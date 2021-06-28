import React from 'react';
function Header() {
  return (
    <header className="py-4 header fixed w-full flex align-center bg-gray-300">
      <div class="container flex justify-between items-center px-4">
        <a href="" className="font-blod text-2xl">
          <i class="fab fa-shopify"></i> Logo
        </a>
        <div className="">
          <div class=" bg-gray-200">
            <div class=" flex justify-center items-center">
              <div class="relative">
                <div class="absolute top-2 left-3">
                  <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                </div>
                <input
                  type="text"
                  class=" w-96 py-2 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                  placeholder="Search anything..."
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <p>Ravindra Singh</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
