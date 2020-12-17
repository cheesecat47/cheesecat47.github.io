////////////////////////////////////////////////////////////////////////
//  index 화면 상단 사진 슬라이드 코드
////////////////////////////////////////////////////////////////////////
var slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  // if (n > slides.length) {slideIndex = 1}
  // if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3623); //change image every 2 seconds
}



////////////////////////////////////////////////////////////////////////
//  스크롤 퍼센티지 바 코드
////////////////////////////////////////////////////////////////////////
// $.progressIndicator({
//     direction : 'top',
//     barColor: 'rgb(253, 191, 38)',
//     percentageEnabled : true,
//     percentageColor: '#222',
//     easingSpeed : 0.5,
//     height: 4,
//     target : 'body',
//     onStart : function(){
//         console.log("onStart");
//     },
//     onEnd : function(){
//         console.log("onEnd");
//     },
//     onProgress : function(perecent){
//         console.log(perecent);
//     }
// });
