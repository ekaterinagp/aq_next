"use strict";

window.addEventListener("load", () => {
  initForm();
});

// function openForm(formWrapper)
let openForm = formWrapper => {
  currentFormItem = 0;
  formWrapper.classList.remove("hidden");

  let questionText = formWrapper.querySelector("h3");
  insertDOMforForm();
  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");
  nextButton.addEventListener("click", () => {
    nextElement(questionText);
  });
  prevButton.addEventListener("click", () => {
    prevElement();
  });
};

let currentFormItem = 0;
let formItems = [
  {
    id: 1,
    txt: "Select type of project",
    options: () => {
      let values = [
        {
          title: "New construction",
          img: "construction.png",
          textAbout:
            "Constructing a new house from scratch. This includes preparation of the construction site, materials and labor"
        },
        {
          title: "Structural modification",
          img: "roof.png",
          textAbout:
            "The building is already complete but needs to be modified, altered or improved."
        },
        {
          title: "Renovation",
          img: "work.png",
          textAbout:
            "The building is complete and needs to be renovated, repainted or completely restored. "
        },
        {
          title: "Other",
          img: "architect.png",
          textAbout:
            "The building is complete and needs to be renovated, repainted or completely restored. "
        },
        {
          title: "Interior",
          img: "jason-briscoe-332508-unsplash.jpg",
          textAbout: "The building is complete and needs to be decorated. "
        }
      ];

      let form = document.createElement("form");
      form.setAttribute("id", "projectType");

      // form.setAttribute("class", "wrapper_4_columns");
      values.forEach(value => {
        let divForValue = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        theInput.setAttribute("type", "radio");
        theInput.setAttribute("name", "projectType");
        theInput.setAttribute("value", value.title);
        let description = document.createElement("p");
        description.textContent = value.textAbout;
        let divWrapper = document.createElement("div");
        divWrapper.setAttribute("class", "btnRadio");
        let nameInput = document.createElement("h3");
        nameInput.textContent = value.title;
        let img = document.createElement("div");
        img.style.backgroundImage = "url(img/" + value.img + ")";
        // setAttribute("src", "img/" + value.img);
        img.setAttribute("class", "imgForm");

        divWrapper.appendChild(img);
        divWrapper.appendChild(nameInput);
        divWrapper.appendChild(description);
        form.appendChild(divForValue);
        label.appendChild(theInput);
        label.appendChild(divWrapper);
        divForValue.appendChild(label);
        divForValue.appendChild(theBreak);
      });
      return form;
    }
  },
  {
    id: 2,
    txt: "Select type of building",
    options: () => {
      let values = [
        {
          title: "Resedential",
          img: "resedential.jpg"
        },
        {
          title: "Cabin",
          img: "cabin.jpg"
        },
        {
          title: "Business",
          img: "business.png"
        },
        {
          title: "Healthcare",
          img: "healthcare.jpg"
        },
        {
          title: "Industrial",
          img: "industrial.jpg"
        },
        {
          title: "Educational",
          img: "educational.jpg"
        },
        {
          title: "Landscape",
          img: "landscape.jpg"
        },
        {
          title: "Other",
          img: "other.jpg"
        }
      ];
      let form = document.createElement("form");
      form.setAttribute("id", "buildingType");
      // form.setAttribute("class", "wrapper_3_columns");
      values.forEach(value => {
        let divForValue = document.createElement("div");
        let label = document.createElement("label");
        let theInput = document.createElement("input");
        let theBreak = document.createElement("br");
        theInput.setAttribute("type", "radio");
        theInput.setAttribute("name", "buildingType");
        theInput.setAttribute("value", value.title);
        let divWrapper = document.createElement("div");
        divWrapper.setAttribute("class", "btnRadio");
        let nameInput = document.createElement("h3");
        nameInput.textContent = value.title;
        let img = document.createElement("img");
        img.setAttribute("src", "img/" + value.img);
        img.setAttribute("class", "imgForm");

        divWrapper.appendChild(img);
        divWrapper.appendChild(nameInput);
        form.appendChild(divForValue);
        label.appendChild(theInput);
        label.appendChild(divWrapper);
        divForValue.appendChild(label);
        divForValue.appendChild(theBreak);
      });
      return form;
    }
  },
  {
    id: 3,
    txt: "Project details",
    options: () => {
      let form = document.createElement("form");
      form.setAttribute("id", "projectDetails");
      let divForSelect = document.createElement("div");
      // divForDropdown_1.setAttribute("class", "dropdown");
      let pForComplex = document.createElement("p");
      pForComplex.textContent = "Choose complexity of the project:";
      let selectComplexity = document.createElement("select");
      selectComplexity.setAttribute("id", "complexity");
      let option1 = document.createElement("option");
      option1.setAttribute("value", "Standard");
      option1.innerHTML = "Standard";
      let option2 = document.createElement("option");
      option2.setAttribute("value", "Light");
      option2.innerHTML = "Light Complexity";
      let option3 = document.createElement("option");
      option3.setAttribute("value", "High");
      option3.innerHTML = "High Complexity";
      selectComplexity.append(option1, option2, option3);
      divForSelect.append(pForComplex, selectComplexity);
      let divForInput = document.createElement("div");
      let pForInput = document.createElement("p");
      pForInput.textContent = "Size of project:";
      let inputForSize = document.createElement("input");
      inputForSize.setAttribute("type", "number");
      inputForSize.setAttribute("id", "size");
      inputForSize.setAttribute("name", "sizeProject");
      inputForSize.placeholder = "Square meters";
      inputForSize.required = true;
      divForInput.append(pForInput, inputForSize);
      let divForCheckBox = document.createElement("div");
      let descPForCheckBox = document.createElement("p");
      descPForCheckBox.textContent = "Select the relevant architectural tasks:";
      let checkbox_1 = document.createElement("input");
      checkbox_1.setAttribute("type", "checkbox");
      checkbox_1.setAttribute("value", "concept");
      checkbox_1.setAttribute("id", "design1");
      checkbox_1.setAttribute("class", "checkDesign");
      let pForCheck_1 = document.createElement("p");
      pForCheck_1.setAttribute("class", "inline");
      pForCheck_1.textContent = "Concept design";
      let br_1 = document.createElement("br");
      let checkbox_2 = document.createElement("input");
      checkbox_2.setAttribute("type", "checkbox");
      checkbox_2.setAttribute("value", "schematic");
      checkbox_2.setAttribute("id", "design2");
      checkbox_2.setAttribute("class", "checkDesign");
      let pForCheck_2 = document.createElement("p");
      pForCheck_2.setAttribute("class", "inline");
      pForCheck_2.textContent = "Schematic design";
      let br_2 = document.createElement("br");
      let checkbox_3 = document.createElement("input");
      checkbox_3.setAttribute("type", "checkbox");
      checkbox_3.setAttribute("value", "detailed");
      checkbox_3.setAttribute("id", "design3");
      checkbox_3.setAttribute("class", "checkDesign");
      let pForCheck_3 = document.createElement("p");
      pForCheck_3.setAttribute("class", "inline");
      pForCheck_3.textContent = "Detailed design";
      let br_3 = document.createElement("br");
      let checkbox_4 = document.createElement("input");
      checkbox_4.setAttribute("type", "checkbox");
      checkbox_4.setAttribute("value", "tender");
      checkbox_4.setAttribute("id", "design4");
      checkbox_4.setAttribute("class", "checkDesign");
      let pForCheck_4 = document.createElement("p");
      pForCheck_4.setAttribute("class", "inline");
      pForCheck_4.textContent = "Tender";
      let br_4 = document.createElement("br");
      let checkbox_5 = document.createElement("input");
      checkbox_5.setAttribute("type", "checkbox");
      checkbox_5.setAttribute("value", "support");
      checkbox_5.setAttribute("id", "design5");
      checkbox_5.setAttribute("class", "checkDesign");
      let pForCheck_5 = document.createElement("p");
      pForCheck_5.setAttribute("class", "inline");
      pForCheck_5.textContent = "Construction to Build Support";
      let br_5 = document.createElement("br");
      let checkbox_6 = document.createElement("input");
      checkbox_6.setAttribute("type", "checkbox");
      checkbox_6.setAttribute("value", "all");
      checkbox_6.setAttribute("id", "design6");
      checkbox_6.setAttribute("class", "checkDesign");
      let pForCheck_6 = document.createElement("p");
      pForCheck_6.setAttribute("class", "inline");
      pForCheck_6.textContent = "All standard RIBA phases";
      let br_6 = document.createElement("br");
      divForCheckBox.append(
        descPForCheckBox,
        checkbox_1,
        pForCheck_1,
        br_1,
        checkbox_2,
        pForCheck_2,
        br_2,
        checkbox_3,
        pForCheck_3,
        br_3,
        checkbox_4,
        pForCheck_4,
        br_4,
        checkbox_5,
        pForCheck_5,
        br_5,
        checkbox_6,
        pForCheck_6,
        br_6
      );
      let divForSelect_2 = document.createElement("div");
      let pForSelect_2 = document.createElement("p");
      pForSelect_2.textContent = "How high?";
      let selectFloor = document.createElement("select");
      selectFloor.setAttribute("id", "floor");
      let option_2_1 = document.createElement("option");
      option_2_1.setAttribute("value", "Ground floor only");
      option_2_1.textContent = "Ground floor only";
      let option_2_2 = document.createElement("option");
      option_2_2.setAttribute("value", "1 floor");
      option_2_2.textContent = "1 floor";
      let option_2_3 = document.createElement("option");
      option_2_3.setAttribute("value", "2 floor");
      option_2_3.textContent = "2 floor";
      let option_2_4 = document.createElement("option");
      option_2_4.setAttribute("value", "3 floor");
      option_2_4.textContent = "3 floor";
      let option_2_5 = document.createElement("option");
      option_2_5.setAttribute("value", "More");
      option_2_5.textContent = "More";
      selectFloor.append(
        option_2_1,
        option_2_2,
        option_2_3,
        option_2_4,
        option_2_5
      );
      divForSelect_2.append(pForSelect_2, selectFloor);
      let divForToggle = document.createElement("div");
      let labelForToggel = document.createElement("label");
      let pForDivToggle = document.createElement("p");
      pForDivToggle.textContent = "Basement:";
      labelForToggel.setAttribute("class", "switch");
      // let pForToggle_1 = document.createElement("p");
      // pForToggle_1.textContent = "Yes";
      let inputForToggle = document.createElement("input");
      inputForToggle.setAttribute("type", "checkbox");
      inputForToggle.setAttribute("id", "toggleBox");
      let spanForToggle = document.createElement("span");
      spanForToggle.setAttribute("class", "slider round");
      // spanForToggle.setAttribute("class", "round");
      labelForToggel.append(inputForToggle, spanForToggle);
      divForToggle.append(pForDivToggle, labelForToggel);
      form.appendChild(divForSelect);
      form.appendChild(divForInput);
      form.appendChild(divForCheckBox);
      form.appendChild(divForSelect_2);
      form.appendChild(divForToggle);
      return form;
    }
  },
  {
    id: 4,
    txt: "Contact information",
    options: () => {
      let form = document.createElement("form");
      form.setAttribute("id", "contactForm");
      // form.setAttribute("class", "wrapper_5_rows");
      let divWrapAll = document.createElement("div");
      let divWrap_1 = document.createElement("div");
      let labelFname = document.createElement("label");
      labelFname.setAttribute("for", "fName");
      // labelFname.innerHTML = "First name";
      let inputFname = document.createElement("input");
      inputFname.setAttribute("type", "text");
      inputFname.setAttribute("id", "first_name");
      inputFname.setAttribute("pattern", "[a-zA-Zs]{0,16}");
      inputFname.required = true;
      inputFname.placeholder = "First name";
      divWrap_1.append(labelFname, inputFname);
      let labelLname = document.createElement("label");
      labelLname.setAttribute("for", "lName");
      // labelLname.innerHTML = "Last name";
      let inputLname = document.createElement("input");
      inputLname.setAttribute("type", "text");
      inputLname.setAttribute("pattern", "[a-zA-Zs]{0,16}");
      inputLname.setAttribute("id", "last_name");
      inputLname.placeholder = "Last name";
      let divWrap_2 = document.createElement("div");
      divWrap_2.append(labelLname, inputLname);
      let labelPhone = document.createElement("label");
      labelPhone.setAttribute("for", "phone");
      // labelPhone.innerHTML = "Phone number";
      let inputPhone = document.createElement("input");
      inputPhone.setAttribute("type", "tel");
      inputPhone.setAttribute("id", "phone");
      inputPhone.setAttribute("pattern", "^[0-9-+s()]*$");
      inputPhone.placeholder = "Phone number";
      let divWrap_3 = document.createElement("div");
      divWrap_3.append(labelPhone, inputPhone);
      let labelemail = document.createElement("label");
      labelemail.setAttribute("for", "email");
      // labelemail.innerHTML = "Email";
      let inputEmail = document.createElement("input");
      inputEmail.setAttribute("type", "email");
      inputEmail.setAttribute("id", "email");
      inputEmail.setAttribute(
        "pattern",
        "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
      );
      inputEmail.placeholder = "Email";
      inputEmail.required = true;
      let divWrap_4 = document.createElement("div");
      divWrap_4.append(labelemail, inputEmail);
      divWrapAll.append(divWrap_1, divWrap_2, divWrap_3, divWrap_4);
      let divForCheckboxes = document.createElement("div");
      divForCheckboxes.id = "checkBoxesDiv";
      let whatsupCheckbox = document.createElement("input");
      whatsupCheckbox.setAttribute("type", "checkbox");
      whatsupCheckbox.setAttribute("value", "whatsUp");
      whatsupCheckbox.setAttribute("id", "whatsUp");
      let pForWhatsUp = document.createElement("p");
      pForWhatsUp.setAttribute("class", "inline");
      pForWhatsUp.textContent = "I agree to be contacted by WhatsApp";
      let divForWhats = document.createElement("div");
      divForWhats.append(whatsupCheckbox, pForWhatsUp);
      let agreeCheckbox = document.createElement("input");
      agreeCheckbox.setAttribute("type", "checkbox");
      agreeCheckbox.setAttribute("value", "gdpr");
      agreeCheckbox.setAttribute("id", "gdpr");
      agreeCheckbox.required = true;
      let pForGdpr = document.createElement("p");
      pForGdpr.setAttribute("class", "inline");
      pForGdpr.innerHTML =
        'I agree to the <a href="policy.html" class="link" >Terms of Service</a> and <a href="policy.html" class="link">Privacy Policy</a> of ArchitectureQuote IVS';
      let divForAgree = document.createElement("div");
      divForAgree.append(agreeCheckbox, pForGdpr);
      let newsCheckbox = document.createElement("input");
      newsCheckbox.setAttribute("type", "checkbox");
      newsCheckbox.setAttribute("value", "news");
      newsCheckbox.setAttribute("id", "news");
      let pForNews = document.createElement("p");
      pForNews.setAttribute("class", "inline");
      pForNews.innerHTML =
        "I would like to receive relevant marketing materials and emails from ArchitectureQuote IVS";
      let divForNews = document.createElement("div");
      divForNews.append(newsCheckbox, pForNews);
      divForCheckboxes.append(divForWhats, divForAgree, divForNews);
      form.append(divWrapAll, divForCheckboxes);
      return form;
    }
  }
];

let userAnswers = {
  type_project: "",
  type_of_building: "",
  complexity: "Standard",
  size: "",
  task: [],
  floor: "Ground floor only",
  basement: "",
  name: "",
  last_name: "",
  phone: "",
  email: "",
  whatsApp: "",
  news: ""
};

let closeForm = () => {
  document.querySelector(".formWrapper").remove();
};

let setNextBtnDisabled = bool => {
  document.getElementById("next").disabled = bool;
  console.log("now next is", bool);
};

let insertDOMforForm = () => {
  const formDiv = document.querySelector("#form");
  let questionText = formDiv.querySelector("h3");
  let options = formDiv.querySelector("#options");
  options.textContent = "";
  if (formItems[currentFormItem].id == 1) {
    document.querySelector("#prev").classList.add("hidden");
  }
  options.appendChild(formItems[currentFormItem].options());
  questionText.textContent = formItems[currentFormItem].txt;

  listenerForRadios("#projectType", "type_project");
};

let nextElement = questionText => {
  console.log("nextElement");

  setNextBtnDisabled(true);
  document.querySelector("#prev").style.display = "block";
  let form = document.querySelector("#form");
  form.querySelector("h3").textContent = "";
  form.querySelector("#options").innerHTML = "";

  let currentItem = nextItem();
  questionText.textContent = currentItem.txt;

  options.appendChild(formItems[currentFormItem].options());
  if (formItems[currentFormItem].id == 2) {
    listenerForRadios("#buildingType", "type_of_building");
  }
  if (userAnswers) {
    if (formItems[currentFormItem].id == 1)
      insertSavedAnswersRadio("projectType", "type_project");
    if (formItems[currentFormItem].id == 2)
      insertSavedAnswersRadio("buildingType", "type_of_building");
  }

  if (formItems[currentFormItem].id == 3) {
    checkIfAnswersForTasks(userAnswers);
    document.querySelector("#complexity").value = userAnswers.complexity;
    document.querySelector("#size").value = userAnswers.size;
    document.querySelector("#floor").value = userAnswers.floor;
    if (userAnswers.basement == "yes") {
      document.querySelector("#toggleBox").checked = true;
    }
    insertCheckBoxForTask();
    listenerForChange();
    listenerforValidity("#size", "size");
  }

  if (formItems[currentFormItem].id == 4) {
    document.querySelector("#next").style.display = "none";
    let submitBtn = document.createElement("input");
    submitBtn.value = "Submit";
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "submitBtn");
    submitBtn.setAttribute("class", "orange_button");
    submitBtn.disabled = true;
    submitBtn.addEventListener("click", () => {
      closeForm();
    });
    submitBtn.addEventListener("click", () => {
      showAlert(document.querySelector("header"), "formAlert");
    });
    document.querySelector("#buttonsForm").appendChild(submitBtn);
    listenerForInput("#first_name", "name");
    listenerForInput("#last_name", "last_name");
    listenerForInput("#phone", "phone");
    listenerForInput("#email", "email");
    listenerforValidity("#first_name", "name");
    // listenerforValidity("#last_name", "lName");
    // listenerforValidity("#phone", "phone");
    listenerforValidity("#email", "email");
    document.querySelector("#whatsUp").addEventListener("click", () => {
      if (document.querySelector("#whatsUp").checked) {
        userAnswers.whatsApp = "yes";
      } else {
        userAnswers.whatsApp = "no";
      }
      console.log(userAnswers.whatsApp);
    });
    document.querySelector("#news").addEventListener("click", () => {
      if (document.querySelector("#news").checked) {
        userAnswers.news = "yes";
      } else {
        userAnswers.news = "no";
      }
    });
    document.querySelector("#contactForm").addEventListener("change", () => {
      if (
        (document.querySelector("#gdpr").checked &&
          userAnswers.name &&
          userAnswers.phone) ||
        (document.querySelector("#gdpr").checked &&
          userAnswers.name &&
          userAnswers.email)
      ) {
        submitBtn.disabled = false;
        submitBtn.addEventListener("click", () => {
          saveUserData();
        });
      }
    });
  }
};
let listenerforValidity = (inputName, inputType) => {
  let input = document.querySelector(inputName);
  input.addEventListener("blur", () => {
    input.parentElement.className = "";
    //  if(input.)
    console.log(input.checkValidity());
    if (input.checkValidity()) {
      input.parentElement.classList.add("validSymbol");
      console.log(inputName, "valid");
    } else {
      input.classList.add("invalid");
      input.parentElement.classList.add("invalidSymbol");
    }
  });
};

let listenerForInput = (inputStr, answerTypeStr) => {
  let input = document.querySelector(inputStr);
  input.addEventListener("blur", () => {
    userAnswers[answerTypeStr] = input.value;
    console.log(userAnswers[answerTypeStr]);
  });
};

let insertSavedAnswersRadio = (sectionStr, answerTypeStr) => {
  let allRadios = document
    .getElementById(sectionStr)
    .querySelectorAll("input[type=radio]");
  let radioArr = Array.prototype.slice.call(allRadios);
  for (let u = 0; u < radioArr.length; u++) {
    if (radioArr[u].value == userAnswers[answerTypeStr]) {
      radioArr[u].checked = true;
      setNextBtnDisabled(false);
    }
  }
};

let prevElement = () => {
  console.log("prevElement");
  console.log({ currentFormItem });
  setNextBtnDisabled(false);

  let form = document.querySelector("#form");
  form.querySelector("h3").textContent = "";
  form.querySelector("#options").innerHTML = "";
  let currentItem = prevItem();
  form.querySelector("h3").textContent = currentItem.txt;

  options.appendChild(formItems[currentFormItem].options());

  if (formItems[currentFormItem].id == 1) {
    console.log("it is first and saved need to be insert");
    insertSavedAnswersRadio("projectType", "type_project");
  }

  if (formItems[currentFormItem].id == 2) {
    console.log("it is second and saved need to be insert");
    insertSavedAnswersRadio("buildingType", "type_of_building");
  }

  if (formItems[currentFormItem].id == 3) {
    console.log("it is 3 and items need to be insert");
    setNextBtnDisabled(false);
    document.querySelector("#submitBtn").style.display = "none";
    document.querySelector("#next").style.display = "block";

    document.querySelector("#complexity").value = userAnswers.complexity;
    document.querySelector("#size").value = userAnswers.size;
    document.querySelector("#floor").value = userAnswers.floor;
    if (userAnswers.basement == "yes") {
      document.querySelector("#toggleBox").checked = true;
    }
    insertCheckBoxForTask();
    listenerForChange();
  }
};

let listenerForChange = () => {
  document.querySelector("#complexity").addEventListener("click", () => {
    listenForValue("#complexity", "complexity");
  });
  document.querySelector("#size").addEventListener("keyup", () => {
    listenForValue("#size", "size");
  });

  document.querySelector("#floor").addEventListener("click", () => {
    listenForValue("#floor", "floor");
  });
  document.querySelector("#toggleBox").addEventListener("change", () => {
    if (document.querySelector("#toggleBox").checked) {
      userAnswers.basement = "yes";
      console.log("basememnt");
    } else {
      userAnswers.basement = "no";
      console.log(" no basememnt");
    }
  });
  checkAllBox();
  let allSelected = document.querySelectorAll(".checkDesign");
  let checkedTasksArray = [];
  //modify in final answers, if all there, then the answer is all
  allSelected.forEach(selected => {
    selected.addEventListener("click", () => {
      if (selected.checked == true) {
        checkedTasksArray.push(selected.value);
        // if (selected.value == "all") {
        //   checkedTasksArray = ["all"];
        // }
        userAnswers.task = checkedTasksArray;

        console.log(userAnswers.task);
      }
      checkIfAnswersForTasks(userAnswers);
    });
  });
};

let checkIfAnswersForTasks = userAnswers => {
  if (userAnswers.task.length && userAnswers.size) {
    console.log("it should wait for task and size");
    setNextBtnDisabled(false);
  } else {
    setNextBtnDisabled(true);
  }
};

let checkAllBox = () => {
  document.querySelector("#design6").addEventListener("change", () => {
    if (document.querySelector("#design6").checked) {
      document.querySelectorAll(".checkDesign").forEach(designItemCheckBox => {
        if (designItemCheckBox.id != "design6") {
          designItemCheckBox.checked = true;
        }
      });
      userAnswers.task = document.querySelector("#design6").value;
      console.log(userAnswers.task);
    } else {
      document.querySelectorAll(".checkDesign").forEach(designItemCheckBox => {
        designItemCheckBox.checked = false;
      });
    }
  });
};

let insertCheckBoxForTask = () => {
  console.log(userAnswers.task);
  let allCheckbox = document.querySelectorAll(".checkDesign");
  console.log(allCheckbox);

  if (userAnswers.task.includes("all")) {
    allCheckbox.forEach(checkBox => {
      checkBox.checked = true;
    });
  }

  allCheckbox.forEach(checkBox => {
    if (userAnswers.task.includes(checkBox.value)) {
      checkBox.checked = true;
    }
  });
};

let nextItem = () => {
  if (currentFormItem + 1 < formItems.length) {
    currentFormItem++;
  }
  return formItems[currentFormItem];
};

let prevItem = () => {
  if (currentFormItem - 1 < 0) {
    currentFormItem = 0;
  } else {
    currentFormItem--;
  }
  return formItems[currentFormItem];
};

let listenerForRadios = (formType, answerType) => {
  let allRadios = document
    .querySelector(formType)
    .querySelectorAll("input[type=radio]");

  allRadios.forEach(allRadio => {
    allRadio.addEventListener("click", () => {
      if (allRadio.checked == true) {
        let radioValue = allRadio.value;
        userAnswers[answerType] = radioValue;

        console.log({ radioValue });
        setNextBtnDisabled(false);
      }
    });
  });
};

let listenForValue = (itemIDstr, answerTypestr) => {
  console.log("listenForValue");
  let form = document.getElementById("projectDetails");
  let selectedItem = form.querySelector(itemIDstr);
  userAnswers[answerTypestr] = selectedItem.value;
  console.log(userAnswers[answerTypestr]);
  console.log({ "userAnswers.task.length": userAnswers.task.length });
  console.log({ "userAnswers.size": userAnswers.size });
  checkIfAnswersForTasks(userAnswers);
};

let createFormWrapper = () => {
  let formWrapper = document.createElement("div");
  formWrapper.className = "formWrapper";
  let formDiv = document.createElement("div");
  formDiv.className = "boxStyle";
  formDiv.id = "form";
  let closeSpan = document.createElement("span");
  closeSpan.className = "close";
  closeSpan.textContent = "X";
  let title = document.createElement("h1");
  title.className = "section_title";
  title.textContent = "ArquitectureQuote";
  let subTitle = document.createElement("h3");
  subTitle.className = "sub_title";
  subTitle.textContent = "Select the type of a project";
  let optionDiv = document.createElement("div");
  optionDiv.id = "options";
  let buttonsDiv = document.createElement("div");
  buttonsDiv.id = "buttonsForm";
  buttonsDiv.className = "wrapper_4_columns";
  let formPrevBtn = document.createElement("button");
  formPrevBtn.id = "prev";
  formPrevBtn.className = "back_button";
  formPrevBtn.textContent = "Previous";
  let formNextBtn = document.createElement("button");
  formNextBtn.id = "next";
  formNextBtn.className = "orange_button";
  formNextBtn.textContent = "Next";
  formNextBtn.disabled = true;

  formDiv.append(closeSpan, title, subTitle, optionDiv);
  buttonsDiv.append(formPrevBtn, formNextBtn);
  formDiv.appendChild(buttonsDiv);
  formWrapper.append(formDiv);
  document.querySelector("body").appendChild(formWrapper);
  openForm(formWrapper);
  closeSpan.addEventListener("click", closeForm);
};

let initForm = () => {
  let startProjectBtns = document.querySelectorAll(".freeEst");
  startProjectBtns.forEach(button => {
    button.addEventListener("click", () => {
      createFormWrapper();
    });
  });

  let emailForNews = document.querySelector("#subscribe_email");
  let inputSubmit = document
    .querySelector("footer")
    .querySelector("#subscribeBtn");
    console.log(inputSubmit)

  emailForNews.addEventListener("keyup", () => {
    let inputValid = emailForNews.checkValidity();
    if (inputValid === true) {
      inputSubmit.disabled = false;
      document.querySelector("#error-message").innerHTML = "";
    }
  });

  emailForNews.addEventListener("change", () => {
    let inputValid = emailForNews.checkValidity();
    if (inputValid === false) {
          document.querySelector("#error-message").innerHTML =
        "Invalid type of email";
    }
  });

  inputSubmit.addEventListener("click", () => {
    console.log({ inputSubmit });

    console.log("it is true, ");
    showAlert(document.querySelector("header"), "newsAlert");
    emailForNews.value = null;
    inputSubmit.disabled = true;
  });
};

function saveUserData() {
  // userAnswers.name = document.querySelector("#first_name").value;
  // userAnswers.last_name = document.querySelector("#last_name").value;
  // userAnswers.email = document.querySelector("#email").value;
  // userAnswers.phone = document.querySelector("#phone").value;
  userAnswers.whatsApp = () => {
    if (whatsupCheckbox.checked) {
      userAnswers.whatsApp = "yes";
    }
  };
  userAnswers.news = () => {
    if (newsCheckbox.checked) {
      userAnswers.news = "yes";
    }
  };
  console.log({ userAnswers });
}

function showAlert(placeHolder, elementId) {
  let divWrapper = document.createElement("div");
  divWrapper.setAttribute("class", "alertWrapper");
  let div = document.createElement("div");
  div.setAttribute("class", "alert");
  div.setAttribute("id", elementId);
  let closeSpan = document.createElement("span");
  closeSpan.innerText="X";
  closeSpan.setAttribute("class", "close");
  let h2 = document.createElement("h2");
  h2.innerText = "Thank you!";
  let p = document.createElement("p");
  p.innerText = "You will hear from us shortly";
  div.append( closeSpan, h2, p);
  divWrapper.append(div);
  placeHolder.appendChild(divWrapper);
  closeSpan.addEventListener("click", ()=>{
    document.querySelector(".alertWrapper").remove();
  })
  setTimeout(() => {
    console.log({ elementId });
    if (document.querySelector("#" + elementId)) {
      // document.querySelector("#" + elementId).remove();
      document.querySelector(".alertWrapper").remove();
    }
  }, 5000);
}
