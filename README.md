# trailpack-spotify-api

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Trailpack to connect your app with the Spotify API

## Install

```sh
$ npm install --save trailpack-spotify-api
```

## Configure

```js
// config/main.js
module.exports = {
  packs: [
    // ... other trailpacks
    require('trailpack-spotify-api')
  ]
}
```

```js
// config/spotify.js
module.exports = {
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret'
}
```

## How to use the API
This package is a wrapper for the 'spotify-web-api-node', the functions reference is available at [here](http://michaelthelin.se/spotify-web-api-node/).

Usage example:
```js
// api/services/spotify.js
module.exports = class SpotifyService extends Service {

  /**
   * Get Elvis' albuns
   */
  getElvisAlbuns() {
    return this.app.spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  }
}
```

You can also access user private information using 'trailpack-passport' with Spotify OAuth2 to authentication workflow and obtain the access token.

[npm-image]: https://img.shields.io/npm/v/trailpack-spotify-api.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-spotify-api
[ci-image]: https://img.shields.io/travis/ianvieira/trailpack-spotify-api/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/ianvieira/trailpack-spotify-api
[daviddm-image]: http://img.shields.io/david/ianvieira/trailpack-spotify-api.svg?style=flat-square
[daviddm-url]: https://david-dm.org/ianvieira/trailpack-spotify-api
[codeclimate-image]: https://img.shields.io/codeclimate/github/ianvieira/trailpack-spotify-api.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/ianvieira/trailpack-spotify-api

