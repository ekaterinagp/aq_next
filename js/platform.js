let endpoint = "https://architecturequote.com/wp-json/wp/v2/faq";

window.addEventListener("load", () => {
  init();
});

const fetchFaq = () => {
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then(response => response.json())
      .then(function(data) {
        resolve(data);
      });
  });
};

let showFaq = faqData => {
  let templateFaq = document.querySelector(".faqTemplate").content;
  let allFaq = document.querySelector("section");

  // clone.querySelector(".question").textContent = faqData[0].title.rendered;
  // clone.querySelector(".answer").innerHTML = faqData[0].content.rendered;
  for (let i = 0; i < faqData.length; i++) {
    let clone = templateFaq.cloneNode(true);
    clone.querySelector(".question").textContent = faqData[i].title.rendered;
    clone.querySelector(".answer").innerHTML = faqData[i].content.rendered;
    allFaq.appendChild(clone);
  }
};

// const startSvgAnimation = () => {
//   let title = document.querySelector(".hero_text>h1");
//   let subTitle = document.querySelector(".hero_text>p");
//   title.classList.add("textAnimation");
//   subTitle.classList.add("textAnimation");
//   let svg = document.querySelector(".drawSvg");
//   let drawFirst = document.querySelector("#first").children;
//   // let n = 0;
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
const section_network = document.querySelector(".network");
let section_network_items = section_network.querySelectorAll(".item");
let section_network_img = section_network.querySelector(
  ".absolute:nth-child(2)"
);
section_network_items.forEach(item => {
  item.addEventListener("click", () => {
    clearAllItemsStyle(section_network_items, "section_network");
    // console.log({ item });
    applyStyle(item);
    changeImage(item, section_network_img);
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
// const applyStyle = item => {
//   item.querySelector("h3").style.color = "#EF6461";
//   item.querySelector("p").style.color = "#2c2e3e";
//   resizeText(2, item.querySelector("h3"));
// };
// function resizeText(multiplier, p) {
//   if (p.style.fontSize == "") {
//     p.style.fontSize = "1.0em";
//   }
//   p.style.fontSize = parseFloat(p.style.fontSize) + multiplier * 0.2 + "em";
// }
// const changeImage = (item, img) => {
//   // let img = section.querySelector("img");
//   console.log({ "item.id": item.id });

//   img.classList.add("change");
//   if (item.id === "network_item_1")
//     img.setAttribute("src", "img/platform_brief_single-min.png");
//   if (item.id === "network_item_2")
//     img.setAttribute("src", "img/platform_deal_single-min.png");
//   if (item.id === "network_item_3")
//     img.setAttribute("src", "img/platform_discover_single-min.png");
//   img.addEventListener("animationend", () => {
//     removeAnimationClass(img, "change");
//   });
// };
// const clearAllItemsStyle = (items, sectionName) => {
//   items.forEach(item => {
//     if (sectionName === "section_network") {
//       item.querySelector("h3").style.color = "grey";
//       item.querySelector("p").style.color = "grey";
//       item.querySelector("h3").style.fontSize = "1em";
//     }
//   });
// };
// const removeAnimationClass = (item, classToRemove) => {
//   item.classList.remove(classToRemove);
// };
// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     } 
//   });
  const addHeightToFaq = (faq)=>{
    let content = faq.querySelector(".answer");
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  }
// function addHeightToFaq(faq) {
//   if (open == false) {
//     // console.log("it is closed and needs to be opened");
//     faq.style.height = "21em";
//     faq.querySelector(".plus").style.transform = "rotate(180deg)";
//     open = true;
//   } else {
//     faq.style.height = "4em";
//     faq.querySelector(".plus").style.transform = "rotate(0)";
//     open = false;
//   }
// }
let open = false;
async function init() {
  document.querySelector(".loaderWrapper").classList.add("hideLoader");
  startSvgAnimation();
  const faqData = await fetchFaq();
  // console.log(faqData);
  showFaq(faqData);
  let faqSection = document.querySelectorAll(".faq_section");

  faqSection.forEach(faq => {
    faq.addEventListener("click", () => {
      console.log("there is a click!");
      addHeightToFaq(faq);
    });
  });

  // let faqs = document.querySelectorAll(".faqDiv");
  // faqs.forEach(faq => {
  //   faq.addEventListener("click", () => {
  //     console.log("there is a click!");
  //     addHeightToFaq(faq);
  //   });
  // });
}
