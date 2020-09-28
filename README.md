# Mathigon.io

Discover the open source JavaScript libraries that power Mathigon. Combining
functions for DOM manipulation, animations, events handling, UI elements and
mathematics, they make web development for modern browsers fun and easy.


## Deployment

Main development of this website happens on the `source` branch. Run `grunt` to
build the website in the `/build` directory, and run `npm start` to watch the
`/src` directory for changes.

For the documentation to compile correctly, this repo needs to be a sibling of
`core.js`, `fermat.js`, `euclid.js` and `boost.js`.

To deploy changes, run `npm run deploy`. This will push the `/build` directory
to the `master` branch on GitHub, which is used by GitHub pages.


## Copyright and License

Copyright © Mathigon ([dev@mathigon.org](mailto:dev@mathigon.org))  
Released under the [MIT license](LICENSE)
