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
    const searchEngineElement = document.createElement("a");
    searchEngineElement.classList.add("searchEngine");
    searchEngineElement.href = "#";

    const img = document.createElement('img');
    img.classList.add('searchEngine__img');
    img.src = `${this.url}/favicon.ico`;
    searchEngineElement.append(img);

    const title = document.createElement('div');
    title.classList.add('searchEngine__title');
    title.textContent = this.name;
    searchEngineElement.append(title);

    return searchEngineElement;
  }

  handleClick(event) {
    event.preventDefault();
    let request = new Request(this.searchUrl + this.refs.searchInput.value);
    request.send();
  }
}
