export class Request {
  constructor(url) {
    this.url = url;
    this.send = this.send.bind(this);
  }

  send() {
    document.location.href = this.url;
  }
}
