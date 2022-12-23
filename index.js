/* Menu bar Show */
let Bars = document.querySelector('.bars');
let Bars1 = document.querySelector('#bars1');
let Bars2 = document.querySelector('#bars2');
let MenuBar = document.querySelector('.menu-bar');
Bars1.addEventListener('click',()=>{
    MenuBar.style.display = 'flex';
    Bars1.style.display = 'none'
    Bars2.style.display = 'block'   
})
Bars2.addEventListener('click',()=>{
    MenuBar.style.display = 'none';
    Bars1.style.display = 'block'
    Bars2.style.display = 'none'
})



/* Home Backgorund */
var myIndex = 0;
carousel();
function carousel() {
    var image = document.getElementsByClassName("homeimg");
    for (var i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > image.length) {myIndex = 1}
    image[myIndex-1].style.display = "block";
setTimeout(carousel, 2000); // Change image every 4 seconds
}
