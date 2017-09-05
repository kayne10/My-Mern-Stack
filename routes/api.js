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
    .find(req.query)
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

  // controller.create(req.body, function(err, result){
  //   if (err) {
  //     res.json({
  //       confirmation: 'fail',
  //       message: err
  //     })
  //     return
  //   }
  //   res.json({
  //     confirmation: 'success',
  //     result: result
  //   })
  // })
})


// router.post('/:register', function(req, res, next){
//   passport.authenticate('local.signup', {failureFlash: true}, function(err, user, info) {
//     if (err) { return next(err); }
//     // Redirect if it fails
//     if (!user) { return res.redirect('/signup'); }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       // Redirect if it succeeds
//       req.flash('success','Welcome, Lets get started!');
//       return res.redirect('/api/dashboard');
//     });
//  })(req, res, next);
// });



module.exports = router;
