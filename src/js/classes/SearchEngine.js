import { Component } from "./Component";
import { Request } from "./Request";

export class SearchEngine extends Component {
  constructor(props) {
    super(props);
    this.name = props.searchEngineObj.name;
    this.url = props.searchEngineObj.url;
    this.searchUrl = props.searchEngineObj.searchUrl;
    this.handleClick = this.handleClick.bind(this);
    this.setup();
    console.log(this);
  }

  setup() {
    this.DOMElement = this.toHTML();
    this.DOMElement.addEventListener("click", this.handleClick);
  }

  toHTML() {
    const searchEngineElement = document.createElement("a");
    searchEngineElement.classList.add("searchEngine");
    searchEngineElement.href = "#";

    const img = document.createElement("img");
    img.classList.add("searchEngine__img");
    img.src = `${this.url}/favicon.ico`;
    searchEngineElement.append(img);

    const title = document.createElement("div");
    title.classList.add("searchEngine__title");
    title.textContent = this.name;
    searchEngineElement.append(title);

    const editBtn = document.createElement("button");
    editBtn.className = "searchEngine__editBtn btn btn_small bi bi-pencil-square";
    searchEngineElement.append(editBtn);
    this.DOMChildren.editBtn = editBtn;

    return searchEngineElement;
  }

  handleClick(event) {
    if (event.target === this.DOMChildren.editBtn) {
      return;
    }
    event.preventDefault();
    const request = new Request(this.searchUrl + this.refs.searchInput.value);
    request.send();
  }
}
