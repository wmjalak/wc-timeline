import { html, LitElement, customElement, property, css } from 'lit-element';

@customElement('timeline-element')
export default class TimelineElement extends LitElement {
  static get styles() {
    return css`
      h1 {
        font-family: sans-serif;
        color: green;
      }
      h3 {
        font-family: serif;
        color: red;
      }
    `;
  }

  @property({ type: String })
  name = 'wtf';

  render() {
    return html`
      <div class="line" style="position: relative;top:50%;">
        <svg
          style="position:relative;left:0px;top:0px"
          width="800"
          height="200"
        >
          <circle cx="10" cy="10" r="10" fill="#456" stroke="none" />
          <circle cx="526" cy="180" r="10" fill="#456" stroke="none" />
          <path d="M 526 180 C 276 87 270 10 0 10" fill="none" stroke="#456" />
        </svg>
      </div>
    `;
  }
}
