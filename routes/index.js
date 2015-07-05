var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/author', function(req,res) {
	res.render('author', { title: 'Créditos', autor:'Ernesto Crespo',email:'ecrespo@gmail.com', blog:'blog.crespo.org.ve',foto:'/images/ecrespo.jpg'});

});

router.get('/quizes/question',quizController.question);
router.get('/quizes/answer',quizController.answer);


module.exports = router;
