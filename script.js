/* "use strict";

const searchController = {
  searchInput: document.getElementById("searchInput"),
  searchEnginesContainer: document.getElementById("searchEnginesContainer"),
  searchEngines: [],
  createSearchEngine: function (name, url, searchUrl) {
    let searchEngine = new SearchEngine(name, url, searchUrl);
    this.searchEngines.push(searchEngine);
  },
};

class SearchEngine {
  constructor(name, url, searchUrl) {
    this.name = name;
    this.url = url;
    this.searchUrl = searchUrl;

    this.toHTML();
  }

  search() {
    let query = searchController.searchInput.value;
    if (query !== "") {
      document.location.href = this.searchUrl + query;
    } else {
      document.location.href = this.url;
    }
    searchController.searchInput.value = "";
  }

  toHTML() {
    let searchEngineElement = document.createElement("a");
    searchEngineElement.classList.add("searchEngine");
    searchEngineElement.textContent = this.name;
    searchEngineElement.href = this.url;
    searchEngineElement.onclick = (e) => {
      e.preventDefault();
      this.search();
    };
    searchController.searchEnginesContainer.appendChild(searchEngineElement);
  }
}

searchController.createSearchEngine("Google", "https://google.com", "https://www.google.com/search?q=");
searchController.createSearchEngine("Yandex", "https://yandex.com", "https://yandex.com/search/?text=");
searchController.createSearchEngine("Youtube", "https://youtube.com", "https://www.youtube.com/results?search_query=");
searchController.createSearchEngine("VK Music", "https://vk.com/music", "https://vk.com/music?q=");
searchController.createSearchEngine(
  "Yandex Translate",
  "https://translate.yandex.com",
  "https://translate.yandex.com/?lang=en-ru&text="
); */

import { SearchInput } from "./src/js/classes/SearchInput.js";
import { SearchEngines } from "./src/js/classes/SearchEngines.js";
import { defaultSearchEngines } from "./src/js/defaultSearchEngines.js";

const searchInput = new SearchInput(document.getElementById("searchInput"));
const searchEngines = new SearchEngines(document.getElementById("searchEnginesContainer"));

defaultSearchEngines.forEach((searchEngineObj) => {
  searchEngines.create(searchEngineObj);
});

function search() {
  let query = searchController.searchInput.value;
  if (query !== "") {
    document.location.href = this.searchUrl + query;
  } else {
    document.location.href = this.url;
  }
  searchController.searchInput.value = "";
}
