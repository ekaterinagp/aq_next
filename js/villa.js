"use strict";
window.addEventListener("load", () => {
  init();
});

function fetchAllParts() {
  let endpoint = "https://architecturequote.com/wp-json/wp/v2/villa";
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then(res => res.json())
      .then(function(parts) {
        resolve(parts);
      });
    ("use strict");

    window.addEventListener("load", () => {
      init();
    });

    const fetchAllParts = () => {
      let endpoint = "https://architecturequote.com/wp-json/wp/v2/villa";
      return new Promise((resolve, reject) => {
        fetch(endpoint)
          .then(res => res.json())
          .then(function(parts) {
            resolve(parts);
          });
      });
    };

    const fetchBackgroundImg = async parts => {
      const backgroundIMG = await fetch(
        parts[4]._links["wp:featuredmedia"][0].href
      ).then(res => res.json());
      console.log({ backgroundIMG });
      return backgroundIMG;
    };

    const fetchImgForCustomPart = async parts => {
      const imgForSecond = await fetch(
        parts[0]._links["wp:featuredmedia"][0].href
      ).then(res => res.json());
      console.log({ imgForSecond });
      return imgForSecond;
    };

    const fetchImgForMorePart = async parts => {
      const imgForMore = await fetch(
        parts[1]._links["wp:featuredmedia"][0].href
      ).then(res => res.json());
      console.log({ imgForMore });
      return imgForMore;
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

    const init = async () => {
      document.querySelector(".loaderWrapper").classList.add("hideLoader");

      const wireframeParts = await fetchAllParts();
      console.log({ wireframeParts });
      const backgroundImg = await fetchBackgroundImg(wireframeParts);
      console.log({ backgroundImg });
      createAboveTheFold(wireframeParts, backgroundImg, 4);

      const ImgForCustomPart = await fetchImgForCustomPart(wireframeParts);

      sellingPointsForIndividuals(
        wireframeParts,
        3,
        "remodeling/remodeling_laptop.png"
      );
      createTimeline(wireframeParts, 2);
      const imgForMore = await fetchImgForMorePart(wireframeParts);
      createSimpleImgTextLayout(wireframeParts, ImgForCustomPart, 0);
      createSimple2ColumnsBGTextRight(wireframeParts, imgForMore, 1);
      checkIfInView();
    };
  });
}

async function fetchBackgroundImg(parts) {
  const backgroundIMG = await fetch(
    parts[4]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  console.log({ backgroundIMG });
  return backgroundIMG;
}

async function fetchImgForCustomPart(parts) {
  const imgForSecond = await fetch(
    parts[0]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  console.log({ imgForSecond });
  return imgForSecond;
}

async function fetchImgForLastPart(parts) {
  const imgForMore = await fetch(
    parts[2]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  console.log({ imgForMore });
  return imgForMore;
}
function timelineAnimation() {
  let tl = new TimelineMax();
  tl.staggerFromTo(
    ".timelineWrapper",
    0.3,
    {
      scale: 1.2,
      opacity: 0,
      skewY: 15
    },
    { scale: 1, opacity: 1, skewY: 0, ease: Power1.easeInOut },
    0.2
  ).staggerFromTo(
    ".timelineContent",
    0.3,
    {
      opacity: 0
    },
    {
      opacity: 1
    },
    0.1
  );
}

function checkIfInView() {
  let element = document.querySelector(".timelineWrapper");
  var elementHeight = element.clientHeight;

  // listen for scroll event and call animate function
  document.addEventListener("scroll", () => {
    console.log("scrolling");
    animate();
  });

  // check if element is in view
  function inView() {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition =
      element.getBoundingClientRect().top + scrollY + elementHeight;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
      return true;
      // console.log("true");
    }
    // console.log("false");
    return false;
  }

  // animate element when it is in view

  // Set animation running to false
  let isInViewAnimationRunning = false;
  function animate() {
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
  }
}

async function init() {
  document.querySelector(".loaderWrapper").classList.add("hideLoader");
  const wireframeParts = await fetchAllParts();
  console.log({ wireframeParts });
  const backgroundImg = await fetchBackgroundImg(wireframeParts);
  console.log({ backgroundImg });
  createAboveTheFold(wireframeParts, backgroundImg, 4);
  const ImgForCustomPart = await fetchImgForCustomPart(wireframeParts);

  sellingPointsForIndividuals(wireframeParts, 3, "villa/villa_laptop.png");

  createTimeline(wireframeParts, 1);
  const imgForMore = await fetchImgForLastPart(wireframeParts);
  createSimpleImgTextLayout(wireframeParts, ImgForCustomPart, 0);
  createSimple2ColumnsBGTextRight(wireframeParts, imgForMore, 2);
  checkIfInView();
}
