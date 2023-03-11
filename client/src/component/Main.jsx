import React from 'react'
import homebg from '../assets/home-bg.jpg';
import homecart from '../assets/homecart.png';
function Main() {
  return (

    <div>
          <div
        className="flex flex-row items-center p-20 bg-[#000000]">
        <div>
          <img className="w-[70vw]" src={homecart}/>
        </div>
        <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-between">
              <h1 className="text-white text-3xl font-semibold mt-4">
              Revolutionize your supply chain with the power of
              </h1>
              <h1 className="text-[#6bcadb] text-5xl font-bold mt-4">
                Blockchain
              </h1>
              <br />
              <button
                className="text-black rounded-lg border-solid border-4 border-[#6bcadb] drop-shadow-md hover:bg-[#6bcadb] bg-[#F5F5F5] p-2 mt-4">
                Connect Wallet
              </button>
            </div>  
        </div>
      </div>
    </div>
  )
}

export default Main