import { SearchInput } from "./src/js/classes/SearchInput.js";
import { SearchEngines } from "./src/js/classes/SearchEngines.js";
import { defaultSearchEngines } from "./src/js/defaultSearchEngines.js";
import { Request } from "./src/js/classes/Request.js";
import { Modal } from "./src/js/classes/Modal.js";

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
  }
});

const addSearchEngineModal = new Modal({
  name: "addSearchEngineModal",
  title: 'New Search Engine'
});
document.body.appendChild(addSearchEngineModal.HTMLElement.container);

/* modal.toggle(); */

addSearchEngineModal.HTMLElement.body.innerHTML = `
  <form id="addSearchEngineForm" class="form">
    <div class="form__form-group">
      <label class="form__label">Name:</label>
      <input class="form__input input" type="text">
    </div>
    <div class="form__form-group">
      <label class="form__label">Search URL:</label>
      <input class="form__input input" type="text">
    </div>
    <div class="form__form-group">
      <label class="form__label">Basic URL:</label>
      <input class="form__input input" type="text">
    </div>
  </form>
`;

addSearchEngineModal.HTMLElement.footer.innerHTML = `
  <button class="btn btn_primary">Save</button>
`;

const addSearchEngineBtn = document.createElement('a');
addSearchEngineBtn.className = 'searchEngine searchEngineAddBtn';
addSearchEngineBtn.href = '#';
addSearchEngineBtn.textContent = 'Add new';
searchEngines.HTMLElement.appendChild(addSearchEngineBtn);

addSearchEngineBtn.onclick = addSearchEngineModal.show;