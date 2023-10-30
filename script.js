 // Get the element to be dragged
 let dragItem = document.getElementById("dragItem");
 let bin = document.getElementById("bin");

 let isDragging = false;
 let offset = { x: 0, y: 0 };

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

 function arePositionsEqual(element1, element2, range) {
    return (
        element1.offsetLeft === element2.offsetLeft +range &&
        element1.offsetLeft === element2.offsetLeft -range &&
        element1.offsetTop === element2.offsetTop + range &&
        element1.offsetTop === element2.offsetTop - range 
    );
}

if (arePositionsEqual(dragItem, bin)) {
    alert("The positions of 'dragItem' and 'bin' are the same.");
} else {
    
}