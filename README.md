# FutureOS
ok this is my web os project . inspired by cyberpunk 
this is my first time using html or js so there are alots of thinks that i did the wrong way.

fornow : there is
about ,browser , notes , file manger, music player ,settings and a calculator

THE CODE :
fill thinks that look ai but they not

in the project most of the time i just do the styel of thinks like text in the div in html but at the and i saw that you can do this

.music img {
    margin-top: 30px;
    margin-left:  60px;
    align-items: center;
    top : 50% ;
    left: 40%;
    width: 320px;
    height: 320px;
    object-fit: cover;
}
for the example this are the images for the music palyer

now stuff that is with ai becous i didnt know how to do it 

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
so this is not all with ai i changed fill thinks but mthe tolbar logic i got from ai 
ok other thinks to prove almost no ai used is the open and close function this is streat from the tutorial  the same for the draging i want to give credits to alots of people in stack overflow


What is in the setting:
# clock settings :
    1. color
    2.position
    3.size
    4.visibility
# wallpapers:
    two videos
    and two images
# themes:
    1. you can change the color of the app
    2. font color
    3.bar color
# calendar settings :
    1. 3 color changes to the dates background and buttons
    2.position
    3.visabelity 

Calendar : the code for the calendar is not mine it from a tutorial here is the link: 
https://youtu.be/OcncrLyddAs?si=N9Ys0o3P3Y71J769

also the  toll bar is working but you can not use the icons that appear to open the app it
just to show you that you've minimized it
if you minimize it will keep the position the state of the app 
# the buttons:
    red button - full close
    blue button - minimize 
