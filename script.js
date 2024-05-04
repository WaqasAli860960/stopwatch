let timer;
let time = 0;

function updateTime() {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const displayTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.querySelector('.display').textContent = displayTime;
}

document.querySelector('.start').addEventListener('click', () => {
    timer = setInterval(() => {
        time++;
        updateTime();
    }, 1000);
});

document.querySelector('.stop').addEventListener('click', () => {
    clearInterval(timer);
});

document.querySelector('.reset').addEventListener('click', () => {
    clearInterval(timer);
    time = 0;
    updateTime();
});