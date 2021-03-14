export class Dropdown {
  constructor(DOMElement) {
    this.DOMElement = DOMElement;
    this.trigger = this.DOMElement.querySelector('[data-name="dropdownTrigger"]');
    this.menu = this.DOMElement.querySelector('[data-name="dropdownMenu"]');
    this.isShow = this.menu.classList.contains("dropdown__menu_show");

    this.toggle = this.toggle.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    this.trigger.addEventListener("click", this.toggle);
  }

  toggle() {
    this.isShow ? this.hide() : this.show();
  }

  show() {
    this.menu.classList.add("dropdown__menu_show");
    this.isShow = true;
  }

  hide() {
    this.menu.classList.remove("dropdown__menu_show");
    this.isShow = false;
  }
}
