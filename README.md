# URL Checker

## Getting started

1. run `npm install`

## Usage

### Get status codes of URLs

1. Add URLs to urls.json
1. run `node index.js`

### Get meta title and descriptions

1. Add URLs to urls.json
1. run `node index.js meta`

### Log output to file

You can output to a file by using:

`node index.js meta > output.log`

`node index.js > output.log`

## Options in index.js

You can set the amount of URL prefix to remove and the delimiter.
Refer to the comments in `index.js`
