window.addEventListener("load", () => {
  init();
});

let speechBubbles = document.querySelectorAll(".items");
const architect_section = document.querySelector("#arch_projects");
speechBubbles.forEach(bubble => {
  bubble.addEventListener("click", () => {
    // console.log(bubble);
    clearAllItemsStyle(speechBubbles, "arch_projects");
    applyFill(bubble);
    changeText(bubble, arch_projects);
    shrinkRemoveArrow();
    growAddArrow(bubble);
  });
  bubble.addEventListener("mouseover", () => {
    // console.log("hover");
    bubble.classList.add("hover");
  });
  bubble.addEventListener("mouseleave", () => {
    bubble.classList.remove("hover");
    // console.log("hover");
  });
});

const applyFill = item => {
  item.querySelector("svg").style.fill = "#ef6461";
  item.querySelector("h3").style.color = "#ef6461";
};
const changeText = (item, section) => {
  let textDiv = section.querySelector("p");
  let title = section.querySelector("h2");
  textDiv.classList.add("textAnimation");
  title.classList.add("textAnimation");
  if (item.id == "organic") {
    title.textContent = "Organically generated local projects";
    textDiv.textContent =
      "We validate organic leads that sign up through our site and deliver them instantly";
  }

  if (item.id == "freelance") {
    title.textContent = "Freelance opportunities: small and large projects";
    textDiv.textContent =
      "We aggrigate opportunities from around the globe. Connect. Bid. Win.";
  }
  if (item.id == "tender") {
    title.textContent = "Government tenders and RFPs from all over Europe";
    textDiv.textContent =
      "Build a proposal on the platform. Export. Win a project.";
  }
  textDiv.addEventListener("animationend", () => {
    console.log("removed");
    removeAnimationClass(textDiv, "textAnimation");
  });
  title.addEventListener("animationend", () => {
    console.log("removed");
    removeAnimationClass(title, "textAnimation");
  });
};
const removeAnimationClass = (item, classToRemove) => {
  item.classList.remove(classToRemove);
};

const growAddArrow = box => {
  box.classList.add("arrow");
  box.classList.add("grow");
};
const shrinkRemoveArrow = () => {
  speechBubbles.forEach(bubble => {
    bubble.classList.remove("arrow");
    bubble.classList.remove("grow");
  });
};

let startSvgAnimation = () => {
  let title = document.querySelector(".hero_text>h1");
  let subTitle = document.querySelector(".hero_text>p");
  title.classList.add("textAnimation");
  subTitle.classList.add("textAnimation");
  let svg = document.querySelector(".drawSvg");
  let drawFirst = document.querySelector("#first").children;
  // let n = 0;
  svg.style.visibilty = "initial;";
  // console.log(drawFirst);
  for (let i = 0; i < drawFirst.length; i++) {
    drawFirst[i].classList.add("draw");
    // drawFirst[i].style.animationDelay = (n += 0.03) + "s";
    // console.log(n);
  }
  greenSockFade();
};

let greenSockFade = () => {
  let figure = document.querySelector(".heroImg");
  TweenMax.fromTo(
    figure,
    1,
    {
      opacity: 0
    },
    {
      opacity: 1,
      ease: Power3.easeIn
    },
    5
  );

  let laptop = document.querySelector(".hero_laptop");
  TweenMax.from(
    laptop,
    1,
    {
      opacity: 0,
      ease: Power3.easeIn
    },
    10
  );
};
const section_better = document.querySelector("#better");
let section_better_items = section_better.querySelectorAll(".item");
let section_better_img = section_better.querySelector(".absolute:nth-child(2)");
section_better_items.forEach(item => {
  item.addEventListener("click", () => {
    clearAllItemsStyle(section_better_items, "better");
    // console.log({ item });
    applyStyle(item);
    changeImage(item, section_better_img);
  });
  item.addEventListener("mouseover", () => {
    // console.log("hover");
    item.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    item.classList.remove("hover");
    // console.log("hoverOut");
  });
});
const applyStyle = item => {
  item.querySelector("h3").style.color = "#EF6461";
  item.querySelector("p").style.color = "#EF6461";
  resizeText(2, item.querySelector("h3"));
};
const resizeText = (multiplier, p) => {
  if (p.style.fontSize == "") {
    p.style.fontSize = "1.0em";
  }
  p.style.fontSize = parseFloat(p.style.fontSize) + multiplier * 0.2 + "em";
};
const changeImage = (item, img) => {
  // let img = section.querySelector("img");
  // console.log({ "item.id": item.id });
  img.classList.add("change");
  if (item.id === "better_item_1")
    img.setAttribute("src", "img/architect_project_single.png");
  if (item.id === "better_item_2")
    img.setAttribute("src", "img/architect_leads_single.png");
  if (item.id === "better_item_3")
    img.setAttribute("src", "img/architect_tender_single.png");
  if (item.id === "better_item_4")
    img.setAttribute("src", "img/architect_view_project_single.png");
  img.addEventListener("animationend", () => {
    removeAnimationClass(img, "change");
  });
};
const clearAllItemsStyle = (items, sectionName) => {
  items.forEach(item => {
    if (sectionName === "better") {
      item.querySelector("h3").style.color = "grey";
      item.querySelector("p").style.color = "grey";
      item.querySelector("h3").style.fontSize = "1em";
    }
    if (sectionName === "arch_projects") {
      item.querySelector("svg").style.fill = "lightgrey";
      item.querySelector("h3").style.color = "lightgrey";
    }
  });
};

// function timelineAnimation() {
//   let tl = new TimelineMax();
//   tl.staggerFromTo(
//     ".timelineWrapper",
//     0.3,
//     {
//       scale: 1.2,
//       opacity: 0,
//       skewY: 15
//     },
//     { scale: 1, opacity: 1, skewY: 0, ease: Power1.easeInOut },
//     0.2
//   ).staggerFromTo(
//     ".timelineImg",
//     0.3,
//     {
//       opacity: 0
//     },
//     {
//       opacity: 1
//     },
//     0.1
//   );
// }
// let element = document.querySelector(".timelineWrapper");
// var elementHeight = element.clientHeight;

// // listen for scroll event and call animate function
// document.addEventListener("scroll", animate);

// // check if element is in view
// function inView() {
//   // get window height
//   var windowHeight = window.innerHeight;
//   // get number of pixels that the document is scrolled
//   var scrollY = window.scrollY || window.pageYOffset;

//   // get current scroll position (distance from the top of the page to the bottom of the current viewport)
//   var scrollPosition = scrollY + windowHeight;
//   // get element position (distance from the top of the page to the bottom of the element)
//   var elementPosition =
//     element.getBoundingClientRect().top + scrollY + elementHeight;

//   // is scroll position greater than element position? (is element in view?)
//   if (scrollPosition > elementPosition) {
//     return true;
//   }

//   return false;
// }

// // animate element when it is in view

// // Set animation running to false
// let isInViewAnimationRunning = false;
// function animate() {
//   // Only go further if no animation is running
//   if (!isInViewAnimationRunning) {
//     // is element in view?
//     let isInView = inView();
//     // If element is in view, go ahead and start animation and set animation is running to true, to avoid starting animation over and over
//     if (isInView) {
//       isInViewAnimationRunning = true;
//       timelineAnimation();
//     }
//   }
// }
let init = () => {
  document.querySelector(".loaderWrapper").classList.add("hideLoader");
  // startHeroAnimation();
  startSvgAnimation();
};
