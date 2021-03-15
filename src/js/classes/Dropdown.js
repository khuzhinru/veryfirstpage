export class Dropdown {
  constructor(DOMElement) {
    this.DOMElement = DOMElement;
    this.trigger = this.DOMElement.querySelector('[data-name="dropdownTrigger"]');
    this.menu = this.DOMElement.querySelector('[data-name="dropdownMenu"]');
    this.isShow = this.menu.classList.contains("dropdown__menu_show");

    this.toggle = this.toggle.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.trigger.addEventListener("click", this.toggle);

  }

  toggle() {
    this.isShow ? this.hide() : this.show();
  }

  show() {
    this.menu.classList.add("dropdown__menu_show");
    this.isShow = true;
    document.addEventListener('click', this.handleClick);
  }

  hide() {
    this.menu.classList.remove("dropdown__menu_show");
    this.isShow = false;
    document.removeEventListener('click', this.handleClick);
  }

  handleClick(e) {
    if (!e.target.closest('[data-name="dropdown"]') || e.target.closest('[data-name="dropdownMenu"]')) {
      this.hide();
    }
  }
}
