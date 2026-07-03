const files = [
    { name: "Readme.txt", content: "https://www.bilibili.tv/en/video/4790502645433344\ndont put this in the browser if you are a chud" },
    { name: "Notes.txt", content: "Buy milk\nLearn JS" },
    { name: "Secret.txt", content: "👀 hidden file" }
];


function openWindow(id){

document.getElementById(id).style.display="block";

}

function closeWindow(id){

    document.getElementById(id).style.display="none";

}

function closeFileWindow(button) {
    const win = button.closest(".window");
    if (win) {
        win.remove();
    }
}

function toggleStart(){

const menu=document.getElementById("startMenu");

menu.style.display=

menu.style.display==="block"

?

"none"

:

"block";

}

function updateClock(){

const now=new Date();

document.getElementById("clock").innerHTML=

now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

function openWebsite(){

let url=document.getElementById("url").value;

if(!url.startsWith("http"))

url="https://"+url;

document.getElementById("browserFrame").src=url;

}

const notes=document.getElementById("notesArea");

notes.value=localStorage.getItem("notes")||"";

notes.oninput=function(){

localStorage.setItem("notes",notes.value);

}
function updateClock(){

    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });

}

updateClock();

setInterval(updateClock,1000);

dragElement(document.getElementById("files"));

function dragElement(element){

    let x = 0;
    let y = 0;
    let dx = 0;
    let dy = 0;

    const header = document.getElementById(element.id + "header");

    if(header){

        header.onmousedown = mouseDown;

    }else{

        element.onmousedown = mouseDown;

    }

    function mouseDown(e){

        e.preventDefault();

        x = e.clientX;
        y = e.clientY;

        document.onmouseup = stopDrag;
        document.onmousemove = drag;

    }

    function drag(e){

        e.preventDefault();

        dx = x - e.clientX;
        dy = y - e.clientY;

        x = e.clientX;
        y = e.clientY;

        element.style.left = (element.offsetLeft - dx) + "px";
        element.style.top = (element.offsetTop - dy) + "px";

    }

    function stopDrag(){

        document.onmouseup = null;
        document.onmousemove = null;

    }

}
function renderFiles() {
    const container = document.getElementById("fileList");
    container.innerHTML = "";

    files.forEach((file, index) => {
        const item = document.createElement("div");

        item.className = "fileItem";
        item.innerHTML = "📄 " + file.name;

        item.onclick = () => openFile(index);

        container.appendChild(item);
    });
}

renderFiles();

function openFile(index) {
    const file = files[index];

    const win = document.createElement("div");
    win.className = "window";
    win.style.display = "block";
    win.style.top = "100px";
    win.style.left = "200px";

    win.innerHTML = `
        <div class="windowHeader">
            <span>${file.name}</span>
            <div class="windowButtons">
                <button>✕</button>
            </div>
        </div>

        <div class="windowContent">
            <pre>${file.content}</pre>
        </div>
    `;

    document.body.appendChild(win);

    // Add close button handler
    const closeBtn = win.querySelector(".windowButtons button");
    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        win.remove();
    });

    dragElement(win); // reuse your drag system
}







const playlist = [
    {
        title: "Who's Ready for Tomorrow",
        audioSrc: "music/Who's Ready for Tomorrow.mp3",
        coverSrc: "images/Cyberpunk 2077_ Radio, Vol (1). 2 (Original Soundtrack).jpg" // Put your actual image path here
    },
    {
        title: "I Really Want to Stay at Your House",
        audioSrc: "music/I Really Want to Stay at Your House.mp3",
        coverSrc: "images/Cyberpunk_ Edgerunners (Original Series Soundtrack).jpg" // Put your actual image path here
    }
];

let currentSongIndex = 0;
let isPlaying = false;

// Initialize the first song
// Initialize the first song variables safely
let song = new Audio(playlist[currentSongIndex].audioSrc);

// 2. Create a helper function to update the player UI (Text & Image)
function imaegs() {
    const currentSong = playlist[currentSongIndex];
    const songNameEl = document.getElementById("songName");
    const songCoverEl = document.getElementById("songCover");

    // Only update if elements are safely loaded in the DOM
    if (songNameEl && songCoverEl) {
        songNameEl.textContent = currentSong.title;
        songCoverEl.src = currentSong.coverSrc;
    }
}

// Wait for the HTML elements to fully load before initializing the UI values
document.addEventListener("DOMContentLoaded", () => {
    imaegs();
});
imaegs();
function playSong() {
    song.play();
    isPlaying = true;
}

function pauseSong() {
    song.pause();
    isPlaying = false;
}

function skipSong() {
    song.pause();
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    song = new Audio(playlist[currentSongIndex].audioSrc);
    imaegs();
    song.play();
    isPlaying = true;
}
