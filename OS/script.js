const toolbars = document.getElementById("bar");
const musice = document.getElementById("music");
function updateToolbar() {
  if (!toolbars) return;
  toolbars.innerHTML = "";
  const windows = [
    { id: "windollswell", icon: "image/about.png" },
    { id: "windollsnote", icon: "image/note.png" },
    { id: "windollfiles", icon: "image/folder.png" },
    { id: "windollbrow", icon: "image/brow.png" }
  ];
  // Loop through all windows
  for (let i = 0; i < windows.length; i++) {
    const el = document.getElementById(windows[i].id);

    if (window.getComputedStyle(el).display != "none") {
      toolbars.innerHTML += `<div class="folder-wrapper"><img src="${windows[i].icon}" id="welcomeopen" alt="icon"></div>`;
    }
  }
}

var biggestIndex = 0
drag(document.getElementById("windollswell"));
drag(document.getElementById("windollsnote"));
drag(document.getElementById("windollfiles"));
drag(document.getElementById("windollbrow"))
var welcomeScreen = document.querySelector("#windolls")

function time(){
  var timeText = document.querySelector("#timeElement");
  var currentTime = new Date().toLocaleString();
  timeText.innerHTML = currentTime
  
}
 setInterval(time, 1000);

function drag(element) {
  const header = element.querySelector(".topbar");// surces by class
  var initialX = 0;//mousepos
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (header) {
    header.onmousedown = startDragging; // if the mouse down is on the hader it will calll this function
  }  

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function openenclose(element,open,close) {
  var welcomeScreen = document.getElementById(element)
  var wClose = document.getElementById(close)
  var wOpen = document.getElementById(open)

 
  function closeWindow(element) {
    element.style.display = "none"
    updateToolbar()
    
  }
  function openWindow(element) {
    element.style.display = "block"
    biggestIndex++;  // Increment biggestIndex by 1
    element.style.zIndex = biggestIndex;
    updateToolbar()
  }
  wClose.addEventListener("click", function() {closeWindow(welcomeScreen);});//this places listener to this specific HTML element to licent for clicking and if it dose it call the function
  wOpen.addEventListener("click", function() {openWindow(welcomeScreen);});
  

}



function notes(){
  const note = document.getElementById("notestype")
  if (!note) return;
  note.value = localStorage.getItem("notesclose") || "";
  note.addEventListener("input", () => {localStorage.setItem("notesclose",note.value)});
}

//the 1st is the id of windoll - section that i will be working on the 2nd is the id of the element that will open it and the same with 3rd the close button
openenclose("windollswell","welcomeopen","wellclose")
openenclose("windollsnote","noteopen","notesclose")
openenclose("windollfiles","filesopen","fileclose")
openenclose("windollbrow","browopen","browclose")
notes()


  
function file(file, theold, thenew, back, theoldest, oldback, type) {
  document.addEventListener("DOMContentLoaded", function() {
    const target = document.getElementById(file);
    const element = document.getElementById(theold);
    const elementin = document.getElementById(thenew);
    const backBtn = document.getElementById(back);
    target.addEventListener("mouseover", function() {
      target.style.backgroundColor = "#091f6f";
    });
    target.addEventListener("mouseout", function() {
      target.style.backgroundColor = "#ffffff1f";
    });

  
    if (type !== 1) {
      target.addEventListener("click", function() {
        element.style.display = "none";
        elementin.style.display = "flex";
      });

      backBtn.addEventListener("click", function() {
        element.style.display = "flex";
        elementin.style.display = "none";
      });
    } 
  
    else {
      const elemen = document.getElementById(theoldest);
      const backBtne = document.getElementById(oldback);

      target.addEventListener("click", function() {
        if (elemen) elemen.style.display = "none";
        element.style.display = "none";
        elementin.style.display = "flex";
      });

      backBtn.addEventListener("click", function() {
        element.style.display = "flex";
        elementin.style.display = "none";
      });

    
      backBtne.addEventListener("click", function() {
        if (elemen) elemen.style.display = "flex";
          element.style.display = "none";
          elementin.style.display = "none";
      });
    }
  });
}

// Function calls
file("file2o", "content", "intxt", "bac1");
file("file1o", "content", "infolder", "back");
file("file3o", "infolder", "intxt2", "back2", "content", "back", 1);
var ontop= 0;
function Top(top){
  top.addEventListener("mousedown" , () =>{
    ontop ++;
    top.style.zIndex=ontop;
  })
}
Top(document.getElementById("windollswell"))
Top (document.getElementById("windollsnote"))
Top (document.getElementById("windollfiles"))




var current = 1 ;
var tomorow = new Audio()
var tomorow = new Audio()
function musicplayer(){
  var issac = new Audio()
  const thebar = document.getElementById("in")
  const playbutt = document.getElementById("play")
  const paus = document.getElementById("pause")
  const skip = document.getElementById("skip")
  const songs = ['MUSIC/specialist.mp3','MUSIC/Odo.mp3','MUSIC/flower.mp3','MUSIC/TOMOROW.mp3','MUSIC/acttomorow.mp3']
  
  const imgDiv = document.createElement("div");

  function check()
  {
    if(current > 5){current = 1}
    if(current == 1){issac = new Audio(songs[0]);timebar();imgDiv.innerHTML = `<img src="image/issac.jpg">`;musice.appendChild(imgDiv);}
    if(current == 2){issac = new Audio(songs[1]);timebar();imgDiv.innerHTML = `<img src="image/odo.jpg">`;musice.appendChild(imgDiv);}
    if(current == 3){issac = new Audio(songs[2]);timebar();imgDiv.innerHTML = `<img src="image/flowerman.jpg">`;musice.appendChild(imgDiv);}
    if(current == 4){issac = new Audio(songs[3]);timebar();imgDiv.innerHTML = `<img src="image/cp2077.jpg">`;musice.appendChild(imgDiv);}
    if(current == 5){issac = new Audio(songs[4]);timebar();imgDiv.innerHTML = `<img src="image/cyberpunk.jpg">`;musice.appendChild(imgDiv);}
  }
  check()
  playbutt.addEventListener("click",function(){issac.play()})
  paus.addEventListener("click",function(){issac.pause()})
  skip.addEventListener("click",function(){ issac.pause(); current++ ;check();issac.play()})
  function timebar()
  {
    issac.addEventListener('timeupdate', function() {
      thebar.style.width =  "0%"
      const timer = issac.currentTime;
      const duration = issac.duration;
      var presents = -(Math.round( ((duration - timer)/duration)*100)) + 100 
      console.log(`Current position: ${presents} % seconds`);
      thebar.style.width = presents + "%"
    })
  }
}
musicplayer()

var note = document.getElementById("windollsnote")
var well = document.getElementById("windollswell")
var files = document.getElementById("windollfiles")
var brow = document.getElementById("windollbrow")


