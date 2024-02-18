var nav = document.getElementsByClassName('navigationbar')[0];
var currentPosition = 0;



// mobile navigation bar

var mobileNav = document.getElementsByClassName('mobile')[0];
var bars = document.getElementById('icon');
var adjust = 0;

function responsive() {   // opens responsive nav bar
  if (adjust == 0) {
    mobileNav.style.animationName = 'left_slide';
    mobileNav.style.display = 'block';

    adjust = 1
  }
  else {
    mobileNav.style.display = 'none';
    adjust = 0
  }
}

window.addEventListener( 'scroll', function() {
  if (window.scrollY < 800) {
    mobileNav.style.display = 'none';
    adjust = 1;
  }
});


window.addEventListener( 'scroll', function() {
  if (window.scrollY < 800) {
    mobileNav.style.display = 'none';
  }
});






// make navigation bar pop up

window.addEventListener( 'scroll', function() {
    if (window.scrollY > 800) {
      nav.style.animationName = 'slide';
      nav.style.display = 'block';
    }
    else if (window.scrollY < 800) {
      nav.style.animationName = 'slideup';
      nav.style.display = 'none';
    }
  });




// slideshow for webpage cover

var index = 0;
var color = [];
var images = [];
var slideTime = 4000; // 5 seconds
var background = document.getElementsByClassName('top_half')[0];


images[0] = 'images/hotelbackground.webp';
images[1] = 'images/hotelbackground2.jpg';
images[2] = 'images/hotelbackground3.jpg';
images[3] = 'images/hotelbackground4.jpg';

function changePicture() {
  background.style.backgroundImage = 'url(' + images[index] + ')';
  

  if (index == 3) {
    index = 0;
  }
  else {
    index = index + 1;
  }
  setTimeout('changePicture()', slideTime);
}


window.onload = changePicture();


// events happening when scrolling past sections


var others = document.getElementsByClassName('others_images')[0]; // for others images
var rooms = document.getElementsByClassName('rooms_we_offer')[0]; // for rooms images
var about = document.getElementsByClassName('about-jarnt')[0]; // for about images

window.addEventListener('scroll', function() {
  if (window.scrollY > 2400) {
    others.style.animationName = 'up';
  }
  else {
    others.style.animationName = '';
  }
})
window.addEventListener('scroll', function() {
  if (window.scrollY > 1500) {
    rooms.style.animationName = 'up';
  }
  else {
    rooms.style.animationName = '';
  }
}) 
window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    about.style.animationName = 'up';
  }
  else {
    about.style.animationName = '';
  }
}) 



// room images slider


var slideindex = 0; // start at slide 1
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');
var slide4 = document.getElementById('slide4');
var slide5 = document.getElementById('slide5');
const allSlides = [slide1, slide2, slide3, slide4, slide5];

function nextslide() {
  if (slideindex == 4) {
    slideindex = 0;
  }
  else {
    slideindex = slideindex + 1;
  }
  

  for (let i = 0; i < allSlides.length; i ++) {     //reset animations
    allSlides[i].style.display = 'none';
  }


  if (slideindex == 0) { // moving from slide 5 to slide 1
    slide5.style.display = 'block';
    slide1.style.display = 'block';
    slide5.style.zIndex = '20';
    slide1.style.zIndex = '21';
    document.getElementsByClassName('cover')[slideindex].style.animationName = 'next';
  }
  else {
  allSlides[slideindex - 1].style.display = 'block';
  allSlides[slideindex].style.display = 'block';
  allSlides[slideindex - 1].style.zIndex = '20';
  allSlides[slideindex].style.zIndex = '21';

  document.getElementsByClassName('cover')[slideindex].style.animationName = 'next';
  }
}

function prevslide() {
  if (slideindex == 0) {
    slideindex = 4;
  }
  else {
    slideindex = slideindex - 1;
  }


  for (let i = 0; i < allSlides.length; i ++) {     //reset animations
    allSlides[i].style.display = 'none';
  }


  if (slideindex == 4) { // moving from slide 1 to slide 5
    slide1.style.display = 'block';
    slide5.style.display = 'block';
    slide1.style.zIndex = '20';
    slide5.style.zIndex = '21';
    document.getElementsByClassName('cover')[slideindex].style.animationName = 'prev';
  }
  else {
  allSlides[slideindex + 1].style.display = 'block';
  allSlides[slideindex].style.display = 'block';
  allSlides[slideindex + 1].style.zIndex = '20';
  allSlides[slideindex].style.zIndex = '21';

  document.getElementsByClassName('cover')[slideindex].style.animationName = 'prev';
  }
}