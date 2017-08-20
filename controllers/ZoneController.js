var Zone = require('../models/Zone')

module.exports = {
  find: function(params, callback){
    Zone.find(params, function(err, zones){
      if (err) {
        callback(err, null)
        return
      }
      callback(null, zones)
    })
  },

  findById: function(id, callback){
    Zone.findById(id, function(err, zone){
      if (err) {
        callback(err, null)
        return
      }
      callback(null, zone)
    })
  },

  create: function(params, callback){
    var zips = params['zipCodes']
    var zip = zips.split(',') //splits each input with a comma delimeter
    var newZips = []
    zip.forEach(function(zipCode){
      newZips.push(zipCode.trim())
    })
    params['zipCodes'] = newZips
    Zone.create(params, function(err, zone){
      if (err) {
        callback(err, null)
        return
      }
      callback(null, zone)
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
  
  delete: function(){
    Zone.findByIdAndRemove(id, function(err){
      if (err) {
        callback(err, null)
        return
      }
      callback(null, null)
    })
  }

}