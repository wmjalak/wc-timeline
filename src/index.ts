import './components/timeline-element';
import { customElement, LitElement, html, css } from 'lit-element';

@customElement('root-el')
export class RootElement extends LitElement {
  static get styles() {
    return css`
      h1 {
        font-family: serif;
        color: green;
      }
      h3 {
        font-family: Arial, Helvetica, sans-serif;
        color: red;
      }
    `;
  }

  render() {
    return html`
      <h3>Test drive</h3>
      <timeline-element name="Worlddd"></timeline-element>
    `;
  }
}
