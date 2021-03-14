export class Modal {
  constructor(DOMElement, options) {
    this.isShow = false;

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
    this.options = options;
    this.trigger = document.querySelector(this.options.trigger);

    this.setup();
  }

  setup() {
    this.trigger.addEventListener("click", this.show);
    this.DOMChildren.closeBtn.addEventListener("click", this.hide);
  }

  toggle() {
    this.isShow ? this.hide() : this.show();
  }

  show() {
    this.isShow = true;
    this.DOMElement.classList.add("modal_show");
  }

  hide() {
    this.isShow = false;
    this.DOMElement.classList.remove("modal_show");
  }
}
