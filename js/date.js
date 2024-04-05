const date = document.querySelector("#date");

function getDate() {
    const dates = new Date();
    const week = new Array("Sun", "Mon", "Fri", "Wed", "Thu", "Fri", "Sat");

    const years = String(dates.getFullYear());
    const months = String(dates.getMonth()+1).padStart(2, "0"); // getMonth()는 0~11 범위의 값으로 리턴하기 때문에 1을 더해줘야 함
    const days = String(dates.getDay()).padStart(2, "0");
    const dayOfWeek = week[dates.getDay()];

    date.innerText = `${years} ${months} ${days} ${dayOfWeek}`;
}

getDate(); 