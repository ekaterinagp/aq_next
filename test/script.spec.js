let expect = require("unexpected")
  .clone()
  .use(require("unexpected-dom"));

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = new JSDOM().window;

let createClients = numOfSlides => {
  let clientsDivs = [];
  for (let i = 0; i < numOfSlides; i++) {
    let div = document.createElement("div");
    let classesToAdd = ["client", "boxStyle"];
    div.classList.add(...classesToAdd);
    if (i === 0) {
      div.classList.add("activeSlide");
    }
    if (i === 1) {
      div.classList.add("next");
    }
    if (i === numOfSlides - 1) {
      div.classList.add("prev");
    }
    clientsDivs.push(div);
  }
  return clientsDivs;
};

const moveNext = (clients, slide) => {
  if (slide === clients.length - 1) {
    slide = 0;
  } else {
    slide++;
  }

  return slide;
};

const moveCarouselTo = (slide, clients, itemClassName) => {
  let newPrevious = slide - 1,
    newNext = slide + 1,
    oldPrevious = slide - 2,
    oldNext = slide + 2;

  if (clients.length > 3) {
    if (newPrevious <= 0) {
      oldPrevious = clients.length - 1;
    } else if (newNext >= clients.length - 1) {
      oldNext = 0;
    }
    if (slide === 0) {
      newPrevious = clients.length - 1;
      oldPrevious = clients.length - 2;
      oldNext = slide + 1;
    } else if (slide === clients.length - 1) {
      newPrevious = slide - 1;
      newNext = 0;
      oldNext = 1;
    }
    clients[oldPrevious].className = itemClassName;
    clients[oldNext].className = itemClassName;
    clients[newPrevious].className = itemClassName + " prev";
    clients[slide].className = itemClassName + " activeSlide";
    clients[newNext].className = itemClassName + " next";
  }

  return clients;
};

describe.only("Slider", () => {
  it("Client elements should have correct classes", async () => {
    let clients = createClients(6);
    expect(clients[0], "to have class", "activeSlide");
    expect(clients[1], "to have class", "next");
    expect(clients[5], "to have class", "prev");
  });

  it("Clicking move next", async () => {
    let clients = createClients(6);
    let slide = 0;
    slide = moveNext(clients, slide);
    expect(slide, "to satisfy", 1);
  });

  it("Clicking move next and run moveCarouselTo", async () => {
    let clients = createClients(4);
    let slide = 0;
    let itemClassName = "client boxStyle";
    slide = moveNext(clients, slide);
    clients = moveCarouselTo(slide, clients, itemClassName);

    expect(clients[0], "to have class", "prev");
    expect(clients[1], "to have class", "activeSlide");
    expect(clients[2], "to have class", "next");
  });

  it("Clicking move next with end (5) slide active and run moveCarouselTo", async () => {
    let clients = createClients(6);
    let slide = 5;
    let itemClassName = "client boxStyle";
    slide = moveNext(clients, slide);
    clients = moveCarouselTo(slide, clients, itemClassName);

    expect(clients[0], "to have class", "activeSlide");
    expect(clients[1], "to have class", "next");
    expect(clients[5], "to have class", "prev");
    expect(clients[2], "to only have classes", ["client", "boxStyle"]);
    expect(clients[3], "to only have classes", ["client", "boxStyle"]);
    expect(clients[4], "to only have classes", ["client", "boxStyle"]);
  });
});
