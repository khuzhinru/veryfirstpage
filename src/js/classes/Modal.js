export class Modal {
    constructor(modalObj) {
        this.name = modalObj.name;
        this.title = modalObj.title;
        this.isShow = false;

        this.toHTML = this.toHTML.bind(this);
        this.toggle = this.toggle.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);

        this.HTMLElement = this.toHTML();
    }

    toHTML() {
        const modalContainer = document.createElement('div');
        modalContainer.id = this.name;
        modalContainer.className = "modal";

        const modalInner = document.createElement('div');
        modalInner.className = "modal__inner";
        modalContainer.appendChild(modalInner);

        const modalHeader = document.createElement('div');
        modalHeader.className = "modal__header";
        modalInner.appendChild(modalHeader);

        const modalTitle = document.createElement('div');
        modalTitle.className = 'modal__title';
        modalTitle.textContent = this.title;
        modalHeader.appendChild(modalTitle);

        const modalCloseBtn = document.createElement('button');
        modalCloseBtn.className = 'modal_closeBtn';
        modalCloseBtn.textContent = 'X';
        modalCloseBtn.onclick = this.hide;
        modalHeader.appendChild(modalCloseBtn);

        const modalBody = document.createElement('div');
        modalBody.className = 'modal__body';
        modalInner.appendChild(modalBody);

        const modalFooter = document.createElement('div');
        modalFooter.className = 'modal__footer';
        modalInner.appendChild(modalFooter);

        return {
            container: modalContainer,
            header: modalHeader,
            title: modalTitle,
            body: modalBody,
            footer: modalFooter
        }
    }

    toggle() {
        this.isShow = !this.isShow;
        this.HTMLElement.container.classList.toggle('modal_show');
    }

    show() {
        if (!this.isShow) {
            this.isShow = true;
            this.HTMLElement.container.classList.add('modal_show');
        }
    }

    hide() {
        if (this.isShow) {
            this.isShow = false;
            this.HTMLElement.container.classList.remove('modal_show');
        }
    }
}
