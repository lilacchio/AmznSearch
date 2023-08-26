# Amazon Autocomplete React Component

This React-based project provides an Amazon-like search autocomplete functionality.
Inspired by https://github.com/caroso1222/amazon-autocomplete since that project is no longer maintained.

## Demo
https://lilacchio.github.io/AmznSearch/

## Features

- **Tiny**: Built using React and bundled using webpack, so it's super lightweight.
- **Browser Support**: Works on all major web browsers.
- **Data Fetching**: Utilizes JSON for fetching suggestions, with more options coming soon.
- **Performance Optimized**: Employs Lodash's debounce for event throttling to ensure efficient fetching of suggestions.

## Options

### Parameters Documentation

You can configure the Amazon Autocomplete using various parameters. All the parameters are defined in `src/AmznSearch.js`. Below is the set of all possible parameters:

`
{
  "session-id": "133-2190809-5709766",
  "customer-id": "A1CNYR04B8CZOZ",
  "request-id": "NTH41W0H5GYC8N00NVCS",
  "page-type": "Gateway",
  "lop": "en_US",
  "site-variant": "desktop",
  "client-info": "amazon-search-ui",
  "mid": "ATVPDKIKX0DER",
  "alias": "aps",
  "b2b": 0,
  "fresh": 0,
  "ks": 69,
  "prefix": "query", // The query from the input box
  "event": "onKeyPress",
  "limit": 11,
  "fb": 1,
  "suggestion-type": "KEYWORD"
}
`

## Getting Started

1. Clone the repository
   `
   git clone <repository_url>
   `
   
2. Install dependencies
   `
   npm install
   `

3. Run the development server
   `
   npm start
   `

### How to Build

To build the project for production, simply run:

`
npm run build
`

After building, you'll find the optimized code in the `dist` folder. Open `index.html` from this folder to run the application.
