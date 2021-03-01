export class Request {
  constructor(query, url) {
    this.query = query;
    this.url = url;
    this.send = this.send.bind(this);
  }

  send() {}
}
