"use strict";

// let slide = 0;
window.addEventListener("load", () => {
  init();
});

//clicking through the items

// const resizeText = (multiplier, p) => {
//   if (p.style.fontSize == "") {
//     p.style.fontSize = "1.0em";
//   }
//   p.style.fontSize = parseFloat(p.style.fontSize) + multiplier * 0.2 + "em";
// };

// const clearAllItemsStyle = (items, sectionName) => {
//   items.forEach(item => {
//     if (sectionName === "section_whatyouget") {
//       item.querySelector("h3").style.color = "grey";
//       item.querySelector("p").style.color = "grey";
//       item.querySelector("h3").style.fontSize = "1em";
//     }
//     if (sectionName === "section_platform" || sectionName === "section_why") {
//       item.querySelector("svg").style.fill = "rgb(207, 205, 205)";
//       item.querySelector("h3").style.color = "rgb(207, 205, 205)";
//     }
//     if (sectionName == "section_types") {
//       item.style.color = "#2c2e3e";
//       item.style.fontWeight = "normal";
//     }
//   });
// };

// const applyStyle = item => {
//   item.querySelector("h3").style.color = "#EF6461";
//   item.querySelector("p").style.color = "#2c2e3e";
//   resizeText(2, item.querySelector("h3"));
// };

// const removeAnimationClass = (item, classToRemove) => {
//   item.classList.remove(classToRemove);
// };

// const changeImage = (item, img) => {
//   // let img = section.querySelector("img");
//   console.log({ "item.id": item.id });
//   img.classList.add("change");

//   if (item.id === "section_whatyouget_item_1")
//     img.setAttribute("src", "img/form.png");
//   if (item.id === "section_whatyouget_item_2")
//     img.setAttribute("src", "img/platform_discover_single.png");
//   if (item.id === "section_whatyouget_item_3")
//     img.setAttribute("src", "img/home.png");

//   if (item.id === "residential")
//     img.setAttribute("src", "img/icons/buildings.svg");
//   if (item.id === "business")
//     img.setAttribute("src", "img/icons/cityscape.svg");
//   if (item.id === "recreational")
//     img.setAttribute("src", "img/icons/generic.svg");
//   if (item.id === "aestetic") img.setAttribute("src", "img/icons/fountain.svg");
//   if (item.id === "section_platform_item_1")
//     img.setAttribute("src", "img/platform_home_single-min.png");
//   if (item.id === "section_platform_item_2")
//     img.setAttribute("src", "img/platform_discover_single.png");
//   if (item.id === "section_platform_item_3")
//     img.setAttribute("src", "img/platform_chat_single.png");
//   if (item.id === "section_platform_item_4")
//     img.setAttribute("src", "img/platform_deal_single.png");
//   img.addEventListener("animationend", () => {
//     removeAnimationClass(img, "change");
//   });
// };

// const applyFill = (item, section) => {
//   if (section == section_platform) {
//     item.querySelector("svg").style.fill = "#ef6461";
//     item.querySelector("h3").style.color = "#ef6461";
//   }
//   if (section == section_why) {
//     item.querySelector("svg").style.fill = "#ef6461";
//     item.querySelector("h3").style.color = "#ef6461";
//   }

//   if (section == section_types) {
//     item.style.color = "#ef6461";
//     item.style.fontWeight = "bold";
//   }
//   if(section===arch_projects){
//     item.querySelector("svg").style.fill = "#ef6461";
//   item.querySelector("h3").style.color = "#ef6461";
//   }
// };

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
    changeImage(item, section_whatyouget_img);
  });
  item.addEventListener("mouseover", () => {
    // console.log("hover");
    item.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    item.classList.remove("hover");
    // console.log("hover");
  });
});

const changeText = (item, section) => {
  let sectionElm = document.querySelector("#" + section);
  let textDiv = sectionElm.querySelector("p");
  let title = sectionElm.querySelector(".titleToChange");
  let changeNumber = document.querySelector("#number_firms");
  textDiv.classList.add("textAnimation");
  title.classList.add("textAnimation");
  if (sectionElm.id === "types") {
    document.querySelector(".big").classList.add("textAnimation");
  }
  if (item.id === "section_platform_item_1") {
    textDiv.textContent =
      "Overview of the process helps to avoid misunderstanding and prevent mistakes. It helps to identify the ongoing state of a process to know how it can be improved. It is also a way to structure and organize the process. ";
    title.textContent = "One place for all Architecture";
  }

  if (item.id == "section_platform_item_2") {
    textDiv.textContent =
      "We all know how important the right match is. With the help of the platform you get access to portfolios of many specialists at once and can choose the one for your taste, need and budget.";
    title.textContent = "Get the right match";
    // item.querySelector("h3").classList.add()
  }

  if (item.id == "section_platform_item_3") {
    textDiv.textContent =
      "It is important to avoid misunderstanding and miscommunication. The platform provides different communication tools, including integrated messangers and cloud storages. Reduce the noise for the better result. ";
    title.textContent = "Better communication";
  }
  if (item.id == "section_platform_item_4") {
    textDiv.textContent =
      "We provide all the tools to make the process as smooth as possible. Create profile, upload insperational images and requirements, browse architects portfolios, get digital proposals, follow the process online and let your dream project come true.";
    title.textContent = "Follow the process online";
  }
  if (item.id == "section_why_item_1") {
    title.textContent = "Save time";
    textDiv.textContent =
      "Start your project and get proposals from different architects instantly. It is free and will remain free!";
  }

  if (item.id == "section_why_item_2") {
    title.textContent = "Hassle free";
    textDiv.textContent =
      "Do not spend hours googling for architects and researching their portfolios in different places, all architects are here and looking forward to collaboration.";
  }

  if (item.id == "section_why_item_3") {
    title.textContent = "Better process";
    textDiv.textContent =
      "Improve commuication, get an overview, reduce the noise, build the house of your dreams";
  }

  if (item.id == "section_why_item_4") {
    title.textContent = "No obligation";
    textDiv.textContent =
      "The platform provides smooth and natural flow with no obligations before the contract is signed. No obligations, no pressure! Take your time and choose what fits you best! ";
  }
  if (item.id == "residential") {
    document.querySelector(".big").textContent = "Residential";
    document.querySelector("#type_of_firms").textContent = "residential";
    incrementByOneForIndex(changeNumber, 410);
    textDiv.textContent =
      "Everybody dreams of a spacious luxurious or a modern cozy place to live. Whether you need a cabin, a villa or a family mansion, we have architects for any needs and budget.";
  }
  if (item.id == "business") {
    document.querySelector(".big").textContent = "Business";
    document.querySelector("#type_of_firms").textContent = "business";
    incrementByOneForIndex(changeNumber, 312);
    textDiv.textContent =
      "In a competitive environment where improvement is foremost, to hire a good architect is essential. Do you need to construct a resedential complex, a new modern hospital,a large industrial building or a family-driven brewery? We have spectialists in all of the types and they are ready to start building proposals!";
  }
  if (item.id == "recreational") {
    document.querySelector(".big").textContent = "Recreational";
    document.querySelector("#type_of_firms").textContent = "recreational";
    incrementByOneForIndex(changeNumber, 178);
    textDiv.textContent =
      "Recreational architecture has its own specifics, it is not just about functionality, it should bring people together. Sport complex, spa, playgrounds for kids, cinemas, restaurants - find the right architect with the help of the platform! ";
  }
  if (item.id == "aestetic") {
    document.querySelector(".big").textContent = "Design";
    document.querySelector("#type_of_firms").textContent = "interior";
    incrementByOneForIndex(changeNumber, 388);
    textDiv.textContent =
      "Do you want to get a breath of fresh air at your favourite place? Architects know how to create a unique and functional atmosphere. Why waiting? Start you project now and make your home even better.";
  }
  textDiv.addEventListener("animationend", () => {
    console.log("removed");
    removeAnimationClass(textDiv, "textAnimation");
  });
  title.addEventListener("animationend", () => {
    console.log("removed");
    removeAnimationClass(title, "textAnimation");
  });
  if (sectionElm.id === "types") {
    document.querySelector(".big").addEventListener("animationend", () => {
      removeAnimationClass(document.querySelector(".big"), "textAnimation");
    });
  }
};

const section_platform = document.querySelector("#section_platform");
let section_platform_items = section_platform.querySelectorAll(".icon");
let section_platform_img = section_platform.querySelector(
  ".absolute:nth-child(3)"
);
section_platform_items.forEach(item => {
  item.addEventListener("click", () => {
    console.log({ item });
    clearAllItemsStyle(section_platform_items, "section_platform");
    applyFill(item, "section_platform");
    changeText(item, "section_platform");
    changeImage(item, section_platform_img);
  });
  item.addEventListener("mouseover", () => {
    // console.log("hover");
    item.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    item.classList.remove("hover");
    // console.log("hover");
  });
});

const section_why = document.querySelector("#section_why");
let section_why_items = section_why.querySelectorAll(".items");
section_why_items.forEach(item => {
  item.addEventListener("click", () => {
    console.log({ item });
    clearAllItemsStyle(section_why_items, "section_why");
    applyFill(item, "section_why");
    changeText(item, "section_why");
    shrinkRemoveArrow();
    growAddArrow(item);
  });
  item.addEventListener("mouseover", () => {
    // console.log("hover");
    item.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    item.classList.remove("hover");
    // console.log("hover");
  });
});

const shrinkRemoveArrow = () => {
  section_why_items.forEach(bubble => {
    bubble.classList.remove("arrow");
    bubble.classList.remove("grow");
  });
};

const section_types = document.querySelector("#types");
let section_types_items = section_types.querySelectorAll(".type");
let section_types_img = section_types.querySelector(".houseIcon");
section_types_items.forEach(item => {
  item.addEventListener("click", () => {
    // console.log({ item });
    clearAllItemsStyle(section_types_items, "section_types");
    changeText(item, "types");
    changeImage(item, section_types_img);
    applyFill(item, "types");
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

//end of clicking functions

//fetching data for frontpage

const fetchTestimonials = () => {
  let endpoint = "https://architecturequote.com/wp-json/wp/v2/testimonial";
  return new Promise((resolve, reject) => {
    fetch(endpoint, {
      credentials: "same-origin"
    })
      .then(res => res.json())
      .then(function(data) {
        resolve(data);
      });
  });
};
const fetchBlogPosts = () => {
  let endpoint =
    "https://architecturequote.com/wp-json/wp/v2/posts?_embed&per_page=4";
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then(res => res.json())
      .then(function(data) {
        resolve(data);
      });
  });
};

const insertTestimonialsToDOM = async testimonials => {
  // console.log({ slide });
  let template = document.querySelector("#testimonialsTemplate").content;
  for (let i = 0; i < testimonials.length; i++) {
    let clone = template.cloneNode(true);
    clone.querySelector(".textTestimonials").innerHTML =
      testimonials[i].content.rendered;
    clone.querySelector(".titleTestimonials").textContent =
      testimonials[i].title.rendered;
    clone.querySelector(".name").textContent = testimonials[i].authors_name;
    clone.querySelector(".company").textContent = testimonials[i].company;
    console.log({ "testimonials[i]": testimonials[i] });
    const hrefData = await fetch(
      testimonials[i]._links["wp:featuredmedia"][0].href
    ).then(res => res.json());
    console.log({ hrefData });

    clone.querySelector(".userImage").style.backgroundImage =
      "url(" + hrefData.media_details.sizes.medium.source_url + ")";

    document.querySelector("#testimonials").appendChild(clone);
  }
  let clients = Array.from(document.querySelectorAll(".client"));
  console.log(clients);
  clients[0].classList.add("shown");

  document.querySelector(".arrowRight").addEventListener("click", () => {
    clearClass(clients);
    moveRight(clients);
    // first it takes the first elements and then puts it last
  });
  document.querySelector(".arrowLeft").addEventListener("click", () => {
    clearClass(clients);
    moveLeft(clients);
    // takes the last element and adds in to the front
  });
};

const clearClass = clients => {
  clients.forEach(item => {
    item.classList.remove("shown");
    item.classList.remove("shownLeft");
    item.classList.remove("shownRight");
  });
};
const moveLeft = clients => {
  let lastElement = clients.pop();
  clients.unshift(lastElement);
  console.log(clients);
  clients[0].classList.add("shownLeft");
};
const moveRight = clients => {
  let firstElement = clients.shift();
  clients.push(firstElement);
  console.log(clients);
  clients[0].classList.add("shownRight");
};

const insertBlogsToDom = async blogPosts => {
  const section = document.querySelector("#frontpageBlogs");
  let templateBlogs = document.querySelector("#blogsTemplate").content;
  for (let i = 0; i < blogPosts.length; i++) {
    let clone = templateBlogs.cloneNode(true);
    clone.querySelector(".blogTitle").textContent = blogPosts[i].title.rendered;

    let a = document.createElement("a");
    a.href = "subpage_blog.html?id=" + blogPosts[i].id;
    a.appendChild(clone.querySelector(".blogTitle"));
    clone.querySelector(".boxStyle").appendChild(a);

    const hrefDataUrl = await fetch(
      blogPosts[i]._links["wp:featuredmedia"][0].href
    ).then(res => res.json());
    // console.log({ hrefData });`id -u
    clone.querySelector(".boxStyle").style.backgroundImage =
      "url(" + hrefDataUrl.media_details.sizes.medium_large.source_url + ")";
    section.appendChild(clone);
  }
};

// const startSvgAnimation = () => {
//   let title = document.querySelector(".hero_text>h1");
//   let subTitle = document.querySelector(".hero_text>p");
//   title.classList.add("textAnimation");
//   subTitle.classList.add("textAnimation");
//   let svg = document.querySelector(".drawSvg");
//   let drawFirst = document.querySelector("#first").children;
//   let n = 0;
//   svg.style.visibilty = "initial;";

//   console.log(drawFirst);
//   for (let i = 0; i < drawFirst.length; i++) {
//     drawFirst[i].classList.add("draw");
//     // drawFirst[i].style.animationDelay = (n += 0.03) + "s";
//     // console.log(n);
//   }
//   greenSockFade();
// };

// const greenSockFade = () => {
//   let figure = document.querySelector(".heroImg");
//   TweenMax.fromTo(
//     figure,
//     1,
//     {
//       opacity: 0
//     },
//     {
//       opacity: 1,
//       ease: Power3.easeIn
//     },
//     5
//   );

//   let laptop = document.querySelector(".hero_laptop");
//   TweenMax.from(
//     laptop,
//     1,
//     {
//       opacity: 0,
//       ease: Power3.easeIn
//     },
//     10
//   );
// };

const init = async slide => {
  document.querySelector(".loaderWrapper").classList.add("hideLoader");
  startSvgAnimation();
  const testimonials = await fetchTestimonials();
  const blogPosts = await fetchBlogPosts();
  // console.log(blogPosts);
  // console.log({ testimonials });
  // console.log({ slide });
  insertTestimonialsToDOM(testimonials);
  insertBlogsToDom(blogPosts);
};
