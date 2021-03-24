export class Form {
    constructor(DOMElement) {
        this.DOMElement = DOMElement;
        this.elements = this.DOMElement.elements;
    }
}