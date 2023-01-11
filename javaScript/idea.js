const ideaTitle = document.querySelector(".idea-title");
const ideaText = document.querySelector(".idea-text");
const ideaSaveBtn = document.querySelector(".idea-save-btn");
const ideaDeleteBtn = document.querySelector(".idea-delete-btn");
const ideasBox = document.querySelector(".ideas-box");

let arrayOfIdea = [
  {
    id: 1665594980852,
    text: "Life is short, if you do not look around you from time to time, you may miss,\nالحياة قصيرة إذا كنت لا تنظر حولك من حين لآخر، فقد تفوتك",
    title: "Life is short,",
  },
  {
    id: 1665595045135,
    text: "Some people make your life happy, just by being in it, \n\nبعض الناس يجعلون حياتك سعيدة فقط بتواجدهم فيها\t",
    title: "Some people",
  },
  {
    id: 1665595177802,
    text: "True friendship does not end, friends are always there, \n\nالصداقة الحقيقة لا تنتهي الأصدقاء دومًا يبقون موجودين",
    title: "Friendship ",
  },
  {
    id: 1665595276677,
    text: "If you are in trouble remember that God is merciful,  إذا كنت في أزمة تذكر أن الله رحيم",
    title: "God is merciful",
  },
];

if (localStorage.getItem("Ideas")) {
  arrayOfIdea = JSON.parse(localStorage.getItem("Ideas"));
} else {
  addIdeasToLocalStorage(arrayOfIdea);
}

getDataFromLocalStorage();

ideaSaveBtn.onclick = function () {
  if (ideaTitle.value !== "" && ideaText.value !== "") {
    addIdeaToArray(ideaTitle.value, ideaText.value);
    ideaTitle.value = "";
    ideaText.value = "";
  }
};

ideaDeleteBtn.onclick = function () {
  if (ideaTitle.value !== "" || ideaText.value !== "") {
    ideaTitle.value = "";
    ideaText.value = "";
  }
};

ideasBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("del-idea")) {
    deleteIdeaFromLocalStorage(e.target.parentElement.getAttribute("data-id"));
    e.target.parentElement.remove();
  }
});

function addIdeaToArray(title, text) {
  const idea = {
    id: Date.now(),
    title: title,
    text: text,
  };
  arrayOfIdea.push(idea);
  addIdeasToPage(arrayOfIdea);
  addIdeasToLocalStorage(arrayOfIdea);
}

function addIdeasToPage(ideas) {
  ideasBox.innerHTML = "";
  ideas.forEach((idea) => {
    let box = document.createElement("div");
    let title = document.createElement("div");
    let p = document.createElement("p");
    let del = document.createElement("div");
    let icon = document.createElement("i");
    box.className = "box";
    box.setAttribute("data-id", idea.id);
    title.className = "title";
    icon.className = "fa-regular fa-comment";
    title.appendChild(document.createTextNode(idea.title));
    title.appendChild(icon);
    p.className = "text";
    p.appendChild(document.createTextNode(idea.text));
    del.className = "del-idea";
    del.textContent = "x";
    box.appendChild(title);
    box.appendChild(p);
    box.appendChild(del);
    ideasBox.appendChild(box);
  });
}

function addIdeasToLocalStorage(arrayOfIdea) {
  localStorage.setItem("Ideas", JSON.stringify(arrayOfIdea));
}

function getDataFromLocalStorage() {
  let data = localStorage.getItem("Ideas");
  if (data) {
    let ideas = JSON.parse(data);

    addIdeasToPage(ideas);
  }
}

function deleteIdeaFromLocalStorage(ideaId) {
  arrayOfIdea = arrayOfIdea.filter((idea) => idea.id != ideaId);
  addIdeasToLocalStorage(arrayOfIdea);
}
