var catData = require('../model/category')
var quizData = require('../model/quiz')
var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

/* GET home page. */
router.post('/addcategory', async function(req, res, next) {
  try {
    data = await catData.create(req.body)
    console.log(data);
    res.status(201).json({
      status: "success",
      message: "create successfully",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});

router.get('/deletecategory', async function(req, res, next) {
  try {
    let id = req.query.id
    console.log(id);
    let data = await catData.findByIdAndDelete(id)
    console.log(data);
    
    res.status(201).json({
      status: "success",
      message: "delete successfully",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});

router.post('/updatecategory', async function(req, res, next) {
  try {
    let eid = req.query.eid
    console.log(eid);
    let edata = await catData.findByIdAndUpdate(eid, req.body)
    console.log(edata);
    res.status(201).json({
      status: "success",
      message: "updated successfully",
      data: edata
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});

router.get('/showcategory', async function(req, res, next) {
  try {
    let data = await catData.find()
    console.log(data);
    res.status(201).json({
      status: "success",
      message: "data showed successfully",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});

router.post('/addquiz', async function(req, res, next) {
  try {
    data = await quizData.create(req.body)
    console.log(data);
    res.status(201).json({
      status: "success",
      message: "create successfully",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});

router.get('/deletequiz', async function(req, res, next) {
  try {
    let id = req.query.id
    console.log(id);
    let data = await quizData.findByIdAndDelete(id)
    console.log(data);
    
    res.status(201).json({
      status: "success",
      message: "delete successfully",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});

router.post('/updatequiz', async function(req, res, next) {
  try {
    let eid = req.query.eid
    console.log(eid);
    let edata = await quizData.findByIdAndUpdate(eid, req.body)
    console.log(edata);
    res.status(201).json({
      status: "success",
      message: "updated successfully",
      data: edata
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});

router.get('/showquiz', async function(req, res, next) {
  try {
    let data = await quizData.find()
    console.log(data);
    res.status(201).json({
      status: "success",
      message: "data showed successfully",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});
module.exports = router;
