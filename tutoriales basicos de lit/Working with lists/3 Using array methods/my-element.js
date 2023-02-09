import {LitElement, html} from 'lit';

class MyElement extends LitElement {
  static properties = {
    names: {state: true},
  };

  constructor() {
    super();
    this.names = ['Chandler', 'Phoebe', 'Joey', 'Monica', 'Rachel', 'Ross'];
  }

  render() {
    return html`
      <p>A list of names that include the letter "e"</p>
      <ul>
        <!-- TODO: Render list items of filtered names. -->
      </ul>
    `;
  }
}
customElements.define('my-element', MyElement);
