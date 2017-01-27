[![Published on webcomponents.org][webcomponents-image]][webcomponents-url]

# \<gw2-coin-input\>

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../paper-input/paper-input.html">
    <link rel="import" href="../iron-icon/iron-icon.html">
    <link rel="import" href="gw2-coin-input.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<gw2-coin-input></gw2-coin-input>
<gw2-coin-input gold="10" silver="20" copper="30"></gw2-coin-input>
<gw2-coin-input is-single-input></gw2-coin-input>
```

Generates an input field for Guild Wars 2 coins.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

[webcomponents-image]: https://img.shields.io/badge/webcomponents.org-published-blue.svg
[webcomponents-url]: https://www.webcomponents.org/element/rediche/gw2-coin-input