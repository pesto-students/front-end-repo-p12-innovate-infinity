import React from "react";
import travellerImage from "/traveller-1@2x.png"
import { NavigationBar } from "../components/NavigationBar";
const Home = () => {
  return (
    <div>
      <NavigationBar />
      <div className="absolute top-[-198.2px] left-[-558.7px] w-[2556.9px] h-[1354.1px]">
        <div className="absolute top-[337.9px] left-[758.2px] w-[1685.5px] h-[1016.2px] text-[27px] text-salmon font-poppins">
          <div className="absolute top-[148.9px] left-[0px] w-[835.3px] h-[200.1px]">
            <b className="absolute top-[0px] left-[0px] uppercase inline-block w-[545px] h-[20px]">
              Best Destinations around the world
            </b>
            <b className="absolute top-[70px] left-[0px] text-92xl-7 tracking-[-0.04em] leading-[118px] inline-block font-volkhov text-st w-[725px] h-[166px]">
              <p className="m-0">Travel, enjoy</p>
              <p className="m-0">and live a new</p>
              <p className="m-0">and full life</p>
            </b>
          </div>

        </div>
      </div>
      <img
        className="absolute top-[140px] left-[752px] w-[1018px] h-[1016px] object-cover "
        alt=""
        src={travellerImage}
      />
      <div className="absolute top-[775px] left-[182px] w-[711px] h-[117px] text-center text-13xl text-white">
          <button className="absolute top-[0px] left-[0px]  text-white text-[30px] rounded-sm-3 text-center bg-yellow shadow-[0px_26.6px_46.55px_rgba(241,_165,_1,_0.15)] w-[209px] h-[58px]">
            Create
          </button>
          <button className="absolute top-[72px] left-[581px] rounded-sm-3 text-5xl  bg-indianred  w-[130px] h-[45px] text-white">
            Search
          </button>
          <input
            id="input"
            type="text"
            className="absolute top-[-2px] left-[250px] bg-white w-[460px] h-[56px] px-[10px] border border-gray-400 rounded-[7px] text-[17px] font-noto-sans "
            placeholder="Search your next travel location"
            // value={inputValue}
            // onChange={}
          />
      </div>
    </div>
  );
};

export default Home;
