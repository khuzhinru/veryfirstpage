export class Trigger {
    constructor(DOMElement, options) {
        this.DOMElement = DOMElement;
        this.targetDOMElement = document.querySelector(options.target);
        this.setup();
    }

    setup() {
        this.DOMElement.addEventListener("click", () => {
            window.weakMap.get(this.targetDOMElement).modal.show();
        });
    }
}