const express = require('express');
const cors = require('cors');
const path = require('path');
const AppError = require('./utils/AppError');
const quizRoutes = require('./routes/quiz.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/quiz', quizRoutes);
app.use((req, res, next) => {
  next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

module.exports = app;