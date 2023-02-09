import {LitElement, html, css} from 'lit';

export class ToDoList extends LitElement {
  static properties = {
    _listItems: {state: true},
    hideCompleted: {},
  };
  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;

  constructor() {
    super();
    this._listItems = [
      {text: 'Make to-do list', completed: true},
      {text: 'Complete Lit tutorial', completed: false},
    ];
    this.hideCompleted = false;
  }

  render() {
    const items = this.hideCompleted
      ? this._listItems.filter((item) => !item.completed)
      : this._listItems;
    const todos = html`
      <ul>
        ${items.map(
          (item) => html`
              <li
                  class=${item.completed ? 'completed' : ''}
                  @click=${() => this.toggleCompleted(item)}>
                ${item.text}
              </li>`
        )}
      </ul>
    `;
    const caughtUpMessage = html`
      <p>
      You're all caught up!
      </p>
    `;
    const todosOrMessage = items.length > 0 ? todos : caughtUpMessage;

    return html`
      <h2>To Do</h2>
      ${todosOrMessage}
      <input id="newitem" aria-label="New item">
      <button @click=${this.addToDo}>Add</button>
      <br>
      <label>
        <input type="checkbox"
          @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}>
        Hide completed
      </label>
    `;
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  setHideCompleted(e) {
    this.hideCompleted = e.target.checked;
  }

  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
  }

  addToDo() {
    this._listItems = [
      ...this._listItems,
      {text: this.input.value, completed: false},
    ];
    this.input.value = '';
  }
}
customElements.define('todo-list', ToDoList);