export class SearchInput {
  constructor(searchInputHTMLElement) {
    this.value = "";
    this.DOMElement = searchInputHTMLElement;

    this.clear = this.clear.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.setup();
  }

  setup() {
    this.DOMElement.addEventListener('change', this.handleInputChange);
  }

  clear() {
    this.value = "";
    this.DOMElement.value = "";
  }

  handleInputChange() {
    this.value = this.DOMElement.value;
  }
}
