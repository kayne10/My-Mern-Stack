var express = require('express')
var router = express.Router()
var controllers = require('../controllers/index')
var passport = require('passport');


router.get('/:resource', function(req, res, next) {

  var resource = req.params.resource
  var controller = controllers[resource]

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource Request ' + resource
    })
    return

  }

  controller
    .find(req.query, false)
    .then(function(entities){
      res.json({
        confirmation: 'SUCCESS',
        results: entities
      })
    })
    .catch(function(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
    })
  // controller.find(req.query, function(err, results){
  //   if (err) {
  //     res.json({
  //       confirmation: 'fail',
  //       message: err
  //     })
  //     return
  //   }
  //   res.json({
  //     confirmation: 'success',
  //     results: results
  //   })
  // })
});

router.get('/:resource/:id', function(req, res, next){

  var resource = req.params.resource
  var id = req.params.id

  var controller = controllers[resource]
  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource Request ' + resource
    })
    return

  }


  controller.findById(id)
  .then(function(result){
    res.json({
      confirmation: 'success',
      result: result
    })
  })
  .catch(function(err){
    res.json({
      confirmation: 'fail',
      message: err
    })
  })

  // controller.findById(id, function(err, result){
  //   if (err) {
  //     res.json({
  //       confirmation: 'fail',
  //       message: 'Not Found'
  //     })
  //     return
  //   }
  //   res.json({
  //     confirmation: 'success',
  //     result: result
  //   })
  // })
})

router.post('/:resource/', function(req, res, next){
  var resource = req.params.resource
  var controller = controllers[resource]
  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: 'Invalid Resource Request ' + resource
    })
    return

  }

  controller.create(req.body)
  .then(function(result){
    res.json({
      confirmation: 'success',
      result: result
    })
  })
  .catch(function(err){
    res.json({
      confirmation: 'fail',
      message: err
    })
  })
})


module.exports = router;
