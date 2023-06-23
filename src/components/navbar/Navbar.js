import React from "react";
function navbar() {
  const shownavbar=()=>{
    const menu=document.querySelector('#navbar');
    if(menu.classList.contains('hidden'))
    menu.classList.remove('hidden')
    else
  menu.classList.add('hidden')
  }
  return (
    <div className="">
    <div className="fixed flex w-screen justify-between pr-8 text-white py-5 h-20">
      <div className="flex ml-10 w-50 h-10 min-w-5">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="logo"
        className=""
      /></div>
      <div className="mt-1 text-2xl flex hidden lg:block ml-10">
          <a className="cursor-pointer mr-5" href="#bann">HOME</a>
        <a className="cursor-pointer mr-5" href="#act">ACTION</a>
        <a className="cursor-pointer mr-5" href="#netflixorig">ORIGINALS</a>
        <a className="cursor-pointer" href="#comedy">COMEDY</a>
        </div>
        <div className="mt-2 mr-10 hidden lg:flex ">
      <select style={{webkitappearance: "none"}} className="cursor-pointer	pl-2 h-8 mr-10 ml-20 text-white border-2 border-white rounded-2xl w-28 bg-transparent hover:bg-gray-800 hover:text-white">
        <option value="">ENGLISH</option>
        <option value="">HINDI</option>
      </select>
      <button className="h-8 cursor-pointer	 text-white font-semibold	 border-2 border-red-900 rounded-2xl w-24 bg-red-600 hover:bg-red-900 hover:text-white">SIGN-IN</button>
      </div>
      <div className="lg:hidden sm:block  ">
        <svg onClick={shownavbar} className=" h-10 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </div>
    </div>
    <div id="navbar" className="hidden mt-20 fixed grid justify-items-end w-screen bg-transparent pt-6 text-2xl text-white pr-8">
        <a href="#bann" className="mb-2 cursor-pointer">HOME</a>
        <a href="#act" className="mb-2 cursor-pointer">ACTION</a>
        <a href="#netflixorig" className="mb-2 cursor-pointer">ORIGINALS</a>
        <a href="#comedy" className="cursor-pointer">COMEDY</a>
      </div>
      
    </div>
  );
  }

export default navbar;
