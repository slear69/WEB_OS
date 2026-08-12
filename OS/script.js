const toolbars = document.getElementById("active-apps");
const musice = document.getElementById("music");
const activeAppIds = new Set();
function updateToolbar() {
  if (!toolbars) return;
  toolbars.innerHTML = "";
  const windows = [
    { id: "windollswell", icon: "image/about.png" },
    { id: "windollsnote", icon: "image/note.png" },
    { id: "windollfiles", icon: "image/folder.png" },
    { id: "windollbrow", icon: "image/brow.png" },
    { id: "clacoletor", icon: "image/calc.png" }
  ];
  // Loop through all windows
  for (let i = 0; i < windows.length; i++) {
    const el = document.getElementById(windows[i].id);

   if (activeAppIds.has(windows[i].id)) {
      toolbars.innerHTML += `<div class="folder-wrapper"><img src="${windows[i].icon}" id="welcomeopen" alt="icon"></div>`;
    }
  }
}

var biggestIndex = 0
drag(document.getElementById("windollswell"));
drag(document.getElementById("windollsnote"));
drag(document.getElementById("windollfiles"));
drag(document.getElementById("windollbrow"));
drag(document.getElementById("clacoletor"));
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




 

function openenclose(element,open,close,realclose) {
  var Screen = document.getElementById(element)
  var wClose = document.getElementById(close)
  var wOpen = document.getElementById(open)
  var wrClose = document.getElementById(realclose)
 
  function closeWindow(element) {
    element.style.display = "none"
  
  }
  function openWindow(element) {
    element.style.display = "block"
    biggestIndex++;  // Increment biggestIndex by 1
    element.style.zIndex = biggestIndex;
    activeAppIds.add(element.id);
    updateToolbar()
    setTimeout(() => {
      if (element.classList.contains("closing")) {
        element.classList.remove("closing");
        element.style.display = "none";
      }
    }, 200);
  }
  function frclosed(element) {
    closeWindow(element);
    activeAppIds.delete(element.id);
    if (element == document.getElementById("music") || element == document.getElementById("settings"))
    {
      
    }
    else
    {
      element.style.left = "50%"
      element.style.top = "50%"
      console.log("why")
    }
    if (element == document.getElementById("windollfiles") ){
      document.getElementById("content").style.display = "block";
      document.getElementById("file1o").style.display = "block";
      document.getElementById("file2o").style.display = "block";
      document.getElementById("infolder").style.display = "none";
      document.getElementById("intxt").style.display = "none";
      document.getElementById("intxt2").style.display = "none";
    }
    if (element == document.getElementById("windollbrow") )
    {
      sweat = document.getElementById("theinternet") ;
      sweat.innerHTML =`<iframe id="theinternet" src="https://wikipedia.org" frameborder="0" style="height: 100% ; width:100% ;"></iframe>`
    }
    if (element == document.getElementById("clacoletor") ){deall()}
    if (element == document.getElementById("settings") )
    {
      document.getElementById("chose").style.display = "block";
      document.getElementById("contento").style.display = "none";
      document.getElementById("contentowall").style.display = "none";
      document.getElementById("theam").style.display = "none";
      document.getElementById("contentocall").style.display = "none";
    }
    updateToolbar()
  // for new apps add here
  }
  wClose.addEventListener("click", function() {closeWindow(Screen);});//this places listener to this specific HTML element to licent for clicking and if it dose it call the function
  wOpen.addEventListener("click", function() {openWindow(Screen);});
  wrClose.addEventListener("click",function(){frclosed(Screen)})
}








function notes(){
  const note = document.getElementById("notestype")
  if (!note) return;
  note.value = localStorage.getItem("notesclose") || "";
  note.addEventListener("input", () => {localStorage.setItem("notesclose",note.value)});
}

//the 1st is the id of windoll - section that i will be working on the 2nd is the id of the element that will open it and the same with 3rd the close button
openenclose("windollswell","welcomeopen","wellclose","rwellclose")
openenclose("windollsnote","noteopen","notesclose","rnotesclose")
openenclose("windollfiles","filesopen","fileclose","rfileclose")
openenclose("windollbrow","browopen","browclose","rbrowclose")
openenclose("windollswell","welcomeopenR","wellclose","rwellclose")
openenclose("windollsnote","noteopenR","notesclose","rnotesclose")
openenclose("windollfiles","filesopenR","fileclose","rfileclose")
openenclose("windollbrow","browopenR","browclose","rbrowclose")
openenclose("settings","set","setGSclose","rsetGSclose")
openenclose("music","opmusic","musicclose","rmusicclose")
openenclose("settings","setred","setGSclose","rsetGSclose")
openenclose("music","opmusicred","musicclose","rmusicclose")
openenclose("music","opmusicred","musicclose","rmusicclose")
openenclose("clacoletor","calcopen","calck","rcalck")
openenclose("clacoletor", "callR", "calck", "rcalck");
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
        element.style.display = "block";
        elementin.style.display = "none";
      });
    } 
  
    else {
      const elemen = document.getElementById(theoldest);
      const backBtne = document.getElementById(oldback);

      target.addEventListener("click", function() {
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





//   thew click  /the remove/the new think that will show / and the back/  
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
Top (document.getElementById("windollbrow"))
Top (document.getElementById("clacoletor"))


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

file("1stset","chose","contento","tocontent")
file("2stset","chose","contentowall","nowall")
file("3stset","chose","theam","tocontent3")
file("4stset","chose","contentocall","tocontentcall")








var clock = document.getElementById("timeElement"), bar = document.getElementById("bar");
var pos = document.getElementById("position"), scale = document.getElementById("scale"), visable = document.getElementById("visable");
var notew = document.getElementById("coler"), fonts = document.getElementById("fontcoler"), barcolor = document.getElementById("barcoler"), positioncall = document.getElementById("positioncall");
var optionb = document.getElementById("option1"), optionr = document.getElementById("option2"), backgroud = document.getElementById("backgroud"), nuums = document.getElementById("nuums");
var colercallmain = document.getElementById("colercallmain"), colercallnums = document.getElementById("colercallnums"),colercallbuts = document.getElementById("colercallbuts"),visablecall = document.getElementById("visablecall");
var fontIcons  = document.querySelectorAll("#iconsf, #icons2f, #icons3f, #icons4f, #icons5f, #iconsrf, #icons2rf, #icons3rf, #icons4rf, #icons5rf");
var iconsOpt1  = document.querySelectorAll("#icons, #icons2, #icons3, #icons4, #icons5, #set, #opmusic");
var iconsOpt2  = document.querySelectorAll("#iconsr, #icons2r, #icons3r, #icons4r, #icons5r, #setred, #opmusicred");

var videeo = document.getElementById("thevideo"), videeo2 = document.getElementById("thevideo2");
var imgwall = document.getElementById("thewallpaper"), imgwall2 = document.getElementById("thewallpaper2");
var stvid = document.getElementById("videoss"), ndvid = document.getElementById("videeeooo");
var gog = document.getElementById("gog"), gog2 = document.getElementById("gog2");


function settings()
{
  var iconssssrf = document.getElementById("icons4rf")
  notew.addEventListener("input" , function() {clock.style.color=notew.value})
  if (pos.value == 1) {
    clock.style.top = "75%";
    clock.style.left = "50%";
  } else if (pos.value == 2) {
    clock.style.top = "75%";
    clock.style.left = "10%";
  } else if (pos.value == 3) {
    clock.style.top = "25%";
    clock.style.left = "50%";
  } else if (pos.value == 4) {
    clock.style.top = "25%";
    clock.style.left = "10%";
  }

  clock.style.fontSize = scale.value * 10 + "px" ;


  if (visable.checked)
  {
    clock.style.display= "flex"
  }
  else
  {
    clock.style.display= "none"
  }
  
  fontIcons.forEach(function(icon) { icon.style.color = fonts.value; });

  // Bulk set display (Replaces 12 lines)
  var isOpt1 = optionb.checked;
  iconsOpt1.forEach(function(el) { el.style.display = isOpt1 ? "block" : "none"; });
  iconsOpt2.forEach(function(el) { el.style.display = isOpt1 ? "none" : "block"; });
  bar.style.background = barcolor.value
  backgroud.style.background = colercallmain.value
  bacc.style.background = colercallbuts.value
  nextt.style.background = colercallbuts.value
  dates.style.color = colercallnums.value
  if (visablecall.checked)
  {
    backgroud.style.display= "flex"
  }
  else
  {
    backgroud.style.display= "none"
  }
  if (positioncall.value == 1) {
    backgroud.style.top = " 65%%";
    backgroud.style.left = "0%";
  } else if (positioncall.value == 2) {
    backgroud.style.top = " 65%%";
    backgroud.style.left = "50%";
  } 
}
notew.addEventListener("input" , function() {settings()})
pos.addEventListener("input" , function() {settings()})
scale.addEventListener("input" , function() {settings()})
visable.addEventListener("input" , function() {settings()})
optionb.addEventListener("input" , function() {settings()})
optionr.addEventListener("input" , function() {settings()})
videeo.addEventListener("click" , function() {stvid.style.display = "flex"; gog.style.display = "none"  ; ndvid.style.display = "none";gog2.style.display = "none"})
videeo2.addEventListener("click" , function() {ndvid.style.display = "flex"; gog.style.display = "none" ; stvid.style.display = "none";gog2.style.display = "none"})
imgwall.addEventListener("click" , function() {ndvid.style.display = "none"; gog.style.display = "flex" ; stvid.style.display = "none";gog2.style.display = "none"})
imgwall2.addEventListener("click" , function() {ndvid.style.display = "none"; gog2.style.display = "flex" ; stvid.style.display = "none";gog.style.display = "none"})
fonts.addEventListener("input" , function() {settings()})
barcolor.addEventListener("input" , function() {settings()})
colercallmain.addEventListener("input" , function() {settings()})
colercallnums.addEventListener("input" , function() {settings()})
colercallbuts.addEventListener("input" , function() {settings()})
visablecall.addEventListener("input" , function() {settings()})
positioncall.addEventListener("input" , function() {settings()})

window.addEventListener("load", () => {
  const txt = document.getElementById("progtext");
  const loader = document.getElementById("loading");
  let prog = 0;
  const timer = setInterval(() => {
    prog += 1;
    txt.innerText = prog + "%";

    if (prog >= 100) {
      clearInterval(timer);
      loader.style.opacity = "0";
      setTimeout(() => {loader.style.display = "none";}, 500);
    }
  }, 35);
});







var screan = document.getElementById("calc")
function addvalu(num)
{
  screan.value += num
}
function deall(){
  screan.value = "";

}
function claculet()
{
  try
  {
    screan.value = eval(screan.value);
  }
  catch(error)
  {
    screan.ATTRIBUTE_NODE.value="Error"
    console.log("error")
  }
  
}

const mounty = document.getElementById("mountY");
const dates = document.getElementById("dates");
const bacc = document.getElementById("bacbtn"); 
const nextt = document.getElementById("nextbtn");

let currente = new Date();
const upd = () => {
  const currentY = currente.getFullYear();
  const curnM = currente.getMonth(); 

  const firsd = new Date(currentY, curnM, 0);
  const lastday = new Date(currentY, curnM + 1, 0);
  const totaldays = lastday.getDate();
  const firsdindex = firsd.getDay();
  const lastdayindex = lastday.getDay();

  const mountYstr = currente.toLocaleString('default', { month: 'long', year: 'numeric' });
  if (mounty) mounty.textContent = mountYstr;

  let datesHTML = '';

  for (let i = firsdindex; i > 0; i--) {
    const prevd = new Date(currentY, curnM, 1 - i);
    datesHTML += `<div class="dates inactive">${prevd.getDate()}</div>`;
  }
  for (let i = 1; i <= totaldays; i++) {
    const date = new Date(currentY, curnM, i); // Fixed space
    const actclass = date.toDateString() === new Date().toDateString() ? 'activ' : ''; // Fixed method
    datesHTML += `<div class="date ${actclass}">${i}</div>`;
  }
  for (let i = 1; i <= 7 - lastdayindex; i++) {
    const nextDa = new Date(currentY, curnM + 1, i);
    datesHTML += `<div class="date inactive">${nextDa.getDate()}</div>`;
  }
  if (dates) dates.innerHTML = datesHTML;
};

if (bacc && nextt) {
  bacc.addEventListener('click', () => {
    currente.setMonth(currente.getMonth() - 1);
    upd();
  });
  nextt.addEventListener('click', () => {
    currente.setMonth(currente.getMonth() + 1);
    upd();
  });
  upd();
}
