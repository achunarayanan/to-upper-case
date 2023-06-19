var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Upper Case Converter' });
});

router.post('/submit',(req,res)=>{
  // recieving the input text from client
  const text=req.body.inputText;
  upperCaseText=text.toUpperCase();
  //rendering the to-uppercase hbs file
  res.render('to-uppercase',{upperCaseText});
})

module.exports = router;
