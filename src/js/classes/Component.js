export class Component {
    constructor(props = {}) {
        this.DOMElement = props.DOMElement;
        this.DOMChildren = props.DOMChildren ?? {};
        this.refs = props.refs ?? {};
    }
}