import {LitElement, html} from 'lit';
import {map} from 'lit/directives/map.js';

class MyElement extends LitElement {
  static properties = {
    things: {state: true},
  };

  constructor() {
    super();
    this.things = [
      'Raindrops on roses',
      'Whiskers on kittens',
      'Bright copper kettles',
      'Warm woolen mittens',
    ];
  }

  render() {
    return html`
      <p>A few of my favorite things</p>
      <ul>
        ${map(
          this.things,
          (thing, index) => html`
            <li>
              ${thing}
              <button @click=${() => this._deleteThing(index)}>Delete</button>
            </li>
          `
        )}
      </ul>
    `;
  }

  _deleteThing(index) {
    this.things = this.things.filter((_, i) => i !== index);
  }
}
customElements.define('my-element', MyElement);