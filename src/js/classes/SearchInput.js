export class SearchInput {
  constructor(searchInputHTMLElement) {
    this.value = "";
    this.HTMLElement = searchInputHTMLElement;

    this.clear = this.clear.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.HTMLElement.onchange = this.handleInputChange;
  }

  clear() {
    this.value = "";
    this.HTMLElement.value = "";
  }

  handleInputChange() {
    this.value = this.HTMLElement.value;
    console.log(this.value);
  }
}
