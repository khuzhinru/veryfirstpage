import { Form } from "./Form";

export class AddSearchEngineForm extends Form {
    constructor(DOMElement, refs = {}) {
        super(DOMElement);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setup();
        this.refs = refs;
    }

    setup() {
        this.elements.submit.addEventListener('click', this.handleSubmit);
    }

    handleSubmit() {
        this.submit();
    }

    submit() {
        console.log('Name:', this.elements.name.value);
        console.log('Search URL:', this.elements.searchUrl.value);
        if (this.refs.searchEngines != null) {
            this.refs.searchEngines.create({
                name: this.elements.name.value,
                searchUrl: this.elements.searchUrl.value,
                url: this.elements.url.value
            });
            this.refs.addSearchEngineModal.hide();
        }
    }
}