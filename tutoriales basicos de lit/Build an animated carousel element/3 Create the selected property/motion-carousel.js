import {LitElement, html} from 'lit';
import {styles} from './styles.js';

export class MotionCarousel extends LitElement {
  static properties = {
    selected: {type: Number},
  };
  static styles = styles;

  constructor() {
    super();
    this.selected = 0;
  }

  selectedInternal = 0;

  get maxSelected() {
    return this.childElementCount - 1;
  }

  hasValidSelected() {
    return this.selected >= 0 && this.selected <= this.maxSelected;
  }

  render() {
    if (this.hasValidSelected()) {
      this.selectedInternal = this.selected;
    }
    return html`
      <div class="fit">
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('motion-carousel', MotionCarousel);
