var span = document.querySelector(".typewriter span");
var textArr = span.getAttribute("data-text").split(", "); 
var maxTextIndex = textArr.length; 

var sPerChar = 0.15; 
var sBetweenWord = 1.5;
var textIndex = 0; 

typing(textIndex, textArr[textIndex]); 

function typing(textIndex, text) {
    var charIndex = 0; 
    var maxCharIndex = text.length - 1; 
    
    var typeInterval = setInterval(function () {
        span.innerHTML += text[charIndex]; 
        if (charIndex == maxCharIndex) {
            clearInterval(typeInterval);
            setTimeout(function() { deleting(textIndex, text) }, sBetweenWord * 1000); 
            
        } else {
            charIndex += 1; 
        }
    }, sPerChar * 1000); 
}

function deleting(textIndex, text) {
    var minCharIndex = 0; 
    var charIndex = text.length - 1; 

    var typeInterval = setInterval(function () {
        span.innerHTML = text.substr(0, charIndex); 
        if (charIndex == minCharIndex) {
            clearInterval(typeInterval);
            textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1; 
            setTimeout(function() { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 1000); 
        } else {
            charIndex -= 1; 
        }
    }, sPerChar * 1000); 
}



// carousel
const swiper = new Swiper('.swiper-container', {
    
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

  const testimonialSwiper = new Swiper('.testimonials-swiper-container', {
    slidesPerView: 1, // Display one slide by default
    spaceBetween: 30, // Adjust the spacing between slides
    loop: true, // Enable loop mode if needed
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      768: {
        slidesPerView: 2, // Display two slides on screens with a width of 768px or higher
        spaceBetween: 40, // Adjust spacing for larger screens
      },
      1024: {
        slidesPerView: 3, // Display three slides on screens with a width of 1024px or higher
        spaceBetween: 60, // Adjust spacing for even larger screens
      },
    },
  });
  
  

  