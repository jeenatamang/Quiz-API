const questions = require('../data/questions.data');
const AppError = require('../utils/AppError');

exports.getQuestions = (req, res, next) => {
  try {
    const { category, difficulty } = req.query;
    let result = [...questions];

    if (category) {
      result = result.filter(q => q.category === category);
    }
    if (difficulty) {
      result = result.filter(q => q.difficulty === difficulty);
    }

    const safeQuestions = result.map(({ correctAnswer, ...rest }) => rest);

    res.status(200).json({
      success: true,
      message: "Questions fetched successfully",
      count: safeQuestions.length,
      data: safeQuestions
    });
  } catch (err) {
    next(err);
  }
};

exports.submitAnswer = (req, res, next) => {
  try {
    const { questionId, selectedOption } = req.body;

    if (questionId === undefined || selectedOption === undefined) {
      throw new AppError('questionId and selectedOption are required', 400);
    }

    const question = questions.find(q => q.id === questionId);
    if (!question) {
      throw new AppError('Question not found', 404);
    }

    const isCorrect = question.correctAnswer === selectedOption;

    res.status(200).json({
      success: true,
      message: isCorrect ? 'Correct answer!' : 'Wrong answer',
      data: {
        isCorrect,
        correctAnswer: question.correctAnswer,
        correctAnswerText: question.options[question.correctAnswer]
      }
    });
  } catch (err) {
    next(err);
  }
};
exports.getCategories = (req, res, next) => {
  try {
    const categories = [...new Set(questions.map(q => q.category))];
    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (err) {
    next(err);
  }
};