"use strict";

const resizeText = (multiplier, p) => {
  if (p.style.fontSize == "") {
    p.style.fontSize = "1.0em";
  }
  p.style.fontSize = parseFloat(p.style.fontSize) + multiplier * 0.2 + "em";
};

const clearAllItemsStyle = (items, sectionName) => {
  items.forEach(item => {
    if (sectionName === "section_whatyouget") {
      item.querySelector("h3").style.color = "grey";
      item.querySelector("p").style.color = "grey";
      item.querySelector("h3").style.fontSize = "1em";
    }
    if (sectionName === "section_platform" || sectionName === "section_why") {
      item.querySelector("svg").style.fill = "rgb(207, 205, 205)";
      item.querySelector("h3").style.color = "rgb(207, 205, 205)";
    }
    if (sectionName == "section_types") {
      item.style.color = "#2c2e3e";
      item.style.fontWeight = "normal";
    }
    if (sectionName === "section_network") {
      item.querySelector("h3").style.color = "grey";
      item.querySelector("p").style.color = "grey";
      item.querySelector("h3").style.fontSize = "1em";
    }
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

const applyStyle = item => {
  item.querySelector("h3").style.color = "#EF6461";
  item.querySelector("p").style.color = "#2c2e3e";
  resizeText(2, item.querySelector("h3"));
};

const removeAnimationClass = (item, classToRemove) => {
  item.classList.remove(classToRemove);
};

const changeImage = (item, img) => {
  // let img = section.querySelector("img");
  console.log({ "item.id": item.id });
  img.classList.add("change");

  if (item.id === "section_whatyouget_item_1")
    img.setAttribute("src", "img/form.png");
  if (item.id === "section_whatyouget_item_2")
    img.setAttribute("src", "img/platform_discover_single.png");
  if (item.id === "section_whatyouget_item_3")
    img.setAttribute("src", "img/home.png");

  if (item.id === "residential")
    img.setAttribute("src", "img/icons/buildings.svg");
  if (item.id === "business")
    img.setAttribute("src", "img/icons/cityscape.svg");
  if (item.id === "recreational")
    img.setAttribute("src", "img/icons/generic.svg");
  if (item.id === "aestetic") img.setAttribute("src", "img/icons/fountain.svg");
  if (item.id === "section_platform_item_1")
    img.setAttribute("src", "img/platform_home_single-min.png");
  if (item.id === "section_platform_item_2")
    img.setAttribute("src", "img/platform_discover_single.png");
  if (item.id === "section_platform_item_3")
    img.setAttribute("src", "img/platform_chat_single.png");
  if (item.id === "section_platform_item_4")
    img.setAttribute("src", "img/platform_deal_single.png");
  if (item.id === "better_item_1")
    img.setAttribute("src", "img/architect_project_single.png");
  if (item.id === "better_item_2")
    img.setAttribute("src", "img/architect_leads_single.png");
  if (item.id === "better_item_3")
    img.setAttribute("src", "img/architect_tender_single.png");
  if (item.id === "better_item_4")
    img.setAttribute("src", "img/architect_view_project_single.png");
  if (item.id === "network_item_1")
    img.setAttribute("src", "img/platform_brief_single-min.png");
  if (item.id === "network_item_2")
    img.setAttribute("src", "img/platform_deal_single-min.png");
  if (item.id === "network_item_3")
    img.setAttribute("src", "img/platform_discover_single-min.png");
  img.addEventListener("animationend", () => {
    removeAnimationClass(img, "change");
  });
};

let applyFill = (item, section) => {
  console.log({ section });
  if (section === "section_platform") {
    item.querySelector("svg").style.fill = "#ef6461";
    item.querySelector("h3").style.color = "#ef6461";
  }
  if (section == "section_why") {
    item.querySelector("svg").style.fill = "#ef6461";
    item.querySelector("h3").style.color = "#ef6461";
  }

  if (section == "types") {
    item.style.color = "#ef6461";
    item.style.fontWeight = "bold";
  }
  if (section === "arch_projects") {
    item.querySelector("svg").style.fill = "#ef6461";
    item.querySelector("h3").style.color = "#ef6461";
  }
};

const incrementByOneForIndex = (content, u) => {
  let i = 0;
  setInterval(function() {
    if (i == u) {
      clearInterval(this);
    } else {
      content.innerHTML = i++;
    }
  }, 5);
};

const growAddArrow = box => {
  box.classList.add("arrow");
  box.classList.add("grow");
};

const startSvgAnimation = () => {
  let title = document.querySelector(".hero_text>h1");
  let subTitle = document.querySelector(".hero_text>p");
  title.classList.add("textAnimation");
  subTitle.classList.add("textAnimation");
  let svg = document.querySelector(".drawSvg");
  let drawFirst = document.querySelector("#first").children;
  let n = 0;
  svg.style.visibilty = "initial;";

  console.log(drawFirst);
  for (let i = 0; i < drawFirst.length; i++) {
    drawFirst[i].classList.add("draw");
    // drawFirst[i].style.animationDelay = (n += 0.03) + "s";
    // console.log(n);
  }
  greenSockFade();
};

const greenSockFade = () => {
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

// timeline

let timelineWrapper = document.querySelector(".timelineWrapper");
let timelineHeight;

if (timelineWrapper) {
  if (screen.width <= 1024) {
    let timelineItems = document.querySelectorAll(".timelineWrapper");
    timelineItems.forEach(item => {
      item.addEventListener("click", () => {
        item.querySelector(".timelineText").classList.toggle("showTimeContent");
        item.querySelector("p").style.opacity = "1";
      });
    });
  }

  timelineHeight = timelineWrapper.clientHeight;
}

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

document.addEventListener("scroll", () => {
  console.log("scrolling");
  animate();
});

let inView = () => {
  let windowHeight = window.innerHeight;

  let scrollY = window.scrollY || window.pageYOffset;

  let scrollPosition = scrollY + windowHeight;

  let elementPosition =
    timelineWrapper.getBoundingClientRect().top + scrollY + timelineHeight;

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

    let isInView;

    if (timelineWrapper) {
      isInView = inView();
    }

    if (isInView) {
      console.log("it's in view");
      isInViewAnimationRunning = true;
      timelineAnimation();
    }
  }
};

//MENU
let menuOpen = false;
const menuIcon = document.querySelector(".menuIcon");
const menu = document.querySelector(".menu");
const bars = menuIcon.querySelectorAll("rect");
let menuLinks = document.querySelectorAll(".menu>ul>li");
const header = document.querySelector("header");
// let dropdown = document.querySelector(".dropdown-content");
menuIcon.addEventListener("click", () => {
  // console.log("menu clicked")
  toggleMenu();
});
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    toggleMenu;
  });
});
// Link clicked menu closed

let toggleMenu = () => {
  // console.log("oopen");
  menuOpen = !menuOpen;
  bars[0].classList.toggle("rotateDown");
  bars[1].classList.toggle("fadeOut");
  bars[2].classList.toggle("rotateUp");
  menu.classList.toggle("hiddenMenu");
};

//MENU ends
