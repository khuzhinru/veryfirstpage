import { SearchEngineForm } from "./SearchEngineForm.js";

export class SearchEngineFormTrigger {
    constructor(DOMElement, options) {
        this.DOMElement = DOMElement;
        this.type = options.type ?? "add";
        this.site = options.site;

        this.handleClick = this.handleClick.bind(this);

        this.setup();
    }

    setup() {
        this.DOMElement.addEventListener("click", this.handleClick);
    }

    handleClick() {
        if (this.type === "add") {
            if (this.searchEngineForm == null) {
                this.searchEngineForm = new SearchEngineForm();
            } else {
                this.searchEngineForm.refs.modal.show();
            }
        }
    }
}