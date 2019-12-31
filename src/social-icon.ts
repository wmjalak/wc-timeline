import {
  css,
  customElement,
  html,
  LitElement,
  property,
  TemplateResult
} from 'lit-element';

import { icons } from './icons';

/**
 *
 * # <social-icon>
 *
 * Web component to create social icons, based on LitElement.
 *
 * The "icon" property is used to set the social network to display
 *
 */
@customElement('social-icon')
export class SocialIcon extends LitElement {
  @property({ type: String }) public icon: string = 'facebook';

  /*
  static get properties() {
    return {
      icon: { type: String }
    };
  }
*/
  constructor() {
    super();
    // this.icon = 'facebook';
  }

  public styles() {
    return css`
      :host[hidden] {
        display: none;
      }
      :host {
        display: inline-block;
      }
      path {
        fill: var(--dile-social-icon-color, #888);
      }
      path[fill='none'] {
        fill: transparent;
      }
      /*
      svg {
        width: 100%;
        height: var(--dile-social-icon-size, 100%);
      }
*/
      div {
        display: flex;
      }
    `;
  }

  public render(): TemplateResult {
    return html`
      <!--
    <div>
      ${this._getIcon(this.icon)}
    </div>
    -->

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

  private _getIcon(icon: string): string {
    return icons[icon];
  }
}
