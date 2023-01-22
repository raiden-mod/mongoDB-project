setTimeout(function () {
  $(".siz-qty-pan").addClass("active");
  $(".add_overlay").addClass("active");
}, 2000);
// this will close down the slide up car
$(".cl_del").click(function (e) {
  e.preventDefault();
  $(".siz-qty-pan").removeClass("active");
  $(".add_overlay").removeClass("active");
});
$(".button").click(function (e) {
  e.preventDefault();
  $(".siz-qty-pan").addClass("active");
  $(".add_overlay").addClass("active");
});

var slideIndex = 1;

var myTimer;

var slideshowcontainer;

window.addEventListener("load", function () {
  showSlidesOne(slideIndex);
  myTimer = setInterval(function () {
    plusSlidesOne(1);
  }, 3000);

  //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  slideshowcontainer = document.getElementsByClassName(
    "slide-img-inner-one"
  )[0];

  //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  // slideshowcol-smd-40 = document.getElementsByClassName('slideshow-col-smd-40')[0];

  slideshowcontainer.addEventListener("mouseenter", pause);
  slideshowcontainer.addEventListener("mouseleave", resume);
});

// NEXT AND PREVIOUS CONTROL
function plusSlidesOne(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlidesOne((slideIndex -= 1));
  } else {
    showSlidesOne((slideIndex += 1));
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (n === -1) {
    myTimer = setInterval(function () {
      plusSlidesOne(n + 2);
    }, 3000);
  } else {
    myTimer = setInterval(function () {
      plusSlidesOne(n + 1);
    }, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlideOne(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlidesOne(n + 1);
  }, 3000);
  showSlidesOne((slideIndex = n));
}

function showSlidesOne(n) {
  var i;
  var slides = document.getElementsByClassName("slide-img-one");
  var dots = document.getElementsByClassName("dot-one");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " actives";
}

pause = () => {
  clearInterval(myTimer);
};

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlidesOne(slideIndex);
  }, 3000);
};

// this is for two
var slideIndexTwo = 1;

var myTimerTwo;

var slideshowcontainerTwo;

window.addEventListener("load", function () {
  showSlidesTwo(slideIndexTwo);
  myTimerTwo = setInterval(function () {
    plusSlidesTwo(1);
  }, 5000);

  //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  slideshowcontainer = document.getElementsByClassName(
    "slide-img-inner-two"
  )[0];

  //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  // slideshowcol-smd-40 = document.getElementsByClassName('slideshow-col-smd-40')[0];

  slideshowcontainer.addEventListener("mouseenter", pause);
  slideshowcontainer.addEventListener("mouseleave", resume);
});

// NEXT AND PREVIOUS CONTROL
function plusSlidesTwo(nTwo) {
  clearInterval(myTimerTwo);
  if (nTwo < 0) {
    showSlidesTwo((slideIndexTwo -= 1));
  } else {
    showSlidesTwo((slideIndexTwo += 1));
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (nTwo === -1) {
    myTimerTwo = setInterval(function () {
      plusSlidesTwo(nTwo + 2);
    }, 5000);
  } else {
    myTimerTwo = setInterval(function () {
      plusSlidesTwo(nTwo + 1);
    }, 5000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlideTwo(nTwo) {
  clearInterval(myTimerTwo);
  myTimerTwo = setInterval(function () {
    plusSlidesTwo(nTwo + 1);
  }, 5000);
  showSlidesTwo((slideIndexTwo = nTwo));
}

function showSlidesTwo(nTwo) {
  var iTwo;
  var slidesTwo = document.getElementsByClassName("slide-img-two");
  var dotsTwo = document.getElementsByClassName("dot-two");
  if (nTwo > slidesTwo.length) {
    slideIndexTwo = 1;
  }
  if (nTwo < 1) {
    slideIndexTwo = slidesTwo.length;
  }
  for (iTwo = 0; iTwo < slidesTwo.length; iTwo++) {
    slidesTwo[iTwo].style.display = "none";
  }
  for (iTwo = 0; iTwo < dotsTwo.length; iTwo++) {
    dotsTwo[iTwo].className = dotsTwo[iTwo].className.replace(" actives", "");
  }
  slidesTwo[slideIndexTwo - 1].style.display = "block";
  dotsTwo[slideIndexTwo - 1].className += " actives";
}

pauseTwo = () => {
  clearInterval(myTimerTwo);
};

resumeTwo = () => {
  clearInterval(myTimerTwo);
  myTimerTwo = setInterval(function () {
    plusSlidesTwo(slideIndexTwo);
  }, 5000);
};
// this is for three

// this is for Three
var slideIndexThree = 1;

var myTimerThree;

var slideshowcontainerThree;

window.addEventListener("load", function () {
  showSlidesThree(slideIndexThree);
  myTimerThree = setInterval(function () {
    plusSlidesThree(1);
  }, 7000);

  //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  slideshowcontainer = document.getElementsByClassName(
    "slide-img-inner-three"
  )[0];

  //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  // slideshowcol-smd-40 = document.getElementsByClassName('slideshow-col-smd-40')[0];

  slideshowcontainer.addEventListener("mouseenter", pause);
  slideshowcontainer.addEventListener("mouseleave", resume);
});

// NEXT AND PREVIOUS CONTROL
function plusSlidesThree(nThree) {
  clearInterval(myTimerThree);
  if (nThree < 0) {
    showSlidesThree((slideIndexThree -= 1));
  } else {
    showSlidesThree((slideIndexThree += 1));
  }

  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

  if (nThree === -1) {
    myTimerThree = setInterval(function () {
      plusSlidesThree(nThree + 2);
    }, 7000);
  } else {
    myTimerThree = setInterval(function () {
      plusSlidesThree(nThree + 1);
    }, 7000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlideThree(nThree) {
  clearInterval(myTimerThree);
  myTimerThree = setInterval(function () {
    plusSlidesThree(nThree + 1);
  }, 7000);
  showSlidesThree((slideIndexThree = nThree));
}

function showSlidesThree(nThree) {
  var iThree;
  var slidesThree = document.getElementsByClassName("slide-img-three");
  var dotsThree = document.getElementsByClassName("dot-three");
  if (nThree > slidesThree.length) {
    slideIndexThree = 1;
  }
  if (nThree < 1) {
    slideIndexThree = slidesThree.length;
  }
  for (iThree = 0; iThree < slidesThree.length; iThree++) {
    slidesThree[iThree].style.display = "none";
  }
  for (iThree = 0; iThree < dotsThree.length; iThree++) {
    dotsThree[iThree].className = dotsThree[iThree].className.replace(
      " actives",
      ""
    );
  }
  slidesThree[slideIndexThree - 1].style.display = "block";
  dotsThree[slideIndexThree - 1].className += " actives";
}

pauseThree = () => {
  clearInterval(myTimerThree);
};

resumeThree = () => {
  clearInterval(myTimerThree);
  myTimerThree = setInterval(function () {
    plusSlidesThree(slideIndexThree);
  }, 7000);
};

// this block of code is for the scroll top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    $("#top").fadeIn();
    $("#top").css("display", "flex");
  } else {
    $("#top").fadeOut();
  }
});
$("#top").click(function () {
  $("html ,body").animate({ scrollTop: 0 }, 800);
});
// this is for the navigation

// this is for the intersecting observers when the header is being scrolled

const header = document.querySelector("header");
const sectionOne = document.querySelector(".intersecting");

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      // this will check if the cookie block has that class and if not it does otherwise
      header.classList.add("nav-scrolled");
    } else {
      // this will check if the cookie block has that class and if not it does otherwise
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// this will scroll beautifully to the region on scroll

// scroll the product
var scrollLink = $(".scroll");
// smooth scrolling
scrollLink.click(function () {
  $("body, html").animate({ scrollTop: $(this.hash).offset().top - 90 }, 1000);
});
const section = document.querySelectorAll(".scroll-destination");
const windowsHeight = window.innerHeight;
const navigation = document.querySelectorAll(".scroll-to-location");

function reset() {
  for (var i = 0; i < navigation.length; i++) {
    navigation[i].classList.remove("active");
  }
}

window.addEventListener("scroll", function (e) {
  e.preventDefault();
  const scrollTop = window.scrollY;
  section.forEach(function (section, i) {
    if (
      section.offsetTop < scrollTop + windowsHeight / 2 &&
      scrollTop < section.offsetTop + windowsHeight / 2
    ) {
      reset();
      navigation[i].classList.add("active");
    }
  });
});

// this is for the navigation bar
$(".side-bar").click(function () {
  $(".header ul").slideToggle();
  $(".header ul").css("display", "flex");
  $(this).toggleClass("toggleClass");
  $(this).toggleClass("fa-times", "fa-bars");
});

// the fade in design for intersection observers
const faders = document.querySelectorAll(".fade-in");
const slideIns = document.querySelectorAll(".slide-in");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -10px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
slideIns.forEach((slideIn) => {
  appearOnScroll.observe(slideIn);
});

// this block of code is for the lazy load of images
// this will get all the datasrc
const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  // we are getting the attribut of data-src and placing it under a function
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  // in this block we are setting the data-src to src
  img.src = src;
}
// this is the image option
const imgOptions = {
  threshold: 0,
};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});
// end

// this block of code is for the input buttons
// get all the inputs
const inputs = document.querySelectorAll(".input");

// functions
const handleFocus = (e) => {
  // get the parent
  const parent = e.target.parentElement;
  // get the icon
  const icon = e.target.nextElementSibling;

  //add the focused class
  parent.classList.add("focused");

  // then remove success and error
  parent.classList.remove("correct");
  parent.classList.remove("wrong");

  // then remove the icon
  icon.className = "icon fas";
};

const handleBlur = (e) => {
  // get the parent
  const parent = e.target.parentElement;
  // get the icon
  const icon = e.target.nextElementSibling;

  if (e.target.checkValidity()) {
    parent.classList.add("correct");
    icon.classList.add("fa-check");
  } else {
    parent.classList.add("wrong");
    icon.classList.add("fa-exclamation");
  }
};
// add event listeners on the inputs
inputs.forEach((input) => {
  input.addEventListener("focus", handleFocus);
  input.addEventListener("blur", handleBlur);
  // input.addEventListener('input', handleInput);
});
// the
