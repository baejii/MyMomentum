const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = date.getHours();
    
    if (ampm > 12) { // 시간(0 ~ 23)
        clock.innerText = `${hours - 12} : ${minutes} PM`;
    } else if (ampm === 12) {
        clock.innerText = `12 : ${minutes} PM`;
    } else if (ampm === 0) {
        clock.innerText = `12 : ${minutes} AM`;
    } else {
        clock.innerText = `${hours} : ${minutes} AM`;
    }
}

getClock(); // getClock 즉시 실행