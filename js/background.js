const body = document.body;

const dayImages = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const sunsetImages = ["4.jpg", "5.jpg", "6.jpg", "7.jpg"];
const nightImages = ["8.jpg", "9.jpg", "10.jpg", "11.jpg"];

const today = new Date();
const hours = today.getHours();

if (hours < 6 || hours >= 20) {
    const nightRandomImage = nightImages[Math.floor(Math.random() * nightImages.length)];
    body.style.backgroundImage = `url("img/${nightRandomImage}")`;
} else if (hours < 20 && hours >= 18) {
    const sunsetRandomImage = sunsetImages[Math.floor(Math.random() * sunsetImages.length)];
    body.style.backgroundImage = `url("img/${sunsetRandomImage}")`;
} else if (hours < 18 && hours >= 6) {
    const dayRandomImage = dayImages[Math.floor(Math.random() * dayImages.length)];
    body.style.backgroundImage = `url("img/${dayRandomImage}")`;
}