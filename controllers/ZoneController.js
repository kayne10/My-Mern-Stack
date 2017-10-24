var Zone = require('../models/Zone')
var Promise = require('bluebird')

module.exports = {
  find: function(params, isRaw){
    // pass in callback instead of function?
    let callback = new Promise(function(resolve, reject) {
      Zone.find(params, function(err, zones){
        if (err) {
          reject(err)
          return
        }
        if (isRaw){
          resolve(zones)
          return
        }
        resolve(zones)
      })
    });
    return callback
  },

  findById: function(id){
    return new Promise(function(resolve, reject){
      Zone.findById(id, function(err, zone){
        if(err){
          reject(err)
          return
        }
        resolve(zone)
      })
    })
  },

  create: function(params){
    // var zips = params['zipCodes']
    // var zip = zips.split(',') //splits each input with a comma delimeter
    // var newZips = []
    // zip.forEach(function(zipCode){
    //   newZips.push(zipCode.trim())
    // })
    // params['zipCodes'] = newZips


    return new Promise(function(resolve, reject){
      Zone.create(params, function(err, zone){
        if(err){
          reject(err)
          return
        }
        resolve(zone)
      })
    })
  },

  update: function(id, params, callback){
    Zone.findByIdAndUpdate(id, params, {new:true}, function(err, zone){
      if (err) {
        callback(err, null)
        return
      }
      callback(null, zone)
    })
  },

  delete: function(id){
    return new Promise(function(resolve, reject){
      Zone.deleteOne(id, function(err, zone){
        if(err){
          reject(err)
          return
        }
        resolve(zone)
      })
    })
  }

}
