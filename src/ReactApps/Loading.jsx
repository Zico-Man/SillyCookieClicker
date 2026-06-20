import "../Styles/Loading.css";
import { useEffect, useRef } from "react";
import image from "../assets/smol_emoji_icon.png";
import { Link } from "react-router-dom";

export default function Loading() {
  const h2text = useRef([]);

  // observe my elements (refrence to the meme "find my pages")
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    h2text.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // observer I hate this it took me a while to understand what this does and how it works
  // aye no pain no gain

  const addtorefs = (el) => {
    if (el && !h2text.current.includes(el)) {
      h2text.current.push(el);
    }
  };

  function randomRadius() {
    const r = () => Math.floor(Math.random() * 100) + "%"; // Cool math problem that I definatly made myself
    return `${r()} ${r()} ${r()} ${r()} / ${r()} ${r()} ${r()} ${r()}`; // wHAT THE FUCKKKKK IS THISSS
  }

  // I didn't really wanna do some insane shit so I just did this
  // if it works it works then I ain't touching this again (it works)
  const blobdiv = useRef();
  const blobdiv2 = useRef();

  setInterval(() => {
    blobdiv.current.style.borderRadius = randomRadius();
  }, 1500);

  setInterval(() => {
    blobdiv2.current.style.borderRadius = randomRadius();
  }, 1500);

  return (
    <>
      <section className="startingpage">
        <div className="BigTitleBox" ref={addtorefs}>
          This stupid lil' game is brought to you by these ppl
        </div>
        {/* stupid yet I am taking a long time makign this cuz of life */}
        <br />
        <div className="creditsbox" ref={addtorefs}>
          <div className="people">
            <div className="blob" ref={blobdiv}></div>
            <img ref={addtorefs} src="/copper2.png" alt="" />
            <h2>
              CopperIT <br /> <span>Artist</span>
            </h2>
          </div>
          <div className="people">
            <div className="blob2" ref={blobdiv2}></div>
            <img
              ref={addtorefs}
              src="https://cdn.discordapp.com/avatars/939936375883567255/5856b495c694f25c6bc73a29d3a7aa39.webp?size=80"
              alt=""
            />
            <h2>
              Zico <br /> <span>Developer</span>
            </h2>
            {/* I can't get the colors to look decent for these spans ;-; */}
          </div>
        </div>
        {/* time to thee BOTTON!!! */}
        <Link to={"/game"}>
          <div className="buttonguyisuppose">
            <img src={image} alt="" />
          </div>
        </Link>
      </section>
    </>
  );
}
