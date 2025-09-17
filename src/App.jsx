import meriise from "./assets/images/meriise.png";
import pikasit from "./assets/images/pikasit.png";
import "./App.css";

function App() {

    return (
        <>
            <div
                data-layer="Android Compact - 8"
                className="AndroidCompact8"
                style={{
                    width: 412,
                    height: 939,
                    position: "relative",
                    background: "#FFFCF0",
                    overflow: "hidden",
                }}
            >
                <img
                    data-layer="MERIISE FOUNDATION logo 2.0 1"
                    className="MeriiseFoundationLogo201"
                    style={{
                        width: 270,
                        height: 122,
                        left: 71,
                        top: 72,
                        position: "absolute",
                    }}
                    src={meriise}
                />
                <div
                    data-layer="WE ARE"
                    className="WeAre"
                    style={{ left: 44, top: 413, position: "absolute" }}
                >
                    <span style="color: '#FFCA02', fontSize: 45, fontFamily: 'Pokemon Solid', fontWeight: '400', wordWrap: 'break-word'">
                        WE{" "}
                    </span>
                    <span style="color: '#FFCA02', fontSize: 45, fontFamily: 'Pokemon Solid', fontWeight: '400', wordWrap: 'break-word'">
                        ARE{" "}
                    </span>
                </div>
                <div
                    data-layer="HIRING"
                    className="Hiring"
                    style={{
                        left: 32,
                        top: 488,
                        position: "absolute",
                        color: "#FFCA02",
                        fontSize: 72,
                        fontFamily: "Pokemon Solid",
                        fontWeight: "400",
                        lineHeight: 108.57,
                        letterSpacing: 2.88,
                        wordWrap: "break-word",
                    }}
                >
                    HIRING
                </div>
                <img
                    data-layer="pika 1"
                    className="Pika1"
                    style={{
                        width: 141,
                        height: 140,
                        left: 257,
                        top: 461,
                        position: "absolute",
                    }}
                    src={pikasit}
                />
                <div
                    data-layer="Trainers be Ready"
                    className="TrainersBeReady"
                    style={{
                        left: 67,
                        top: 341,
                        position: "absolute",
                        color: "#316EB5",
                        fontSize: 32,
                        fontFamily: "Fredoka One",
                        fontWeight: "400",
                        wordWrap: "break-word",
                    }}
                >
                    Trainers be Ready
                </div>
                <div
                    data-layer="A Section-8 company"
                    className="ASection8Company"
                    style={{
                        left: 206,
                        top: 182,
                        position: "absolute",
                        color: "#329BCB",
                        fontSize: 12,
                        fontFamily: "Fredoka",
                        fontWeight: "400",
                        wordWrap: "break-word",
                    }}
                >
                    A Section-8 company
                </div>
                <div
                    data-layer="Rectangle 1"
                    className="Rectangle1"
                    style={{
                        width: 170,
                        height: 55,
                        left: 121,
                        top: 727,
                        position: "absolute",
                        background: "#FFE500",
                        boxShadow: "6px 5px 0px black",
                        borderRadius: 10,
                        outline: "2px black solid",
                        outlineOffset: "-1px",
                    }}
                />
                <div
                    data-layer="Apply"
                    className="Apply"
                    style={{
                        left: 164,
                        top: 731,
                        position: "absolute",
                        color: "#316EB5",
                        fontSize: 32,
                        fontFamily: "Fredoka",
                        fontWeight: "600",
                        wordWrap: "break-word",
                    }}
                >
                    Apply
                </div>
            </div>
        </>
    );
}

export default App;
