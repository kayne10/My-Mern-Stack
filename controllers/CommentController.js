var Comment = require('../models/Comment')
var Promise = require('bluebird')

module.exports = {
  find: function(params, isRaw){
    return new Promise(function(resolve, reject){
      Comment.find(params, function(err, comments){
        if (err) {
          reject(err)
          return
        }
        if (isRaw) {
          resolve(comments)
          return
        }
        resolve(comments)
      })
    })
  },

  findById: function(id){
    return new Promise(function(resolve, reject){
      Comment.findById(id, function(err, comment){
        if(err){
          reject(err)
          return
        }
        resolve(comment)
      })
    })
  },
  // change this for post state to work!!!
  create: function(params){
    return new Promise(function(resolve, reject){
      Comment.create(params, function(err, comment){
        if(err){
          reject(err)
          return
        }
        resolve(comment)
      })
    })
  },

  update: function(id, params, callback){
    Comment.findByIdAndUpdate(id, params, {new:true}, function(err, comment){
      if (err) {
        callback(err, null)
        return
      }
      callback(null, comment)
    })
  },

  delete: function(){
    Comment.findByIdAndRemove(id, function(err){
      if (err) {
        callback(err, null)
        return
      }
      callback(null, null)
    })
  }

}
