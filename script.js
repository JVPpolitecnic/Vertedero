 // Get the element to be dragged
 let dragItem = document.getElementById("dragItem");
 let bin = document.getElementById("bin");
let objecInBinAchieved = false;

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
    isDragging = false;
    changeItemPosition();


} else {  
   
}

}

function changeItemPosition(){
    dragItem.style.left = "10px";
    dragItem.style.top = "10px";
}


function checkPositionInterval(){
    let positionsEqual;
    setInterval(function () {
    arePositionsEqual();
    console.log("VAR: " + positionsEqual);   

 500});

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
       let max = 10;
       let min = 0;
       let randNum =  Math.round(Math.random() * (max - min) + min);

       let paths = ["bottle.png", "box.png", "cup.png", "detergent.png", "detergent2.png", "glassjar.png", "mug.png", "newspaper.png", "paperBag.png", "pixelBin.png", "pizzaBox"]

        newImgSrc = 'img/'+ paths[randNum];
        document.getElementById("imgDragable").src = newImgSrc;
        console.log("Yes change");

    

}