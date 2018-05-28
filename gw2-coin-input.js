import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-input/paper-input.js";

/**
  `gw2-coin-input` generates an input field for Guild Wars 2 coins.

  @element gw2-coin-input
  @demo demo/index.html 
*/
class GW2CoinInput extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
      }

      .coin {
          height: 15px;
          width: 15px;
      }

      .coins {
        height: 24px;
        width: 24px;
      }

      .input-list {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
      }

      .input-list paper-input {
          flex-basis: 32%;
      }

      .input-list paper-input.full-width {
        flex-basis: 100%;
      }
    </style>

    <div class="input-list">
      <template is="dom-if" if="{{ !_isSingleInputCheck(isSingleInput) }}">
        <paper-input label="Gold" always-float-label="" type="tel" allowed-pattern="^\\d*\\.?\\d+\$" maxlength="5" placeholder="0" value="{{ gold }}">
          <img alt="g" class="coin" src="[[importPath]]images/gold-coin.png" slot="suffix">
        </paper-input>

        <paper-input label="Silver" always-float-label="" type="tel" allowed-pattern="^\\d*\\.?\\d+\$" maxlength="2" placeholder="0" value="{{ silver }}">
          <img alt="s" class="coin" src="[[importPath]]images/silver-coin.png" slot="suffix">
        </paper-input>

        <paper-input label="Copper" always-float-label="" type="tel" allowed-pattern="^\\d*\\.?\\d+\$" maxlength="2" placeholder="0" value="{{ copper }}">
          <img alt="c" class="coin" src="[[importPath]]images/copper-coin.png" slot="suffix">
        </paper-input>
      </template>

      <template is="dom-if" if="{{ _isSingleInputCheck(isSingleInput) }}">
        <paper-input class="full-width" label="Coins" always-float-label="" type="tel" allowed-pattern="^\\d*\\.?\\d+\$" maxlength="9" placeholder="0" value="{{ coinsCombined }}">
          <img alt="coins" class="coins" src="[[importPath]]images/coins.png" slot="suffix">
        </paper-input>
      </template>
    </div>
`;
  }

  static get is() {
    return "gw2-coin-input";
  }

  static get importMeta() {
    return import.meta;
  }

  static get properties() {
    return {
      gold: {
        type: Number,
        notify: true,
        observer: "_valueChanged"
      },
      silver: {
        type: Number,
        notify: true,
        observer: "_valueChanged"
      },
      copper: {
        type: Number,
        notify: true,
        observer: "_valueChanged"
      },
      coinsCombined: {
        type: Number,
        observer: "_coinsCombinedChanged"
      },
      coinString: {
        type: Number,
        notify: true
      },
      isSingleInput: {
        type: Boolean,
        value: false
      }
    };
  }

  _valueChanged() {
    var calculatedCoins = 0;

    if (this.gold !== undefined) {
      calculatedCoins += parseInt(this.gold, 10) * 10000;
    }

    // Check silver and copper for both undefined and null
    // Undefined: On load, the fields are undefined
    // Null: If more than 10000g is set, then silver and copper is set to null

    if (this.silver !== undefined && this.silver !== null) {
      calculatedCoins += parseInt(this.silver, 10) * 100;
    }

    if (this.copper !== undefined && this.copper !== null) {
      calculatedCoins += parseInt(this.copper, 10);
    }

    if (calculatedCoins > 100000000) {
      this.set("gold", 10000);
      this.set("silver", null);
      this.set("copper", null);

      return;
    }

    this.set("coinString", calculatedCoins);
  }

  _coinsCombinedChanged() {
    var tmpGold = Math.floor(this.coinsCombined / 10000);
    var tmpSilver = Math.floor((this.coinsCombined / 100) % 100);
    var tmpCopper = Math.floor(this.coinsCombined % 100);

    this.set("gold", tmpGold);
    this.set("silver", tmpSilver);
    this.set("copper", tmpCopper);

    this.set("coinString", this.coinsCombined);
  }

  _isSingleInputCheck(bool) {
    if (this.coinString != null) {
      this.set("coinString", 0);
    }

    if (this.gold != null) {
      this.set("gold", null);
    }

    if (this.silver != null) {
      this.set("silver", 0);
    }

    if (this.copper != null) {
      this.set("copper", 0);
    }

    if (bool) {
      return true;
    }

    return false;
  }
}

window.customElements.define(GW2CoinInput.is, GW2CoinInput);
