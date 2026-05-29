import {optionsArray} from "./options.js"
import { lessons } from "./lessons.js";
import { lessonGenerator } from "./functions_exp.js";

window.onload = () => {
    const percentageEl = document.getElementById("percentage");
    percentageEl.style.opacity = 1;
    percentageEl.style.top = "1%";
    setTimeout(() => {
        const canvas = document.getElementById("boardCanvas");
        const ctx = canvas.getContext("2d");
        const engine = new Engine(canvas, ctx, {width: 1920, height: 1080, aspect: {x: (1920 / window.innerWidth) * 0.5, y: 9, aspect: ((1920 - window.innerWidth) / 16) / ((1080 - window.innerHeight) / 9)}}, lessonGenerator(lessons), optionsArray, 10, 0);
    }, 2000);
}

