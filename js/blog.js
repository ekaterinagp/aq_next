"use strict";

window.addEventListener("load", () => {
  init();
});

let fetchBlogPosts = () => {
  let endpoint = "https://architecturequote.com/wp-json/wp/v2/posts";
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then(res => res.json())
      .then(function(posts) {
        resolve(posts);
      });
  });
};

// async function insertThreeLastBlogsInDOM(
//   divHolderStr,
//   positionInArray,
//   textHolderStr,
//   dateHolderStr,
//   posts
// )
const insertThreeLastBlogsInDOM = async (
  divHolderStr,
  positionInArray,
  textHolderStr,
  dateHolderStr,
  posts
) => {
  let divHolder = document.querySelector(divHolderStr);
  console.log("divHolder", divHolder);
  divHolder.querySelector("h2").textContent =
    posts[positionInArray].title.rendered;
  console.log(posts[positionInArray].title.renderd);
  divHolder.querySelector(textHolderStr).innerHTML =
    posts[positionInArray].excerpt.rendered;
  let a = document.createElement("a");
  a.href = "subpage_blog.html?id=" + posts[positionInArray].id;

  a.appendChild(
    divHolder.querySelector(textHolderStr).querySelector(".excerpt-hellip")
  );
  document.querySelector(textHolderStr).appendChild(a);
  let day = posts[positionInArray].date.substring(8, 10);
  let month = posts[positionInArray].date.substring(5, 7);
  let year = posts[positionInArray].date.substring(0, 4);
  divHolder.querySelector(dateHolderStr).textContent =
    day + "." + month + "." + year;
  const imgLatestBlog = await fetch(
    posts[positionInArray]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  divHolder.style.backgroundImage =
    "url(" + imgLatestBlog.media_details.sizes.full.source_url + ")";
};

// async function insertBlogsToDOM(posts)
const insertBlogsToDOM = async posts => {
  let template = document.querySelector("template").content;

  console.log({ posts });

  insertThreeLastBlogsInDOM(
    "#latestBlog",
    0,
    "#latestBlog_text_blog",
    "#latestBlog_date",
    posts
  );

  // insertThreeLastBlogsInDOM(
  //   "#secondLatestBlog",
  //   1,

  //   "#secondLatestBlog_text_blog",
  //   "#secondLatestBlog_date",
  //   posts
  // );

  // insertThreeLastBlogsInDOM(
  //   "#thirdLatestBlog",
  //   2,
  //   "#thirdLatestBlog_text_blog",
  //   "#thirdLatestBlog_date",
  //   posts
  // );

  let divForSecondLast = document.querySelector("#secondLatestBlog");
  divForSecondLast.querySelector("h2").textContent = posts[1].title.rendered;
  divForSecondLast.querySelector("#secondLatestBlog_text_blog").innerHTML =
    posts[1].excerpt.rendered;
  let a = document.createElement("a");
  a.href = "subpage_blog.html?id=" + posts[1].id;
  a.appendChild(
    divForSecondLast
      .querySelector("#secondLatestBlog_text_blog")
      .querySelector(".excerpt-hellip")
  );
  document.querySelector("#secondLatestBlog_text_blog").appendChild(a);
  let daySecond = posts[1].date.substring(8, 10);
  let monthSecond = posts[1].date.substring(5, 7);
  let yearSecond = posts[1].date.substring(0, 4);
  divForSecondLast.querySelector("#secondLatestBlog_date").textContent =
    daySecond + "." + monthSecond + "." + yearSecond;
  const imgSecondLatestBlog = await fetch(
    posts[1]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  divForSecondLast.style.backgroundImage =
    "url(" +
    imgSecondLatestBlog.media_details.sizes.medium_large.source_url +
    ")";

  let divForThirdLast = document.querySelector("#thirdLatestBlog");
  divForThirdLast.querySelector("h2").textContent = posts[2].title.rendered;
  divForThirdLast.querySelector("#thirdLatestBlog_text_blog").innerHTML =
    posts[2].excerpt.rendered;
  let a_3 = document.createElement("a");
  a_3.href = "subpage_blog.html?id=" + posts[2].id;
  a_3.appendChild(
    divForThirdLast
      .querySelector("#thirdLatestBlog_text_blog")
      .querySelector(".excerpt-hellip")
  );
  document.querySelector("#thirdLatestBlog_text_blog").appendChild(a_3);
  let dayThird = posts[2].date.substring(8, 10);
  let monthThird = posts[2].date.substring(5, 7);
  let yearThird = posts[2].date.substring(0, 4);
  divForThirdLast.querySelector("#thirdLatestBlog_date").textContent =
    dayThird + "." + monthThird + "." + yearThird;
  const imgThirdLatestBlog = await fetch(
    posts[2]._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  divForThirdLast.style.backgroundImage =
    "url(" +
    imgThirdLatestBlog.media_details.sizes.medium_large.source_url +
    ")";
  for (let i = 3; i < posts.length; i++) {
    let clone = template.cloneNode(true);
    clone.querySelector("h2").textContent = posts[i].title.rendered;
    clone.querySelector("#text_blog").innerHTML = posts[i].excerpt.rendered;

    let a = document.createElement("a");
    a.href = "subpage_blog.html?id=" + posts[i].id;
    a.appendChild(clone.querySelector(".excerpt-hellip"));
    clone.querySelector("#text_blog").appendChild(a);

    let day = posts[i].date.substring(8, 10);
    let month = posts[i].date.substring(5, 7);
    let year = posts[i].date.substring(0, 4);
    // console.log(posts[i].date.substring(8,10))
    clone.querySelector("#date").textContent = day + "." + month + "." + year;
    const imgs = await fetch(posts[i]._links["wp:featuredmedia"][0].href).then(
      res => res.json()
    );
    console.log({ imgs });
    clone.querySelector(".blogBG").style.backgroundImage =
      "url(" + imgs.media_details.sizes.full.source_url + ")";

    document.querySelector("#blogs").appendChild(clone);
  }
};

// async function init()
const init = async () => {
  document.querySelector(".loaderWrapper").classList.add("hideLoader");
  const blogs = await fetchBlogPosts();
  console.log({ blogs });
  insertBlogsToDOM(blogs);
};
