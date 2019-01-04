# moment

[![NPM version](https://img.shields.io/npm/v/@zcorky/moment.svg?style=flat)](https://www.npmjs.com/package/@zcorky/moment)
[![Coverage Status](https://img.shields.io/coveralls/zcorky/moment.svg?style=flat)](https://coveralls.io/r/zcorky/moment)
[![Dependencies](https://david-dm.org/@zcorky/moment/status.svg)](https://david-dm.org/@zcorky/moment)
[![Build Status](https://travis-ci.com/zcorky/moment.svg?branch=master)](https://travis-ci.com/zcorky/moment)
![license](https://img.shields.io/github/license/zcorky/moment.svg)
[![issues](https://img.shields.io/github/issues/zcorky/moment.svg)](https://github.com/zcorky/moment/issues)

> A minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API, written with TypeScript, inspired by Dayjs and Moment.js

```js
moment().startOf('month').add(1, 'day').set('year', 2019).format('YYYY-MM-DD HH:mm:ss');
```

* 🕒 Familiar Moment.js API & patterns
* 💪 Immutable
* 🔥 Chainable
* :sparkle: TypeScript
* 🌐 I18n support (WIP, will be soon)
* 🔌  Plugin System (WIP, will be soon)

## Install

```
$ npm install @zcorky/moment
```

## Usage

```js
// typescript
import moment from '@zcorky/moment';

moment('2018-08-08') // parse

moment().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // display

moment().set('month', 3).month() // get & set

moment().add(1, 'year') // manipulate
```

### Relatived
* [dayjs](https://github.com/iamkun/dayjs) -  immutable date time library alternative to Moment.js with the same modern API.
* [moment](https://github.com/moment/moment/) - Parse, validate, manipulate, and display dates in javascript.
* [luxon](https://github.com/moment/luxon) - ⏱ A library for working with dates and times in JS.

## License

MIT © [Moeover](https://moeover.com)
