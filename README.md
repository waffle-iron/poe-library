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
