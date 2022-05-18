
const openButton = document.getElementById('open_button');
const closeButton = document.getElementById('close_button');
// const header = document.getElementById('header');
const modalHeader = document.getElementById('modal_header');
const moreDetails = document.getElementById('more_details');
const flexContainer = document.getElementsByClassName('flex_container');
console.log(flexContainer);

const header = document.getElementById('header');
// const header = document.getElementById('header');

const chars = header.textContent.split("");

//GSAP fromTo transitions between visual states of dom elements smoothly by taking in two parameters, in this case but simply adding in
//your average CSS properties without having to go overboard and write lines and lines and lines of css/js to get the same effect.
openButton.addEventListener('click', function() {
    // header.className = "animated_header_out";

    gsap.fromTo(header, {opacity: 1}, {opacity: 0})
    gsap.fromTo('.fancy_modal', {scale: 0, borderRadius: "50%"}, {scale: 1, duration: 0.5, delay: 0.25, display: 'block', borderRadius: "0"});
    // gsap.fromTo('close_button', {scale: 1}, {scale: 0.7, duration: 0.5});
    
    //open button animation
    gsap.fromTo(openButton, {scale: 0.5}, {scale: 1, duration: 0.5})
    //     .to({scale: 1, duration: 0.5})

    gsap.fromTo(flexContainer, {opacity: 1}, {opacity: 0, duration: 0.5});
    
});

closeButton.addEventListener('click', function() {
    gsap.fromTo('.fancy_modal', {scale: 1}, {scale: 0, duration: 0.5, delay: 0.2});
    gsap.fromTo(flexContainer, {opacity: 0}, {opacity: 1, duration: 1, delay: 0.2});
    gsap.fromTo(header, {opacity: 0}, {opacity: 1, delay:0.2});



});
