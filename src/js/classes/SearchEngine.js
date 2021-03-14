import { Request } from "./Request";

export class SearchEngine {
  constructor(searchEngineObj) {
    this.name = searchEngineObj.name;
    this.url = searchEngineObj.url;
    this.searchUrl = searchEngineObj.searchUrl;

    this.toHTML = this.toHTML.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.DOMElement = this.toHTML();

    this.refs = {};

    this.setup();
  }

  setup() {
    this.DOMElement.addEventListener("click", this.handleClick);
  }

  toHTML() {
    let searchEngineElement = document.createElement("a");
    searchEngineElement.classList.add("searchEngine");
    searchEngineElement.textContent = this.name;
    searchEngineElement.href = "#";
    return searchEngineElement;
  }

  handleClick(event) {
    event.preventDefault();
    let request = new Request(this.searchUrl + this.refs.searchInput.value);
    request.send();
  }
}
