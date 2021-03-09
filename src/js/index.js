import { SearchInput } from "./classes/SearchInput.js";
import { SearchEngines } from "./classes/SearchEngines.js";
import { defaultSearchEngines } from "./defaultSearchEngines.js";
import { Request } from "./classes/Request.js";
import { Modal } from "./classes/Modal.js";
import addSearchEngineFormHtml from "../html/addSearchEngineForm.html";
import "../sass/style.scss";

const searchInput = new SearchInput(document.getElementById("searchInput"));
const searchEngines = new SearchEngines(document.getElementById("searchEnginesContainer"));

defaultSearchEngines.forEach((searchEngineObj) => {
  searchEngines.create(searchEngineObj);
});

searchEngines.items.forEach((searchEngine) => {
  searchEngine.HTMLElement.onclick = (e) => {
    e.preventDefault();
    let request = new Request(searchEngine.searchUrl + searchInput.value);
    request.send();
  };
});

const addSearchEngineModal = new Modal({
  name: "addSearchEngineModal",
  title: "New Search Engine",
});
document.body.appendChild(addSearchEngineModal.HTMLElement.container);

addSearchEngineModal.HTMLElement.body.innerHTML = addSearchEngineFormHtml;

const addSearchEngineBtn = document.createElement("a");
addSearchEngineBtn.className = "searchEngine searchEngineAddBtn";
addSearchEngineBtn.href = "#";
addSearchEngineBtn.textContent = "Add new";
searchEngines.HTMLElement.appendChild(addSearchEngineBtn);

addSearchEngineBtn.onclick = addSearchEngineModal.show;
