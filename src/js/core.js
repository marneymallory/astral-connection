/* eslint-disable prefer-destructuring */
const API_KEY = process.env.API_KEY
/* eslint-enable prefer-destructuring */

export default class Hubble {
  static stargaze() {
    return fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .catch(error => error)
  }
}
