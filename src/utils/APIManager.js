//Utility classes
//This file is similar to the backend controller
import superagent from 'superagent'


//API with series of HTTP functions
//Manages requests and responses from our server API
export default {

  get: (url, params, callback) => {
    superagent
      .get(url)
      .query(params)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          callback(err, null)
          return
        }
        const confirmation = response.body.confirmation
        if (confirmation != 'success') {
          callback({message: response.body.message}, null)
          return
        }
        callback(null, response.body)
      })
  },

  post: (url, body, callback) => {
    superagent
      .post(url)
      .send(body)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          callback(err, null)
          return
        }
        const confirmation = response.body.confirmation
        if (confirmation != 'success') {
          callback({message: response.body.message}, null)
          return
        }
        callback(null, response.body)
      })
  },

  put: () => {

  },

  delete: () => {

  }


}
