export class Modal {
  constructor(DOMElement) {
    this.toggle = this.toggle.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    this.DOMElement = DOMElement;
    this.DOMChildren = {
      header: this.DOMElement.querySelector('[data-name="header"]'),
      title: this.DOMElement.querySelector('[data-name="title"]'),
      closeBtn: this.DOMElement.querySelector('[data-name="closeBtn"]'),
      body: this.DOMElement.querySelector('[data-name="body"]'),
      footer: this.DOMElement.querySelector('[data-name="footer"]'),
    };

    this.classToShow = "modal_show";
    this.isShow = this.DOMElement.classList.contains(this.classToShow);

    this.setup();
  }

  setup() {
    this.DOMChildren.closeBtn.addEventListener("click", this.hide);
  }

  toggle() {
    this.isShow ? this.hide() : this.show();
  }

  show() {
    this.isShow = true;
    this.DOMElement.classList.add(this.classToShow);
  }

  hide() {
    this.isShow = false;
    this.DOMElement.classList.remove(this.classToShow);
  }
}
