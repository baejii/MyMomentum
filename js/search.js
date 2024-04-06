const searchForm = document.querySelector("#search");
const input  = document.querySelector("#search input");

function searchButton (event) {
    event.preventDefault();
    const searchInput = input.value;
    window.location.href = `https://www.google.co.kr/search?q=${searchInput}`;
}

searchForm.addEventListener("submit", searchButton);
