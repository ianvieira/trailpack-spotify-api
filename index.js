'use strict'

const _ = require('lodash')
const Trailpack = require('trailpack')
const SpotifyWebApi = require('spotify-web-api-node')

module.exports = class SpotifyApiTrailpack extends Trailpack {

  /**
   * Validates the Spotify API configuration
   */
  validate () {
    if (!_.isObject(this.app.config.spotify))
      return Promise.reject(new Error('No configuration found at config.spotify !'))
  }

  configure () {

  }

  /**
   * Initialize the Spotify Web API Client
   */
  initialize () {
    super.initialize()

    const credentials = {
      clientId: this.app.config.spotify.clientId,
      clientSecret: this.app.config.spotify.clientSecret
    }
    this.client = new SpotifyWebApi(credentials)
    this.app.spotifyApi = this.client

    return Promise.resolve()
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

