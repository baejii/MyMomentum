const musicPlay = document.querySelector("#music-play");
const musicName = document.querySelector("#music-name");

const musicArray = [
    "audio/Better Day - penguinmusic.mp3",
    "audio/Calm Background For Video - lvymusic.mp3",
    "audio/Good Night - FASSounds.mp3",
    "audio/Inside You - lemonmusicstudio.mp3",
    "audio/Leva-Eternity - lemonmusicstudio.mp3",
    "audio/Once In Paris - Pumpupthemind.mp3",
    "audio/The Cradle of Your Soul - lemonmusicstudio.mp3",
    "audio/Tokyo Cafe - TVARI.mp3",
    "audio/Whistle Vibes - Top-Flow.mp3",
    "audio/Romantic Dinner - FASSounds.mp3"
];

const musicRandom = musicArray[Math.floor(Math.random() * musicArray.length)];
const myMusic = new Audio();

musicPlay.attributes[1].value = musicRandom;
myMusic.src = musicRandom;
myMusic.autoplay = true;

musicName.innerText = musicRandom.slice(6, -4);