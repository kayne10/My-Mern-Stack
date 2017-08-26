//Utility classes
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

  post: () => {

  },

  put: () => {

  },

  delete: () => {

  }


}
