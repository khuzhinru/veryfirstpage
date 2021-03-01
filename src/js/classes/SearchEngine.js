export class SearchEngine {
  constructor(searchEngineObj) {
    this.name = searchEngineObj.name;
    this.url = searchEngineObj.url;
    this.searchUrl = searchEngineObj.searchUrl;

    this.toHTML = this.toHTML.bind(this);

    this.HTMLElement = this.toHTML();
  }

  toHTML() {
    let searchEngineElement = document.createElement("a");
    searchEngineElement.classList.add("searchEngine");
    searchEngineElement.textContent = this.name;
    searchEngineElement.href = this.url;
    searchEngineElement.onclick = (e) => {
      e.preventDefault();
      const request = new Request();
    };
    return searchEngineElement;
  }
}
