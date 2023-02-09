import {LitElement, html} from 'lit';

class MyElement extends LitElement {
  static properties = {
    friends: {state: true},
    pets: {state: true},
    includePets: {state: true},
  };

  constructor() {
    super();
    this.friends = ['Harry', 'Ron', 'Hermione'];
    this.pets = [
      {name: 'Hedwig', species: 'Owl'},
      {name: 'Scabbers', species: 'Rat'},
      {name: 'Crookshanks', species: 'Cat'},
    ];
    this.includePets = true;
  }

  render() {
    const listItems = [];
    this.friends.forEach((friend) => {
      listItems.push(html`<li>${friend}</li>`);
    });
    if (this.includePets) {
      this.pets.forEach((pet) => {
        listItems.push(html`<li>${pet.name} (${pet.species})</li>`);
      });
    }

    return html`
      <button @click=${() => this._togglePetVisibility()}>
        ${this.includePets ? 'Hide' : 'Show'} pets
      </button>
      <p>My magical friends</p>
      <ul>
        ${listItems}
      </ul>
    `;
  }

  _togglePetVisibility() {
    this.includePets = !this.includePets;
  }
}
customElements.define('my-element', MyElement);
