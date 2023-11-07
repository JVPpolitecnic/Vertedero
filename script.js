 // Get the element to be dragged
 let dragItem = document.getElementById("dragItem");
 let bin = document.getElementById("bin");
 let imgBackground = document.getElementById("background");
 let clock = document.getElementById("clock");
let objecInBinAchieved = false;
let seconds = 0;


 showItemUserIsSearching();
 checkPositionInterval();

 objecInBinAchieved = false;
 
 let isDragging = false;
 let offset = { x: 0, y: 0 };
showItemUserIsSearching()
 // Attach event listeners for mouse down, move, and up events
 dragItem.addEventListener("mousedown", function (e) {
     isDragging = true;

     // Calculate the offset of the mouse click from the top-left corner of the div
     offset.x = e.clientX - dragItem.getBoundingClientRect().left;
     offset.y = e.clientY - dragItem.getBoundingClientRect().top;
 });

 document.addEventListener("mousemove", function (e) {
     if (isDragging) {
         // Calculate the new position of the div based on the mouse movement
         let x = e.clientX - offset.x;
         let y = e.clientY - offset.y;

         // Apply the new position to the div
         dragItem.style.left = x + "px";
         dragItem.style.top = y + "px";
     }
 });

 document.addEventListener("mouseup", function () {
     isDragging = false;
 });



 function arePositionsEqual() {
    const width = bin.offsetWidth;
    const height = bin.offsetHeight;
if ((dragItem.offsetLeft >= bin.offsetLeft && dragItem.offsetLeft <= bin.offsetLeft + width) &&
    (dragItem.offsetTop >= bin.offsetTop && dragItem.offsetTop <= bin.offsetTop + height)) 
{
    changeDragItemIMGSrc();
    showItemUserIsSearching();
    changeItemPosition();
   seconds = 0;
    isDragging = false;
  


} else {  
   
}

}

function updateClock(){
    seconds++;  
    clock.textContent = seconds

 
}

function changeItemPosition(){

    let minWidth = imgBackground.offsetLeft;
    let minHeight = imgBackground.offsetTop;
    let maxWidth = minWidth + imgBackground.offsetWidth;
    let maxHeight = minHeight + imgBackground.offsetHeight;

    let randLeft = Math.round(Math.random() * (maxWidth - minWidth) + minWidth);
    let randTop =  Math.round(Math.random() * (maxHeight - minHeight) + minHeight);
    dragItem.style.left = randLeft + "px";
    dragItem.style.top = randTop +"px";
    dragItem.style.zIndex = 10;
}


function checkPositionInterval(){
    let positionsEqual;
    setInterval(function () {
    arePositionsEqual();
    updateClock(); 
 },1000);

}

function showItemUserIsSearching()
{
const imgSrcToShow = document.getElementById("imgDragable").getAttribute("src");
const img = document.getElementById("imgSearchable");
img.src = imgSrcToShow;
}


function changeDragItemIMGSrc()
{
       let newImgSrc;
       let max = 9;
       let min = 0;
       let randNum =  Math.round(Math.random() * (max - min) + min);

       let paths = ["bottle.png", "box.png", "cup.png", "detergent.png", "detergent2.png", "glassjar.png", "mug.png", "newspaper.png", "paperBag.png", "pizzaBox.png"]

        newImgSrc = 'img/'+ paths[randNum];
        document.getElementById("imgDragable").src = newImgSrc;
        console.log("new path: "+ newImgSrc);

    

}