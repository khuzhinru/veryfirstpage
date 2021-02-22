"use strict";

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

    let searchEngineElement = document.createElement("a");
    searchEngineElement.classList.add("searchEngine");
    searchEngineElement.textContent = name;
    searchEngineElement.href = url;

    searchEngineElement.onclick = (e) => {
      e.preventDefault();
      this.search();
    };
    searchController.searchEnginesContainer.appendChild(searchEngineElement);
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
}

searchController.createSearchEngine("Google", "https://google.com", "https://www.google.com/search?q=");
searchController.createSearchEngine("Yandex", "https://yandex.com", "https://yandex.com/search/?text=");
searchController.createSearchEngine("Youtube", "https://youtube.com", "https://www.youtube.com/results?search_query=");
searchController.createSearchEngine("VK Music", "https://vk.com/music", "https://vk.com/music?q=");
searchController.createSearchEngine(
  "Yandex Translate",
  "https://translate.yandex.com",
  "https://translate.yandex.com/?lang=en-ru&text="
);
