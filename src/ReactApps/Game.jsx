import "../Styles/Game.css";
import { ConfettiAnim, AddElement } from "./ConfettiAnim.jsx";
import { useRef, useState, useEffect } from "react";
import {
  Smol_Moji,
  Emoji1_meh,
  Emoji2_huh,
  Emoji3_tehe,
  Emoji4_rah,
  Emoji5_sad,
  Emoji6_flush,
  Emoji7_fun,
  Emoji8_kick,
  Emoji9_didit,
  Emoji10_imit,
  emoji1,
} from "./ImageImporter.js";
export default function Game() {
  const Cycle_List = [
    "Smol_Moji",
    "Smol_Moji",
    "Meh_Moji",
    "Huh_Moji",
    "Tehe_Moji",
    "Rah_Moji",
    "Sad_Moji",
    "Flush_Moji",
    "Fun_Moji",
    "Kick_Moji",
    "Didit_Moji",
    "Imit_Moji",
  ];
  const [DootiesCount, SetDooties] = useState(0);
  const MojiEmg = useRef();
  const tempBox = useRef();
  const infbox = useRef();
  const Middle_part_Refrence = useRef();
  const dootiescyclereal = useRef();
  const dootiescountiesreal = useRef();
  const CongratsDivkillrefforthingy = useRef();

  useEffect(() => {
    if (DootiesCount > 0) {
      tempBox.current.style.transform = "translateY(-500px)";
      infbox.current.style.transform = "translateY(0)";
      infbox.current.style.opacity = 1;
    }

    let cyclei = 0;
    const height_value = 40;
    const transform_value = 5;
    const height_value2 = 45;
    const transform_value2 = 10;

    if (window.innerWidth <= 950) {
      if (DootiesCount >= 1) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Smol_Moji;
        Middle_part_Refrence.current.style.height = "fit-content";
        Middle_part_Refrence.current.style.transform = "0";
      }
      if (DootiesCount >= 10) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji1_meh;
        Middle_part_Refrence.current.style.height = `${height_value + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value + "vh"})`;
      }
      if (DootiesCount >= 200) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji2_huh;
        Middle_part_Refrence.current.style.height = `${height_value + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value + "vh"})`;
      }
      if (DootiesCount >= 300) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji3_tehe;
        Middle_part_Refrence.current.style.height = `${height_value + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value + "vh"})`;
      }
      if (DootiesCount >= 400) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji4_rah;
        Middle_part_Refrence.current.style.height = `${height_value + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value + "vh"})`;
      }
      if (DootiesCount >= 500) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji5_sad;
        Middle_part_Refrence.current.style.height = `${height_value + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value + "vh"})`;
      }
      if (DootiesCount >= 600) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji6_flush;
        Middle_part_Refrence.current.style.height = `${height_value + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value + "vh"})`;
      }
      if (DootiesCount >= 700) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji7_fun;
        Middle_part_Refrence.current.style.height = `${height_value + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value + "vh"})`;
      }
      if (DootiesCount >= 800) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji8_kick;
        Middle_part_Refrence.current.style.height = `${height_value + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value + "vh"})`;
      }
      if (DootiesCount >= 900) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji9_didit;
        Middle_part_Refrence.current.style.height = `${height_value + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value + "vh"})`;
      }
      if (DootiesCount >= 1000) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji10_imit;
        Middle_part_Refrence.current.style.height = `${height_value + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value + "vh"})`;
      }
    } else {
      if (DootiesCount >= 1) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Smol_Moji;
        Middle_part_Refrence.current.style.height = "fit-content";
        Middle_part_Refrence.current.style.transform = "0";
      }
      if (DootiesCount >= 10) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji1_meh;
        Middle_part_Refrence.current.style.height = `${height_value2 + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value2 + "vh"})`;
      }
      if (DootiesCount >= 200) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji2_huh;
        Middle_part_Refrence.current.style.height = `${height_value2 + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value2 + "vh"})`;
      }
      if (DootiesCount >= 300) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji3_tehe;
        Middle_part_Refrence.current.style.height = `${height_value2 + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value2 + "vh"})`;
      }
      if (DootiesCount >= 400) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji4_rah;
        Middle_part_Refrence.current.style.height = `${height_value2 + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value2 + "vh"})`;
      }
      if (DootiesCount >= 500) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji5_sad;
        Middle_part_Refrence.current.style.height = `${height_value2 + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value2 + "vh"})`;
      }
      if (DootiesCount >= 600) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji6_flush;
        Middle_part_Refrence.current.style.height = `${height_value2 + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value2 + "vh"})`;
      }
      if (DootiesCount >= 700) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji7_fun;
        Middle_part_Refrence.current.style.height = `${height_value2 + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value2 + "vh"})`;
      }
      if (DootiesCount >= 800) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji8_kick;
        Middle_part_Refrence.current.style.height = `${height_value2 + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value2 + "vh"})`;
      }
      if (DootiesCount >= 900) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji9_didit;
        Middle_part_Refrence.current.style.height = `${height_value2 + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value2 + "vh"})`;
      }
      if (DootiesCount >= 1000) {
        cyclei = cyclei + 1;
        MojiEmg.current.src = Emoji10_imit;
        Middle_part_Refrence.current.style.height = `${height_value2 + "vh"}`;
        Middle_part_Refrence.current.style.transform = `translateY(${transform_value2 + "vh"})`;
      }
    }

    if (DootiesCount === 1000) {
      CongratsDivkillrefforthingy.current.style.display = "flex";
    }
    dootiescyclereal.current.textContent = `${Cycle_List[cyclei]}`;
    dootiescountiesreal.current.textContent = `${DootiesCount}`;

    if (
      DootiesCount === 10 ||
      DootiesCount === 200 ||
      DootiesCount === 300 ||
      DootiesCount === 400 ||
      DootiesCount === 500 ||
      DootiesCount === 600 ||
      DootiesCount === 700 ||
      DootiesCount === 800 ||
      DootiesCount === 900 ||
      DootiesCount === 1000
    ) {
      AddElement();
    }
  });
  const increment = () => {
    SetDooties(DootiesCount + 1);
  };

  return (
    <>
      <ConfettiAnim />
      <div className="Page">
        <div className="Top-Section">
          <div className="temp" ref={tempBox}>
            <h2>
              CLICK <br /> TEH <br /> MOJIS!!1!
            </h2>
            <h2>CLICK THE MOJI TO START!1!!</h2>
          </div>
          <div className="InfBox" ref={infbox}>
            <h2>
              ur cliekcz : <span ref={dootiescountiesreal}></span>{" "}
            </h2>
            <h2>
              emoji cycle : <span ref={dootiescyclereal}>What</span>
            </h2>
          </div>
        </div>
        <div className="Middle-Part" ref={Middle_part_Refrence}>
          <img
            src={Smol_Moji}
            onClick={increment}
            onTouchStart={() => {
              MojiEmg.current.style.transform = "scale(0.8)";
            }}
            onTouchEnd={() => {
              MojiEmg.current.style.transform = "scale(1)";
            }}
            onPointerDown={() => {
              MojiEmg.current.style.transform = "scale(0.8)";
            }}
            onPointerUp={() => {
              MojiEmg.current.style.transform = "scale(1)";
            }}
            onPointerLeave={() => {
              MojiEmg.current.style.transform = "scale(1)";
            }}
            ref={MojiEmg}
            alt="Loading"
          />
        </div>
      </div>
      <div className="FinishedBox" ref={CongratsDivkillrefforthingy}>
        <div className="FinishedDiv">
          <img src={emoji1}></img>
          <h2>you person have finished the Game!!</h2>
          <a
            onClick={() =>
              (CongratsDivkillrefforthingy.current.style.display = "none")
            }
          >
            Go Back & Continue
          </a>
        </div>
      </div>
    </>
  );
}
