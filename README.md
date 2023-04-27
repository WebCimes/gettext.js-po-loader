# gettext.js-po-loader

gettext.js extension to load po file with webpack, based on po2json wrapper from Guillaume Potier (https://github.com/guillaumepotier/gettext.js/blob/master/bin/po2json)

## Require

This extension require the gettext.js extension from Guillaume Potier https://github.com/guillaumepotier/gettext.js

## Installation

Use the npm package manager to install gettext.js-po-loader.

```bash
npm install gettext.js-po-loader --save-dev
```

## Usage

### Create loader in webpack config:
```javascript
module: {
	rules: [
		{
			test: /\.po$/i,
			type: 'json',
			loader: 'gettext.js-po-loader',
		},
	],
},
```

### Import the po file directly from your javascript file:
```javascript
import messages from '../lang/fr/LC_MESSAGES/default.po';
import gettext from "../../node_modules/gettext.js/dist/gettext.cjs.js";
const i18n = gettext();
i18n.loadJSON(messages);
console.log(i18n.__("Hello"));
```

### And then create a bundle with webpack.

## License
[MIT](https://choosealicense.com/licenses/mit/)