document.getElementById('TextookPage').addEventListener('click', () => {
    window.location.href = '/pages/Textbook.html'
} )



// let container = document.querySelector('.container')

// document.addEventListener("DOMContentLoaded", function () {
//     var showModalBtn = document.getElementsByClassName("stats__btn");
//     var modal = document.getElementById("myModal");
//     var closeModalBtn = document.getElementById("closeModalBtn");

//     showModalBtn.addEventListener("click", function() {
//         modal.style.display = "block";
//     });

//     closeModalBtn.addEventListener("click", function() {
//         modal.style.display = "none";
//     });

//     window.addEventListener("click", function(event) {
//         if (event.target === modal) {
//             modal.style.display = "none";
//         }
//     });
// });



let ModalW = document.querySelector('.about__spt')
let CloseBtn = document.querySelector('.about__spt-close')
let OpenBtn = document.querySelector('.stats__btn')


OpenBtn.addEventListener('click', function() {
    ModalW.style.display = 'block';
});

CloseBtn.addEventListener('click', function() {
    ModalW.style.display = 'none'
});

window.addEventListener('click', function() {
    if( this.event.target === ModalW) {
        ModalW.style.display = 'none'
    }
})



if( ModalW.style.display = 'block' ){
 widmow.style.background-color == 'grey'
}