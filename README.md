[![Waffle.io - Columns and their card count](https://badge.waffle.io/Caelumlabs/poe-library.png?columns=all)](https://waffle.io/Caelumlabs/poe-library?utm_source=badge)
[![Build Status](https://travis-ci.org/Caelumlabs/poe-library.svg?branch=master)](https://travis-ci.org/Caelumlabs/poe-library)
[![Coverage Status](https://coveralls.io/repos/github/Caelumlabs/poe-library/badge.svg?branch=master)](https://coveralls.io/github/Caelumlabs/poe-library?branch=master)

# poe-library
A Node.js module to interact with the Poe Blockchain Network
## Installation
```sh
npm install poe-library --save
yarn add poe-library
bower install poe-library --save
```
## Usage
### Javascript
```javascript
var poe = require('poe-library');
var boys = poe.getPlural('Boy');
```
```sh
Output should be 'Boy'
```
### TypeScript
```typescript
import { getPlural } from 'poe-library';
console.log(getPlural('Goose'))
```
```sh
Output should be 'Goose'
```
### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('poe-library');
});
```
## Test
```sh
npm test
```
