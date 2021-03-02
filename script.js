import { SearchInput } from "./src/js/classes/SearchInput.js";
import { SearchEngines } from "./src/js/classes/SearchEngines.js";
import { defaultSearchEngines } from "./src/js/defaultSearchEngines.js";
import { Request } from "./src/js/classes/Request.js";

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