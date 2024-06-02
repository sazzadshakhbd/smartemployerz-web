//  Smooth Scroll for Navigation
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// Back to top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      700
    );
    return false;
  });
});
//  Responsive Navigation
function toggle() {
  var header = document.getElementById("header");
  header.classList.toggle("active");
}
// Wow Js
wow = new WOW({
  animateClass: "animated",
  offset: 100,
  mobile: false,
});
wow.init();


$(".carousel").carousel({
  interval: 6000,
});


$(".testimonial-carousel").owlCarousel({
  autoplay: true,
  loop: true, // Set loop to false to manage the state based on the position
  margin: 10,
  
  responsiveClass: true,
  autoplayTimeout: 4000,
  smartSpeed: 1500,
  nav: true,
  navText: [
    `<svg class="left-nav" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M27 16H5" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 7L5 16L14 25" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    `<svg class="right-nav" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M5 16H27" stroke="#00756A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 7L27 16L18 25" stroke="#00756A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  ],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1024: {
      items: 1,
    },
    1199: {
      items: 1,
    },
  },
  onInitialized: updateNavState, // Event for initial load
  onTranslated: updateNavState // Event for each slide transition
});

function updateNavState(event) {
  var carousel = event.target; // Get the carousel element from the event
  var $carousel = $(carousel); // Wrap it with jQuery
  var currentIndex = $carousel.find('.owl-item.active').index(); // Find the active item index
  var totalItems = $carousel.find('.owl-item').length; // Get total items

  // Enable both buttons
  $(".left-nav").html(`
    <path d="M27 16H5" stroke="#00756A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 7L5 16L14 25" stroke="#00756A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  `);

  $(".right-nav").html(`
    <path d="M5 16H27" stroke="#00756A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18 7L27 16L18 25" stroke="#00756A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  `);

  // Check if the current index is the first slide
  if (currentIndex === 0) {
    // Disable the left button
    $(".left-nav").html(`
      <path d="M27 16H5" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 7L5 16L14 25" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    `);
  }

  // Check if the current index is the last slide
  if (currentIndex === totalItems - 1) {
    // Disable the right button
    $(".right-nav").html(`
      <path d="M5 16H27" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 7L27 16L18 25" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    `);
  }
}
    

      // International Phone Number JS
  // -----Country Code Selection
$("#mobile_code").intlTelInput({
	initialCountry: "bd",
	separateDialCode: true,
	// utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
});
$("#mobile_code2").intlTelInput({
	initialCountry: "bd",
	separateDialCode: true,
	// utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
});


// Onload Counting
// Just added bootstrap v4.5 css
// You don't need any other library to run this counter
const animationDuration = 3000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round( animationDuration / frameDuration );

const easeOutQuad = t => t * ( 2 - t );

const animateCountUp = el => {
	let frame = 0;
	const countTo = parseInt( el.innerHTML, 10 );
	
	const counter = setInterval( () => {
		frame++;

		const progress = easeOutQuad( frame / totalFrames );

		const currentCount = Math.round( countTo * progress );


		if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
			el.innerHTML = currentCount;
		}

		if ( frame === totalFrames ) {
			clearInterval( counter );
		}
	}, frameDuration );
};

	const countupEls = document.querySelectorAll( '.timer' );
	countupEls.forEach( animateCountUp );



  $(function () {
    $("#switch-id").change(function () {
        if ($(this).is(":checked")) {
            $(".contentB").show();
            $(".contentA").hide();
        } else {
            $(".contentB").hide();
            $(".contentA").show();
        }
    });
});
