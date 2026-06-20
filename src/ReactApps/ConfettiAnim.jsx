// Fuck me Sideways this is all npcs imports
import "../Styles/ConfettiAnim.css";
import { shape1, shape2, shape3, shape4, shape5 } from "./ImageImporter.js";
const shapes = [shape1, shape2, shape3, shape4, shape5];
const particles = [];
let isAnimating = false;
// A cool Random Math Randomizer Thingy
const RandonAngle = window.Math.random() * 360;
// This is shit I copied from stackoverflow
function disableScroll() {
  document.addEventListener("touchmove", preventScroll, { passive: false });
  document.addEventListener("wheel", preventScroll, { passive: false });
}
function preventScroll(e) {
  e.preventDefault();
}
// This is the animation loop that got me right round right round (idk the lyrics)
function animate() {
  particles.forEach((p) => {
    p.y += 17;
    p.angle += RandonAngle;
    p.el.style.transform = `translateY(${p.y}px) rotate(${p.angle}deg)`;
  });
  requestAnimationFrame(animate);
}

// Adding Elements tbh this made me go round and round but I actually enjoyed making this part of the game
export function AddElement() {
  disableScroll();

  const TempContainer = document.createDocumentFragment();

  for (let i = 0; i < 60; i++) {
    const x = window.Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight - 900;
    const randomColor = Math.floor(Math.random() * shapes.length);
    const Img = `url("${shapes[randomColor]}")`;
    const NewDiv = document.createElement("div");
    NewDiv.classList.add("Hello");
    NewDiv.dataset.angle = RandonAngle;

    NewDiv.style.left = x + "px";
    NewDiv.style.top = "0px";
    NewDiv.style.backgroundImage = Img;

    // Never knew you needed to remove the dead cells.. Haha get it?
    const particle = {
      el: NewDiv,
      y: y,
      angle: RandonAngle,
    };

    particles.push(particle);
    TempContainer.appendChild(NewDiv);

    setTimeout(() => {
      NewDiv.remove();

      const index = particles.indexOf(particle);
      if (index > -1) {
        particles.splice(index, 1);
      }
    }, 4000);
  }

  document.body.appendChild(TempContainer);
  if (!isAnimating) {
    isAnimating = true;
    animate();
  }
}
// Idk What does this do exactly but the game doesn't function without it so fuck it
export function ConfettiAnim() {
  return null;
}
