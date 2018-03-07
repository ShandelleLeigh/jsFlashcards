// class Flashcard(front, back){
//   this.front = front;
//   this.back = back;
// }
//   flashcard_front
//   flashcard_back
//
// default flashcard front


// document.getElementsByClassName("flashcard").addEventListener("click", function( getId, changeSide ){
//   getId = this.id
//   changeSide default is front,  onclick change to back or front
// })
// on click change
//   if flashcard front
//     switch to back
//   else switch to front
//
//
// button to:
// add/edit
// front text box
// back text box
//
// button to delete:
// from id,  delete children:
//   delete front and back
//
//
// Flashcard.new id = 1
//   front =


// document.getElementsByClassName("flashcard").addEventListener("click"

// $('#flashcard').click(function(){
//     $('#showing').toggle();
// });
//

// function showHide() {
//   console.log('yay')
//     var x = document.getElementById("newID");
//     if (x.style.visibility == "visible") {
//         x.style.visibility = "hidden";
//     } else {
//         x.style.visibility = "visible";
//     }
// }

function showHide() {
  console.log('yay')
    var x = document.getElementById('newID');
    if (x.style.visibility == "visible") {
        x.style.visibility = "hidden";
    } else {
        x.style.visibility = "visible";
    }
}

function myFunction() {
    var x = document.getElementById('aCard');
    if (x.style.visibility == 'hidden') {
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = 'hidden';
    }
}

// $("front").toggle();
