const files = [
    {
        name: "Readme.txt",
        content: "https://www.bilibili.tv/en/video/4790502645433344\ndont put this in the browser if you are a chud"
    },
    { name: "Notes.txt", content: "Buy milk\nLearn JS" },
    { name: "Secret.txt", content: "👀 hidden file" }
];

const playlist = [
    {
        title: "Who's Ready for Tomorrow",
        audioSrc: "music/Who's Ready for Tomorrow.mp3",
        coverSrc: "images/Cyberpunk 2077_ Radio, Vol (1). 2 (Original Soundtrack).jpg"
    },
    {
        title: "I Really Want to Stay at Your House",
        audioSrc: "music/I Really Want to Stay at Your House.mp3",
        coverSrc: "images/Cyberpunk_ Edgerunners (Original Series Soundtrack).jpg"
    }
];

const bootLines = [
    { text: "CRITICAL: Initializing forced deck override...", delayAfter: 300 },
    { text: " [OVERRIDDEN]", type: "status-partial", delayAfter: 200 },
    { text: "\nBreaching Network Perimeter ICE...", delayAfter: 400 },
    { text: " [BREACHED]", type: "status-corrupted", delayAfter: 500 },
    { text: "\nInjecting local daemon exploit...", delayAfter: 300 },
    { text: "\nRED ALERT: Synaptic back-burn protocol active.", type: "status-warning", delayAfter: 400 },
    { text: "\nPurging system tracker nodes...", delayAfter: 250 },
    { text: " [PURGED]", type: "status-partial", delayAfter: 300 },
    { text: "\nForcing memory core allocation...", delayAfter: 500 },
    { text: "\nTERMINAL ERROR: Sector 0x9-RED corrupt. Hostile trace imminent.", type: "status-error", delayAfter: 600 },
    { text: "\nDeploying digital counter-measures...", delayAfter: 300 },
    { text: " [DEPLOYED]", type: "status-warning", delayAfter: 400 },
    { text: "\nBypasses complete. Welcome to the underground...", delayAfter: 1000 }
];

function initApp() {
    const startMenu = document.getElementById("startMenu");
    const clock = document.getElementById("clock");
    const notesArea = document.getElementById("notesArea");
    const urlInput = document.getElementById("url");
    const browserFrame = document.getElementById("browserFrame");
    const fileList = document.getElementById("fileList");
    const songNameEl = document.getElementById("songName");
    const songCoverEl = document.getElementById("songCover");
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");
    const skipButton = document.getElementById("skipButton");
    const terminalLog = document.getElementById("terminalLog");

    let currentSongIndex = 0;
    let song = new Audio(playlist[currentSongIndex].audioSrc);
    let lineIndex = 0;

    function openWindow(id) {
        const windowEl = document.getElementById(id);
        if (windowEl) {
            windowEl.style.display = "block";
        }
        closeStartMenu();
    }

    function closeWindow(id) {
        const windowEl = document.getElementById(id);
        if (windowEl) {
            windowEl.style.display = "none";
        }
    }

    function toggleStartMenu() {
        if (!startMenu) return;
        startMenu.style.display = startMenu.style.display === "block" ? "none" : "block";
    }

    function closeStartMenu() {
        if (startMenu) {
            startMenu.style.display = "none";
        }
    }

    function updateClock() {
        if (!clock) return;
        clock.textContent = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    function setupBrowser() {
        const openWebsiteButton = document.getElementById("openWebsiteButton");

        if (openWebsiteButton) {
            openWebsiteButton.addEventListener("click", () => {
                let url = urlInput?.value?.trim() || "";
                if (!url.startsWith("http")) {
                    url = "https://" + url;
                }
                if (browserFrame) {
                    browserFrame.src = url;
                }
            });
        }
    }

    function setupNotes() {
        if (!notesArea) return;
        notesArea.value = localStorage.getItem("notes") || "";
        notesArea.addEventListener("input", () => {
            localStorage.setItem("notes", notesArea.value);
        });
    }

    function renderFiles() {
        if (!fileList) return;
        fileList.innerHTML = "";

        files.forEach((file, index) => {
            const item = document.createElement("div");
            item.className = "fileItem";
            item.textContent = `📄 ${file.name}`;
            item.addEventListener("click", () => openFile(index));
            fileList.appendChild(item);
        });
    }

    function openFile(index) {
        const file = files[index];
        if (!file) return;

        const win = document.createElement("div");
        win.className = "window";
        win.style.display = "block";
        win.style.top = "100px";
        win.style.left = "200px";

        win.innerHTML = `
            <div class="windowHeader">
                <span>${file.name}</span>
                <div class="windowButtons">
                    <button type="button" data-close-window="file">✕</button>
                </div>
            </div>
            <div class="windowContent">
                <pre>${file.content}</pre>
            </div>
        `;

        document.body.appendChild(win);
        enableDrag(win);

        const closeButton = win.querySelector(".windowButtons button");
        if (closeButton) {
            closeButton.addEventListener("click", () => win.remove());
        }
    }

    function enableDrag(element) {
        const handle = element.querySelector(".windowHeader") || element;
        let x = 0;
        let y = 0;
        let dx = 0;
        let dy = 0;

        handle.addEventListener("mousedown", (event) => {
            if (event.target.closest("button")) return;

            event.preventDefault();
            x = event.clientX;
            y = event.clientY;

            document.addEventListener("mousemove", drag);
            document.addEventListener("mouseup", stopDrag);
        });

        function drag(event) {
            event.preventDefault();
            dx = x - event.clientX;
            dy = y - event.clientY;
            x = event.clientX;
            y = event.clientY;

            element.style.left = `${element.offsetLeft - dx}px`;
            element.style.top = `${element.offsetTop - dy}px`;
        }

        function stopDrag() {
            document.removeEventListener("mousemove", drag);
            document.removeEventListener("mouseup", stopDrag);
        }
    }

    function updatePlayerUI() {
        const currentSong = playlist[currentSongIndex];
        if (songNameEl) {
            songNameEl.textContent = currentSong.title;
        }
        if (songCoverEl) {
            songCoverEl.src = currentSong.coverSrc;
        }
    }

    function playSong() {
        song.play().catch(() => {});
    }

    function pauseSong() {
        song.pause();
    }

    function skipSong() {
        song.pause();
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        song = new Audio(playlist[currentSongIndex].audioSrc);
        updatePlayerUI();
        song.play().catch(() => {});
    }

    function initMusicPlayer() {
        updatePlayerUI();

        playButton?.addEventListener("click", playSong);
        pauseButton?.addEventListener("click", pauseSong);
        skipButton?.addEventListener("click", skipSong);
    }

    function typeBootSequence() {
        if (!terminalLog) return;

        if (lineIndex < bootLines.length) {
            const line = bootLines[lineIndex];
            let charIndex = 0;
            const element = document.createElement(line.type ? "span" : "p");

            if (line.type) {
                element.className = line.type;
                element.style.display = "inline";
            }

            if (!line.type && lineIndex > 0) {
                element.style.marginTop = "8px";
            }

            terminalLog.appendChild(element);

            function typeChar() {
                if (charIndex < line.text.length) {
                    if (line.text[charIndex] === "\n") {
                        element.innerHTML += "<br>";
                    } else {
                        element.innerHTML += line.text[charIndex];
                    }
                    charIndex += 1;
                    setTimeout(typeChar, 20 + Math.random() * 30);
                } else {
                    lineIndex += 1;
                    setTimeout(typeBootSequence, line.delayAfter);
                }
            }

            typeChar();
        } else {
            setTimeout(() => {
                const bootScreen = document.getElementById("bootScreen");
                if (bootScreen) {
                    bootScreen.style.transition = "opacity 0.6s cubic-bezier(0.1, 0.8, 0.3, 1)";
                    bootScreen.style.opacity = "0";
                    setTimeout(() => {
                        bootScreen.style.display = "none";
                    }, 600);
                }
            }, 1200);
        }
    }

    document.addEventListener("click", (event) => {
        const actionTarget = event.target.closest("[data-window]");
        if (actionTarget) {
            const windowId = actionTarget.getAttribute("data-window");
            if (windowId) {
                openWindow(windowId);
            }
            return;
        }

        const closeTarget = event.target.closest("[data-close-window]");
        if (closeTarget) {
            const windowId = closeTarget.getAttribute("data-close-window");
            if (windowId) {
                closeWindow(windowId);
            }
            return;
        }

        if (!event.target.closest("#startMenu") && !event.target.closest("#startButton")) {
            closeStartMenu();
        }
    });

    document.getElementById("startButton")?.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleStartMenu();
    });

    enableDrag(document.getElementById("files"));
    enableDrag(document.getElementById("browser"));
    enableDrag(document.getElementById("notes"));

    updateClock();
    setInterval(updateClock, 1000);
    renderFiles();
    setupBrowser();
    setupNotes();
    initMusicPlayer();
    typeBootSequence();
}

document.addEventListener("DOMContentLoaded", initApp);

// Add this logic inside your initApp() function in script.new.js
function setupGlitchCursor() {
    const toggleBtn = document.getElementById("glitchCursorButton");
    let isEffectActive = false;
    const maxTrails = 5; 
    const history = [];

    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
        isEffectActive = !isEffectActive;
        if (isEffectActive) {
            document.body.classList.add("custom-cursor-active");
            toggleBtn.style.background = "rgba(0, 255, 255, 0.3)";
            createTrailElements();
        } else {
            document.body.classList.remove("custom-cursor-active");
            toggleBtn.style.background = "transparent";
            removeTrailElements();
        }
    });

    function createTrailElements() {
        if (document.querySelectorAll('.cursor-trail-node').length > 0) return;
        
        for (let i = 0; i < maxTrails; i++) {
            const el = document.createElement("div");
            el.className = "cursor-trail-node";
            // Stagger visual glitch characteristics per element copy
            el.style.opacity = (1 - (i / maxTrails)).toString();
            el.style.filter = `drop-shadow(2px 2px 4px rgba(0,0,0,0.5)) hue-rotate(${i * 45}deg)`;
            document.body.appendChild(el);
            history.push({ x: 0, y: 0, element: el });
        }
    }

    function removeTrailElements() {
        const nodes = document.querySelectorAll('.cursor-trail-node');
        nodes.forEach(node => node.remove());
        history.length = 0;
    }

    document.addEventListener("mousemove", (e) => {
        if (!isEffectActive || history.length === 0) return;

        // Push current coordinates to track historical pointer path
        const targetX = e.clientX;
        const targetY = e.clientY;

        // Animate trailing nodes following behind sequentially
        history.forEach((node, index) => {
            setTimeout(() => {
                if(node.element) {
                    node.element.style.left = `${targetX}px`;
                    node.element.style.top = `${targetY}px`;
                }
            }, index * 25); // Staggers the trailing gap timing
        });
    });
}

// Call setupGlitchCursor() near the bottom of initApp()
setupGlitchCursor();
