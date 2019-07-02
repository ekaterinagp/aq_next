"use strict";

const createButtonForForm = (textStr, additionalClass) => {
  let button = document.createElement("button");
  let classesToAdd = ["orange_button", additionalClass];

  button.classList.add(...classesToAdd);

  button.textContent = textStr;
  button.addEventListener("click", () => {
    createFormWrapper();
  });
  return button;
};

// const changeSrc = (slideShow, imgArray) => {
//   for (let i = 0; i < imgArray.length; i++) {
//     slideShow.src = imgArray[i].num;
//     if (i > imgArray.length) {
//       i = 0;
//     }
//   }
// };

//creates a simple above-the-fold with a background image, h1 and subtitle from WP
const createAboveTheFold = (parts, img, i) => {
  let abovetheFoldHolder = document.createElement("div");
  abovetheFoldHolder.setAttribute("id", "hero-img");
  abovetheFoldHolder.setAttribute("class", "heroWireframe");
  abovetheFoldHolder.style.backgroundImage =
    "url(" + img.media_details.sizes.large.source_url + ")";
  let divForText = document.createElement("div");
  divForText.setAttribute("class", "hero_text");
  let h1 = document.createElement("h1");
  h1.innerHTML = parts[i].title.rendered;
  let p = document.createElement("p");
  p.setAttribute("class", "sub_title");
  p.innerHTML = parts[i].content.rendered;
  let button = createButtonForForm("Get your free estimate", "freeEst");
  divForText.append(h1, p, button);
  abovetheFoldHolder.append(divForText);
  document.querySelector(".wrapper").append(abovetheFoldHolder);
};

const createSimpleImgTextLayout = (parts, pic, i) => {
  let div = document.createElement("div");
  div.setAttribute("id", "wireframe_description");
  div.setAttribute("class", "wrapper_2_columns");
  // let gradient = document.createElement("div");
  // gradient.setAttribute("class", "gradient");
  let h1 = document.createElement("h1");
  h1.setAttribute("class", "header");
  h1.textContent = parts[i].title.rendered;
  let h2 = document.createElement("h2");
  h2.classList.add("sub_title");
  h2.innerHTML = parts[i].excerpt.rendered;
  let divForP = document.createElement("div");
  let pText = document.createElement("p");
  let classesToAdd = ["description_text", "textPadding"];
  pText.classList.add(...classesToAdd);
  pText.innerHTML = parts[i].content.rendered;
  divForP.append(pText);
  // let divForImg = document.createElement("div");
  // divForImg.setAttribute("class", "platformImg");
  let img = document.createElement("img");
  img.setAttribute("id", "platform");
  img.src = pic.media_details.sizes.large.source_url;
  // divForImg.appendChild(img);
  div.append(h1, h2, divForP, img);
  document.querySelector(".wrapper").append(div);
};

const createDivFromWP = (parts, i) => {
  let divHolder = document.createElement("div");
  divHolder.setAttribute("id", "benefits");
  // divHolder.setAttribute("class", "wrapper_2_columns");
  // let gradient = document.createElement("div");
  // gradient.setAttribute("class", "gradient_reverse");
  let h1 = document.createElement("h1");
  h1.setAttribute("class", "header");
  h1.innerHTML = parts[i].title.rendered;
  let pDiv = document.createElement("div");
  pDiv.id = "benefits_list";
  let pText = document.createElement("p");
  pText.innerHTML = parts[i].content.rendered;

  pDiv.append(pText);
  divHolder.append(h1, pDiv);
  document.querySelector(".wrapper").append(divHolder);
};

const createSimple2ColumnsBGTextRight = (parts, img, i) => {
  let divHolder = document.createElement("div");
  divHolder.setAttribute("id", "forMore");
  divHolder.setAttribute("class", "textOnImage");
  divHolder.classList.add("relativeDiv");
  divHolder.style.backgroundImage =
    "url(" + img.media_details.sizes.large.source_url + ")";
  let divForsvg1 = document.createElement("div");
  divForsvg1.classList.add("pro");
  let imgchecked = document.createElement("img");
  imgchecked.src = "img/icons/checked-red.svg";
  imgchecked.classList.add("checkedWireframe");

  let h3forSvg = document.createElement("h3");
  h3forSvg.textContent = "Your Data is Safe with Us";
  let linkToRead = document.createElement("a");
  linkToRead.href = "policy.html";
  linkToRead.classList.add("link");
  linkToRead.textContent = "Read about our data policy";
  let divForsvg2 = document.createElement("div");
  divForsvg2.classList.add("pro");
  let imgchecked2 = document.createElement("img");
  imgchecked2.src = "img/icons/checked-red.svg";
  imgchecked2.classList.add("checkedWireframe");
  let h32 = document.createElement("h3");
  h32.textContent = "No obligation";
  divForsvg1.append(imgchecked, h3forSvg, linkToRead);
  divForsvg2.append(imgchecked2, h32);
  let wrapperPro = document.createElement("div");
  let classesToAdd = ["wrapper_pro", "wrapper_2_columns"];
  wrapperPro.classList.add(...classesToAdd);
  wrapperPro.append(divForsvg1, divForsvg2);
  let h1 = document.createElement("h1");
  h1.setAttribute("class", "header");
  h1.innerHTML = parts[i].title.rendered;
  let pDiv = document.createElement("div");
  pDiv.id = "more";

  let pText = document.createElement("p");
  pText.className = "sub_title";
  pText.innerHTML = parts[i].content.rendered;
  let link = document.createElement("a");
  link.href = "platform.html";
  let button = createButtonForForm("Read more", "class");
  link.append(button);
  pDiv.append(pText, link, wrapperPro);
  divHolder.append(h1, pDiv);
  document.querySelector(".wrapper").append(divHolder);
};

const createTimeline = (parts, i) => {
  let div = document.createElement("div");
  div.id = "timelineSection";
  // div.setAttribute("class", "fullScreen");
  let h1 = document.createElement("h1");
  h1.innerHTML = parts[i].title.rendered;
  let divForContent = document.createElement("div");
  divForContent.innerHTML = parts[i].content.rendered;
  div.append(h1, divForContent);
  document.querySelector(".wrapper").append(div);
};

const sellingPointsForIndividuals = (parts, i, imgSrc) => {
  let divHolder = document.createElement("div");
  divHolder.id = "section_whatyouget";
  let classesToAdd = [ "wrapper_2_columns_rows"];
  divHolder.classList.add(...classesToAdd);
  let h1 = document.createElement("h1");
  h1.classList.add("section_title");
  h1.textContent = parts[i].title.rendered;
  let h2 = document.createElement("h2");
  h2.classList.add("sub_title");
  h2.innerHTML = parts[i].excerpt.rendered;
  let divTextHolder = document.createElement("div");
  divTextHolder.classList.add("textPadding");
  divTextHolder.innerHTML = parts[i].content.rendered;
  let divImgHolder = document.createElement("div");
  divImgHolder.classList.add("img_wrapper");
  let img_1 = document.createElement("img");
  img_1.classList.add("absolute");
  img_1.src = "img/empty.png";
  let img_2 = document.createElement("img");
  img_2.classList.add("absolute");
  img_2.src = "img/form.png";
  divImgHolder.append(img_1, img_2);
  divHolder.append(h1, h2, divTextHolder, divImgHolder);
  document.querySelector(".wrapper").append(divHolder);
  sectionWhatYouGet(imgSrc);
};

const sectionWhatYouGet = imgSrc => {
  const section_whatyouget = document.querySelector("#section_whatyouget");
  let section_whatyouget_items = section_whatyouget.querySelectorAll(".item");
  let section_whatyouget_img = section_whatyouget.querySelector(
    ".absolute:nth-child(2)"
  );
  section_whatyouget_items.forEach(item => {
    item.addEventListener("click", () => {
      clearAllItemsStyle(section_whatyouget_items, "section_whatyouget");
      console.log({ item });
      applyStyle(item);
      changeImage(item, section_whatyouget_img, imgSrc);
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
};

const changeImage = (item, img, imgSrc) => {
  // let img = section.querySelector("img");
  console.log({ "item.id": item.id });

  img.classList.add("change");
  if (item.id === "section_whatyouget_item_1")
    img.setAttribute("src", "img/form.png");
  if (item.id === "section_whatyouget_item_2")
    img.setAttribute("src", "img/platform_discover_single.png");
  if (item.id === "section_whatyouget_item_3") img.setAttribute("src", imgSrc);

  if (item.id === "section_platform_item_1")
    img.setAttribute("src", "img/platform_home_single.png");
  if (item.id === "section_platform_item_2")
    img.setAttribute("src", "img/platform_discover_single.png");
  if (item.id === "section_platform_item_3")
    img.setAttribute("src", "img/platform_chat_single.png");
  if (item.id === "section_platform_item_4")
    img.setAttribute("src", "img/platform_deal_single.png");
  img.addEventListener("animationend", () => {
    removeAnimationClass(img, "change");
  });
};

const changeText = (item, section) => {
  let textDiv = section.querySelector("p");
  // let title = section.querySelector(".titleToChange");

  textDiv.classList.add("textAnimation");
  // title.classList.add("textAnimation");
  if (item.id === "section_platform_item_1") {
    textDiv.textContent =
      "Overview of the process helps to avoid misunderstanding and prevent mistakes. It helps to identify the ongoing state of a process to know how it can be improved. It is also a way to structure and organize the process. ";
    // title.textContent = "One place for all Architecture";
  }

  if (item.id == "section_platform_item_2") {
    textDiv.textContent =
      "We all know how important the right match is. With the help of the platform you get access to portfolios of many specialists at once and can choose the one for your taste, need and budget.";
    // title.textContent = "Get the right match";
    // item.querySelector("h3").classList.add()
  }

  if (item.id == "section_platform_item_3") {
    textDiv.textContent =
      "It is important to avoid misunderstanding and miscommunication. The platform provides different communication tools, including integrated messangers and cloud storages. Reduce the noise for the better result. ";
    // title.textContent = "Better communication";
  }
  if (item.id == "section_platform_item_4") {
    textDiv.textContent =
      "We provide all the tools to make the process as smooth as possible. Create profile, upload insperational images and requirements, browse architects portfolios, get digital proposals, follow the process online and let your dream project come true.";
  }

  textDiv.addEventListener("animationend", () => {
    console.log("removed");
    removeAnimationClass(textDiv, "textAnimation");
  });
};

const clearAllItemsStyle = (items, sectionName) => {
  items.forEach(item => {
    if (sectionName === "section_whatyouget") {
      item.querySelector("h3").style.color = "grey";
      item.querySelector("p").style.color = "grey";
      item.querySelector("h3").style.fontSize = "1em";
    }
    if (sectionName === "section_platform" || sectionName === "section_why") {
      item.querySelector("img").style.opacity = ".2";
      item.querySelector("h3").style.opacity = ".2";
    }
  });
};
const applyFill = (item, section) => {
  if (section == section_platform) {
    item.querySelector("img").style.opacity = "1";
    item.querySelector("h3").style.opacity = "1";
    item.querySelector("h3").style.color = "#ef6461";
  }
};

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

const removeAnimationClass = (item, classToRemove) => {
  item.classList.remove(classToRemove);
};

const sectionOverview = () => {
  const section_platform = document.querySelector("#section_platform");
  let section_platform_items = section_platform.querySelectorAll(".icon");
  let section_platform_img = section_platform.querySelector(
    ".absolute:nth-child(3)"
  );
  section_platform_items.forEach(item => {
    item.addEventListener("click", () => {
      console.log({ item });
      clearAllItemsStyle(section_platform_items, "section_platform");
      applyFill(item, section_platform);
      changeText(item, section_platform);
      changeImage(item, section_platform_img);
    });
    item.addEventListener("mouseover", () => {
      console.log("hover");
      item.classList.add("hoverwf");
    });
    item.addEventListener("mouseleave", () => {
      item.classList.remove("hoverwf");
      console.log("hoverOut");
    });
  });
};

const sellingPointsForBusiness = (parts, i) => {
  let divHolder = document.createElement("div");
  divHolder.id = "platform";
  let classesToAdd = ["widthHeight100", "backgroundWhite"];
  divHolder.classList.add(...classesToAdd);
  let divPlatformBox = document.createElement("div");
  let classesToAdd_1 = ["platformBox", "boxStyle", "wrapper_rows_1_1_2"];
  divPlatformBox.classList.add(...classesToAdd_1);
  divPlatformBox.id = "section_platform";
  let divForH1 = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.classList.add("section_title");
  h1.innerHTML = parts[i].title.rendered;
  let h2 = document.createElement("h2");
  h2.classList.add("sub_title");
  h2.innerHTML = parts[i].excerpt.rendered;
  divForH1.append(h1, h2);
  let divWrapper = document.createElement("div");
  divWrapper.classList.add("wrapper_4_columns");
  let divItem = document.createElement("div");
  divItem.id = "section_platform_item_1";
  divItem.classList.add("icon");
  let img_1 = document.createElement("img");
  img_1.src = "img/icons/logo-red.svg";
  let h3 = document.createElement("h3");
  h3.textContent = "Overview";
  divItem.append(img_1, h3);
  let divItem_2 = document.createElement("div");
  divItem_2.id = "section_platform_item_2";
  divItem_2.classList.add("icon");
  let img_2 = document.createElement("img");
  img_2.src = "img/icons/puzzle-red.svg";
  let h3_2 = document.createElement("h3");
  h3_2.textContent = "Matching";
  divItem_2.append(img_2, h3_2);
  let divItem_3 = document.createElement("div");
  divItem_3.id = "section_platform_item_3";
  divItem_3.classList.add("icon");
  let img_3 = document.createElement("img");
  img_3.src = "img/icons/communication-red.svg";
  let h3_3 = document.createElement("h3");
  h3_3.textContent = "Communication";
  divItem_3.append(img_3, h3_3);
  let divItem_4 = document.createElement("div");
  divItem_4.id = "section_platform_item_4";
  divItem_4.classList.add("icon");
  let img_4 = document.createElement("img");
  img_4.src = "img/icons/checked-red.svg";
  let h3_4 = document.createElement("h3");
  h3_4.textContent = "Deal flow";
  divItem_4.append(img_4, h3_4);
  divWrapper.append(divItem, divItem_2, divItem_3, divItem_4);
  let divWrapper_2 = document.createElement("div");
  let classesToAdd_2 = ["another_color", "wrapper_2_columns"];
  divWrapper_2.classList.add(...classesToAdd_2);
  let divPadding = document.createElement("div");
  divPadding.classList.add("padding0em3em");
  let p = document.createElement("p");
  p.id = "textHolderForPlatform";
  p.innerHTML = parts[i].content.rendered;
  // let link = document.createElement("a");
  // link.href = "platform.html";
  let button = createButtonForForm("Start you project", "freeEst");
  // link.append(button);
  divPadding.append(p, button);
  let imgAbsolute = document.createElement("img");
  imgAbsolute.classList.add("absolute");
  imgAbsolute.src = "img/empty.png";
  let imgForLaptop = document.createElement("img");
  let classesToAdd_3 = ["absolute", "browser"];
  imgForLaptop.classList.add(...classesToAdd_3);
  imgForLaptop.src = "img/platform_home_single.png";
  divWrapper_2.append(divPadding, imgAbsolute, imgForLaptop);
  divPlatformBox.append(divForH1, divWrapper, divWrapper_2);
  divHolder.append(divPlatformBox);
  document.querySelector(".wrapper").append(divHolder);
  sectionOverview();
};

// // timeline

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
};

let checkIfInView = () => {
  let element = document.querySelector(".timelineWrapper");
  let elementHeight = element.clientHeight;

  // listen for scroll event and call animate function
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
      // console.log("true");
    }
    // console.log("false");
    return false;
  };

  // animate element when it is in view

  // Set animation running to false
  let isInViewAnimationRunning = false;
  let animate = () => {
    document.querySelector(".loaderWrapper").classList.add("hideLoader");
    // Only go further if no animation is running
    if (!isInViewAnimationRunning) {
      // console.log("it's not in view");
      // is element in view?
      let isInView = inView();
      // If element is in view, go ahead and start animation and set animation is running to true, to avoid starting animation over and over
      if (isInView) {
        // console.log("it's in view");
        isInViewAnimationRunning = true;
        timelineAnimation();
      }
    }
  };
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
