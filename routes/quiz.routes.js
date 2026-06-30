const express = require('express');
const router = express.Router();
const controller = require('../controllers/quiz.controller');

router.get('/categories', controller.getCategories);
router.get('/questions', controller.getQuestions);
router.post('/submit', controller.submitAnswer);

module.exports = router;