const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = date.getHours();
    
    if (ampm >= 12) {
        clock.innerText = `${hours - 12} : ${minutes} PM`;
    } else {
        clock.innerText = Math.abs(hours - 12) + ` : ${minutes} AM`;
    }
}

getClock(); // getClock 즉시 실행