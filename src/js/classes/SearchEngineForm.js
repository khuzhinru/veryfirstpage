import { blocks } from '../blocks.js';
import { Component } from './Component.js';
export class SearchEngineForm extends Component {
  constructor(props = {}) {
    super(props);
    this.type = props.type ?? "add";
    this.site = props.site;
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
    this.setup();
  }

  setup() {
    this.DOMElement = this.toHTML();
    if (this.type === "add") {
      this.DOMElement.addEventListener("submit", this.handleAddSubmit);
    } else {
      this.DOMElement.addEventListener("submit", this.handleEditSubmit);
      this.DOMElement.elements.delete.addEventListener("click", this.handleDeleteBtnClick);
    }
    this.refs = blocks.init(this.DOMElement, {
      modal: {}
    });
    this.refs.modal.show = this.focusDecorator(this.refs.modal.show);
    this.refs.searchEngines = window.userSearchEngines;
    this.render();
  }

  render() {
    document.body.append(this.DOMElement);
    this.refs.modal.show();
  }

  toHTML() {
    const form = document.createElement("form");
    form.className = "form modal";
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
      deleteBtn: this.site ? `<button class="btn btn_danger-light" name="delete" type="button"><i class="bi bi-trash"></i></button>` : ""
    }
    return `
      <div class="modal__inner">
        <div class="modal__header" data-name="header">
          <div class="modal__title" data-name="title">${formOptions.title}</div>
          <button class="modal__closeBtn btn btn_icon btn_link" type="button" data-name="closeBtn"><i class="bi bi-x"></i></button>
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
            ${formOptions.deleteBtn}
            <button class="btn btn_primary" name="submit" type="submit">Save</button>
          </div>
        </div>
        <div class="modal__footer display_none" data-name="footer"></div>
      </div>
    `;
  }

  handleEditSubmit(event) {
    event.preventDefault();
    this.refs.searchEngines.edit(this.site, {
      name: this.DOMElement.elements.name.value,
      url: this.DOMElement.elements.url.value,
      searchUrl: this.DOMElement.elements.searchUrl.value,
    });
    this.refs.searchEngines.renderAll();
    this.refs.modal.hide();
  }

  handleAddSubmit(event) {
    event.preventDefault();
    this.refs.searchEngines.create({
      name: this.DOMElement.elements.name.value,
      url: this.DOMElement.elements.url.value,
      searchUrl: this.DOMElement.elements.searchUrl.value,
    });
    this.refs.searchEngines.renderAll();
    this.refs.modal.hide();
  }

  handleDeleteBtnClick() {
    if (confirm("Are you sure you want to delete the search engine?")) {
      this.refs.searchEngines.delete(this.site);
      this.refs.searchEngines.renderAll();
      this.refs.modal.hide();
    }
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

  focusDecorator(func) {
    const input = this.DOMElement.elements.name;
    function moveCursorToEnd(el) {
      // From CSS-Tricks (https://css-tricks.com/snippets/javascript/move-cursor-to-end-of-input)
      if (typeof el.selectionStart == "number") {
        el.selectionStart = el.selectionEnd = el.value.length;
      } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
      }
    }
    return () => {
      func();
      input.focus();
      moveCursorToEnd(input);
    }
  }
}
