import {optionsArray} from "./options.js"
import { lessons } from "./lessons.js";
import { lessonGenerator } from "./functions_exp.js";

window.onload = () => {
    setTimeout(() => {
        progress.style.display = "none";
        const canvas = document.getElementById("boardCanvas");
        const ctx = canvas.getContext("2d");
        const engine = new Engine(canvas, ctx, {width: 1920, height: 1080, aspect: {x: (1920 / window.innerWidth) * 0.5, y: 9, aspect: ((1920 - window.innerWidth) / 16) / ((1080 - window.innerHeight) / 9)}}, lessonGenerator(lessons), optionsArray, 10, 0);
    }, 2000);
}

async function startFullscreen() {
    const elem = document.documentElement; // Targets the whole page
    try {
        if (elem.requestFullscreen) {
            await elem.requestFullscreen();
        }
    } catch (err) {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
    }
}

async function lockOrientation() {
  try {
    // You must be in fullscreen first
    await screen.orientation.lock('landscape');
    console.log("Orientation locked to landscape");
  } catch (error) {
    console.error("Orientation lock failed: ", error);
  }
}

startBtn.onclick = () => {
    startBtn.style.display = "none";

    startFullscreen();
    lockOrientation();

}