import { SearchEngine } from "./SearchEngine.js";
export class SearchEngines {
  constructor(searchEnginesHTMLElement) {
    this.items = [];
    this.HTMLElement = searchEnginesHTMLElement;
    this.create = this.create.bind(this);
  }

  create(searchEngineObj) {
    let searchEngine = new SearchEngine(searchEngineObj);
    this.items.push(searchEngine);
    this.HTMLElement.appendChild(searchEngine.HTMLElement);
  }
}
