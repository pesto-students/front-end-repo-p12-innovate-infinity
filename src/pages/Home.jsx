import React from "react";
import travellerImage from "/traveller-1@2x.png"
const Home = () => {
  const onButtonContainerClick = () => {

  }
  const onNavItemTextClick = () => {

  }
  return (
    <div className="w-full relative bg-white h-[1156px] overflow-hidden text-left text-3xl-6 text-st1 font-abhaya-libre-medium">
      <div className="absolute top-[-198.2px] left-[-558.7px] w-[2556.9px] h-[1354.1px]">
        <div className="absolute top-[260.7px] left-[750.7px] w-[1432.1px] h-[58.5px]">
          <button
            className="absolute top-[0px] left-[1296px] w-[136px] h-[53px] cursor-pointer bg-white text-3xl-6 box-border rounded-[7px] border-[1px] border-solid border-st1"
            onClick={onButtonContainerClick}
          >
            Sign Up
          </button>
          <button
            className="absolute top-[0px] left-[1100px] w-[136px] h-[53px] cursor-pointer bg-white text-3xl-6"
            onClick={onNavItemTextClick}
          >
            Login
          </button>
          <div className="absolute top-[5.5px] left-[0px] w-[184px] h-[54px]">
            <div className="absolute top-[42px] left-[90px] rounded-6xs bg-papayawhip w-[84px] h-3" />
            <div className="absolute top-[0px] left-[163px] rounded-6xs bg-papayawhip w-5 h-3" />
            <div className="absolute top-[41px] left-[0px] rounded-6xs bg-papayawhip w-5 h-3" />
          </div>
        </div>
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
      <b className="absolute top-[57px] left-[181px] leading-[10px] flex font-volkhov text-st items-end w-[270px] h-[55px] text-21xl">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">WanderSolo</p>
          <p className="m-0 text-92xl-7">&nbsp;</p>
        </span>
      </b>
      
    </div>
  );
};

export default Home;
