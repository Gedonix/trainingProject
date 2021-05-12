import { getSound } from "./sound.js";

export default function Timer() {
    const stopbtn = document.getElementById("stoptT");
    const timerForm = document.getElementById("timer");
    const process = document.getElementById("process");
    const sound = getSound();

    timerForm.addEventListener("submit", event => {
        event.preventDefault();
        const clean = () => {
            for (let key of event.target.elements) {
                key.value = 0;
            }
        }

        let { hr, mnt, scn } = event.target.elements;
        hr = +hr.value, mnt = +mnt.value, scn = +scn.value;
        let tCount = 3600 * hr + 60 * mnt + scn;

        process.innerText = `${tCount}`;

        let intervalId = setInterval(() => process.innerText = `${--tCount}`, 1000);
        let timeoutId = setTimeout(() => {
            clearInterval(intervalId);
            sound.play();
            clean();
        }, tCount * 1000);

        stopbtn.addEventListener('click', () => {
            clearInterval(intervalId)
            clearTimeout(timeoutId);
            tCount = 0;
            process.innerText = `${tCount}`;
            clean();
        })
    });
}
