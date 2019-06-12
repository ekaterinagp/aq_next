"use strict";
if (screen.width <= 1024) {
  let timelineItems = document.querySelectorAll(".timelineWrapper");
  timelineItems.forEach(item => {
    item.addEventListener("click", () => {
      item.querySelector(".timelineText").classList.toggle("showTimeContent");
      item.querySelector("p").style.opacity = "1";
    });
  });
}
let incrementByOneForIndex = (content, u, time) => {
  let i = 0;
  setInterval(() => {
    if (i == u) clearInterval(this);
    else content.innerHTML = i++;
  }, time);
};

let timelineAnimation = () => {
  let tl = new TimelineMax();
  tl.staggerFromTo(
    ".timelineWrapper",
    0.06,
    {
      scale: 1.2,
      opacity: 0,
      skewY: 15
    },
    { scale: 1, opacity: 1, skewY: 0, ease: Power1.easeInOut },
    0.05
  ).staggerFromTo(
    ".timelineContent",
    0.06,
    {
      opacity: 0
    },
    {
      opacity: 1
    },
    0.05
  );
  if (document.querySelector("#prosWrapper")) {
    setTimeout(() => {
      incrementByOneForIndex(clientsNumber, 144, 10);
    }, 500);
  }
};
let element = document.querySelector(".timelineWrapper");
let elementHeight = element.clientHeight;

document.addEventListener("scroll", () => {
  console.log("scrolling");
  animate();
});

let inView = () => {
  let windowHeight = window.innerHeight;

  let scrollY = window.scrollY || window.pageYOffset;

  let scrollPosition = scrollY + windowHeight;

  let elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight;

  if (scrollPosition > elementPosition) {
    return true;
    console.log("true");
  }
  console.log("false");
  return false;
};

// animate element when it is in view

// Set animation running to false
let isInViewAnimationRunning = false;
let animate = () => {
  // Only go further if no animation is running
  if (!isInViewAnimationRunning) {
    console.log("it's not in view");

    let isInView = inView();

    if (isInView) {
      console.log("it's in view");
      isInViewAnimationRunning = true;
      timelineAnimation();
    }
  }
};
