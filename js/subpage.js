"use strict";

window.addEventListener("load", () => {
  init();
});

let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

const fetchPost = () => {
  let endpoint = "https://architecturequote.com/wp-json/wp/v2/posts/" + id;
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then(res => res.json())
      .then(function(post) {
        resolve(post);
      });
  });
};

let showSinglePost = async singlePost => {
  let divHolder = document.querySelector("#mainTextBlog");
  let backGroundDiv = document.querySelector("#heroBackgroundImage");
  divHolder.querySelector("h1").textContent = singlePost.title.rendered;
  divHolder.querySelector("p").innerHTML = singlePost.content.rendered;
  const imgBGBlog = await fetch(
    singlePost._links["wp:featuredmedia"][0].href
  ).then(res => res.json());
  // backGroundDiv.style.backgroundImage =
  //   "url(" + imgBGBlog.media_details.sizes.medium_large.source_url + ")";
};

const init = async () => {
  setTimeout(   ()=>{ 
    document.querySelector(".loaderWrapper").classList.add("hideLoader");
   }, 1000)
 
  const post = await fetchPost();
  showSinglePost(post);
};
