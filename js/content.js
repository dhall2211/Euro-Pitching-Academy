//signup
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//login button

// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function openclosedropdn() {
    var smalldpdn = document.getElementById("respon-navbar")


    if (smalldpdn.style.display === 'none') {
        //open
        smalldpdn.style.display = 'flex';

    } else {
        //close
        smalldpdn.style.display = 'none';
    }
}




/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginRight = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}



//thumbnail button
var thumbnailb = documnent.getElementById('tn1')
var targetImage = document.getElementById(tarI1)
var bool = true;
// add another image in the quotes!!!
function displayThumbnail() {
    var image = document.getElementById('tarI1')
    image.src = ""
    if (bool) {
        target.setAttribute("class", "hide")
        bool= false;
    }

}
