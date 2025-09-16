import React, { useState } from "react";
import meriise from "../assets/images/meriise.png";
import pikasit from "../assets/images/pikasit.png";

const One = () => {
    const [isApplyClicked, setIsApplyClicked] = useState(false);

    const handleApplyClick = () => {
        setIsApplyClicked(true);
        // Add your application logic here
        console.log("Apply button clicked");
    };

    return (
        <main className="bg-[#fffcf0] min-h-screen w-full flex flex-col items-center font-fredoka px-2 py-4">
            <div className="w-full max-w-[420px] flex flex-col items-center relative bg-[#fffcf0] rounded-lg shadow-lg p-4 min-h-screen">
                <div className="relative w-3/4 max-w-xs h-28 mt-8 mb-4 flex flex-col items-center">
                    <img
                        className="w-full h-24 object-contain"
                        alt="Meriise FOUNDATION"
                        src={meriise}
                    />
                    <div className="mt-2 font-normal text-[#329bcb] text-xs tracking-[0] leading-[normal] text-center font-fredoka">
                        A Section-8 company
                    </div>
                </div>

                <div className="w-full flex flex-col items-center mt-8 mb-4">
                    <div className="relative w-full flex flex-col items-center">
                        <div className="[text-shadow:-3px_8px_0.9px_#0000006e] [-webkit-text-stroke:2px_#316eb5] font-normal text-[#ffca02] text-3xl sm:text-4xl md:text-5xl tracking-[0] leading-tight font-pokemon-solid text-center">
                            WE&nbsp;ARE&nbsp;
                            <span className="block text-4xl sm:text-6xl md:text-7xl tracking-[2.88px] leading-[1.1] whitespace-nowrap font-pokemon-solid mt-2">
                                HIRING
                            </span>
                        </div>
                        <div className="relative w-full flex justify-end mt-2">
                            <img
                                className="w-28 h-28 object-contain"
                                alt="Pikasit"
                                src={pikasit}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-4">
                    <span className="font-normal text-[#316eb5] text-2xl sm:text-3xl tracking-[0] leading-[normal] text-center font-fredoka">
                        Trainers be Ready
                    </span>
                </div>

                <div className="w-full flex justify-center mt-12">
                    <button
                        className={`w-2/3 max-w-xs h-14 bg-[#ffe500] rounded-[10px] border-2 border-solid border-black shadow-[6px_5px_0px_#000000] font-semibold text-[#316eb5] text-2xl sm:text-3xl tracking-[0] leading-[normal] font-fredoka transition-all duration-150 hover:shadow-[4px_3px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[2px_1px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] focus:outline-none focus:ring-2 focus:ring-[#316eb5] focus:ring-offset-2 ${
                            isApplyClicked ? "bg-[#ffcc00]" : ""
                        }`}
                        onClick={handleApplyClick}
                        aria-label="Apply for position"
                        type="button"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </main>
    );
};

export default One;
