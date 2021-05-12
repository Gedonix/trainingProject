export default function () {
    const timerdiv = document.getElementById("timerDiv");
    const calcdiv = document.getElementById("calcDiv");
    const timerbtn = document.getElementById("timerShow");
    const calcbtn = document.getElementById("calcShow");

    timerbtn.addEventListener("click", () => {
        calcdiv.classList.add('nonedisplay')
        timerdiv.classList.remove('nonedisplay');
    });

    calcbtn.addEventListener("click", () => {
        timerdiv.classList.add('nonedisplay')
        calcdiv.classList.remove('nonedisplay');
    })
}