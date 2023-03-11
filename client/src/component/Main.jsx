import React from "react";
import { Link } from "react-router-dom";
import homebg from "../assets/home-bg.jpg";
import homecart from "../assets/homecart.png";
function Main() {
  return (
    <div>
      <div className="flex flex-row items-center p-20 bg-[#000000] h=[40wh]">
        <div>
          <img className="w-[70vw]" src={homecart} />
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-between">
            <h1 className="text-white text-3xl font-semibold mt-4">
              Revolutionize your supply chain with the power of
            </h1>
            <h1 className="text-[#A57B44] text-5xl font-bold mt-4">
              Blockchain
            </h1>
            <br />
            <Link to="/roles">
              <button className="text-[#f5f5f5] rounded-md border-solid border-4 border-[#f6f6f6] drop-shadow-md hover:bg-[#A57B44] bg-[#A57B44] p-2 mt-4">
                Connect Wallet
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
