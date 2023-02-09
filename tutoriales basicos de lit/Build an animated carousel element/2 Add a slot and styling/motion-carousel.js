import {LitElement, html} from 'lit';
import {styles} from './styles.js';

export class MotionCarousel extends LitElement {
  static styles = styles;

  render() {
    return html`
      <div class="fit">
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('motion-carousel', MotionCarousel);
