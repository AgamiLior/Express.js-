const express = require('express');
const app = express();
const ExpressError = require('./expressErr');

const { checkNumsArray, findMode, findMean, findMedian, findMediann } = require('./functions');

app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('Bad Request - You must pass a query key of nums.', 400)
    }
    let query = req.query.nums.split(',');
    let nums = checkNumsArray(query);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
      }
    let result = {
        operation: "mean",
        result: findMean(nums)
    }
    return res.send(result)
})

app.get('/median', (req, res, next) => {
    if (!req.query.nums){
        throw new ExpressError('Bad Request - You must pass a query key of nums.', 400)
    }
    let query = req.query.nums.split(',');
    let nums = checkNumsArray(query);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
      }
    let result = {
        operation: "median",
        result: findMedian(nums)
    }
    return res.send(result)
})

app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
      throw new ExpressError('You must pass a query key of nums.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    // check if anything bad was put in
    let nums = checkNumsArray(numsAsStrings);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
  
    let result = {
      operation: "mode",
      result: findMode(nums)
    }
  
    return res.send(result);
  
   
  });

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: 'Error',
      message: err.message
    });
  });
  

app.listen(3000, function () {
    console.log('Server has started')
})