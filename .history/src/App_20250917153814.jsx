import meriise from "./assets/images/meriise.png";
import pikasit from "./assets/images/pikasit.png";
import "./index.css";

function App() {
    return (
        <div
            data-layer="Android Compact - 8"
            className="AndroidCompact8 w-96 h-[939px] relative bg-amber-50 overflow-hidden"
        >
            <img
                data-layer="MERIISE FOUNDATION logo 2.0 1"
                className="MeriiseFoundationLogo201 w-64 h-32 left-[71px] top-[72px] absolute"
                src="{meriise}"
            />
            <div
                data-layer="WE ARE"
                className="WeAre left-[44px] top-[413px] absolute justify-start"
            >
                <span class="text-yellow-400 text-5xl font-normal font-['Pokemon_Solid']">
                    WE{" "}
                </span>
                <span class="text-yellow-400 text-5xl font-normal font-['Pokemon_Solid']">
                    ARE{" "}
                </span>
            </div>
            <div
                data-layer="HIRING"
                className="Hiring left-[32px] top-[488px] absolute justify-start text-yellow-400 text-7xl font-normal font-['Pokemon_Solid'] leading-[108.57px] tracking-[2.88px]"
            >
                HIRING
            </div>
            <img
                data-layer="pika 1"
                className="Pika1 w-36 h-36 left-[257px] top-[461px] absolute"
                src={pikasit}
            />
            <div
                data-layer="Trainers be Ready"
                className="TrainersBeReady left-[67px] top-[341px] absolute justify-start text-blue-800 text-3xl font-normal font-['Fredoka_One']"
            >
                Trainers be Ready
            </div>
            <div
                data-layer="A Section-8 company"
                className="ASection8Company left-[206px] top-[182px] absolute justify-start text-sky-500 text-xs font-normal font-['Fredoka']"
            >
                A Section-8 company
            </div>
            <div
                data-layer="Rectangle 1"
                className="Rectangle1 w-44 h-14 left-[121px] top-[727px] absolute bg-yellow-400 rounded-[10px] shadow-[6px_5px_0px_0px_rgba(0,0,0,1.00)] outline outline-2 outline-offset-[-1px] outline-black"
            />
            <div
                data-layer="Apply"
                className="Apply left-[164px] top-[731px] absolute justify-start text-blue-800 text-3xl font-semibold font-['Fredoka']"
            >
                Apply
            </div>
        </div>
    );
}

export default App;
