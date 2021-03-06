import { SearchEngine } from "./SearchEngine.js";

const defaultSearchEngines = [
  {
    name: "Google",
    url: "https://google.com",
    searchUrl: "https://www.google.com/search?q=",
  },
  {
    name: "Yandex",
    url: "https://yandex.com",
    searchUrl: "https://yandex.com/search/?text=",
  },
  {
    name: "Youtube",
    url: "https://youtube.com",
    searchUrl: "https://www.youtube.com/results?search_query=",
  },
  {
    name: "VK Music",
    url: "https://vk.com/music",
    searchUrl: "https://vk.com/music?q=",
  },
  {
    name: "Yandex Translate",
    url: "https://translate.yandex.com",
    searchUrl: "https://translate.yandex.com/?lang=en-ru&text=",
  },
];

function getUserSearchEngines() {
  const userSearchEngines = localStorage.getItem("searchEngines");
  return userSearchEngines != null ? JSON.parse(userSearchEngines) : [];
}

export class SearchEngines {
  constructor(searchEnginesHTMLElement, refs = {}) {
    this.items = [];
    this.DOMElement = searchEnginesHTMLElement;
    this.create = this.create.bind(this);
    this.refs = refs;

    this.setup();
  }

  setup() {
    let userSearchEngines = getUserSearchEngines();
    if (userSearchEngines.length < 1) {
      userSearchEngines = defaultSearchEngines;
    }
    userSearchEngines.forEach((searchEngineObj) => {
      this.create(searchEngineObj);
    });
    this.renderAll();
  }

  create(searchEngineObj) {
    const searchEngine = new SearchEngine(searchEngineObj);
    searchEngine.refs.searchInput = this.refs.searchInput;
    this.items.push(searchEngine);
    this.refreshLocalStorage();
  }

  delete(searchEngine) {
    const filteredItems = this.items.filter((item) => {
      return item.name !== searchEngine.name;
    });
    this.items = filteredItems;
    this.refreshLocalStorage();
  }

  edit(searchEngine, searchEngineObj) {
    this.delete(searchEngine);
    this.create(searchEngineObj);
  }
  
  refreshLocalStorage() {
    localStorage.setItem("searchEngines", JSON.stringify(this.items));
  }

  renderAll() {
    const fragment = document.createDocumentFragment();
    this.items.forEach((searchEngine) => {
      fragment.append(searchEngine.DOMElement);
    });
    this.DOMElement.innerHTML = "";
    this.DOMElement.append(fragment);
  }
}
