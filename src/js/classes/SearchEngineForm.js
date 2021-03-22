import { blocks } from '../blocks.js';
export class SearchEngineForm {
  constructor(options = {}) {
    this.type = options.type ?? "add";
    this.site = options.site;
    this.DOMElement = this.toHTML();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setup();
    this.render();
    this.refs = this.init({
      modal: {}
    });
  }

  render(destination = document.body) {
    destination.append(this.DOMElement);
  }

  init(blockParams = {}) {
    return blocks.init(this.DOMElement, blockParams);
  }

  toHTML() {
    const form = document.createElement("form");
    form.className = "form modal modal_show";
    form.autocomplete = "off";
    form.innerHTML = this.getTemplate();
    return form;
  }

  getTemplate() {
    const formOptions = {
      title: this.type === "add" ? "Add site" : "Edit site",
      siteName: this.site ? this.site.name : "",
      siteUrl: this.site ? this.site.url : "",
      siteSearchUrl: this.site ? this.site.searchUrl : "",
    }
    return `
      <div class="modal__inner">
        <div class="modal__header" data-name="header">
            <div class="modal__title" data-name="title">${formOptions.title}</div>
            <button class="modal_closeBtn btn btn_light btn_icon" type="button" data-name="closeBtn"><i class="bi-x"></i></button>
        </div>
        <div class="modal__body" data-name="body">
            <div class="form__form-group">
                <label class="form__label">Name:</label>
                <input class="form__input input" name="name" type="text" placeholder="Example" value="${formOptions.siteName}">
            </div>
            <div class="form__form-group">
                <label class="form__label">URL:</label>
                <input class="form__input input" name="url" type="text" placeholder="https://example.com" value="${formOptions.siteUrl}">
            </div>
            <div class="form__form-group">
                <label class="form__label">Search URL:</label>
                <input class="form__input input" name="searchUrl" type="text" placeholder="https://example.com?q=" value="${formOptions.siteSearchUrl}">
            </div>
            <div class="form__form-group text_right">
                <button class="btn btn_primary" name="submit" type="submit">Save</button>
            </div>
        </div>
        <div class="modal__footer display_none" data-name="footer"></div>
      </div>
    `;
  }

  setup() {
    this.DOMElement.addEventListener("submit", this.handleSubmit);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submitted');
    this.submit();
  }

  submit() {
    this.refs.modal.hide();
    return;
    if (this.refs.searchEngines != null) {
      this.refs.searchEngines.create({
        name: this.elements.name.value,
        searchUrl: this.elements.searchUrl.value,
        url: this.elements.url.value,
      });
      this.refs.searchEngines.renderAll();
      this.refs.modal.hide();
    }
  }
}
