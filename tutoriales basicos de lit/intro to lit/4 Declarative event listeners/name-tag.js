import {LitElement, html} from 'lit';

export class NameTag extends LitElement {
  static properties = {
    name: {},
  };

  constructor() {
    super();
    this.name = 'Your name here';
  }

  render() {
    return html`
      <p>Hello, ${this.name}</p>
      <input @input=${this.changeName} placeholder="Enter your name">
    `;
  }

  changeName(event) {
    const input = event.target;
    this.name = input.value;
  }
}
customElements.define('name-tag', NameTag);
