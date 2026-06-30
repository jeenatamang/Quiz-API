const API_BASE = '/quiz';
const app = document.getElementById('app');

let questions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

async function loadQuiz() {
  try {
    const res = await fetch(`${API_BASE}/questions`);
    const json = await res.json();
    if (!json.success) throw new Error(json.message);
    questions = json.data;
    currentIndex = 0;
    score = 0;
    renderQuestion();
  } catch (err) {
    app.innerHTML = `<div class="error-box">Couldn't load quiz: ${err.message}</div>`;
  }
}

function renderQuestion() {
  answered = false;
  const q = questions[currentIndex];
  const progressPct = (currentIndex / questions.length) * 100;

  app.innerHTML = `
    <div class="top-bar">
      <span class="progress-text">Question ${currentIndex + 1} of ${questions.length}</span>
      <span class="score-pill">Score: ${score}</span>
    </div>

    <div class="progress-track">
      <div class="progress-fill" style="width:${progressPct}%"></div>
    </div>

    <span class="category-tag">${q.category} · ${q.difficulty}</span>
    <p class="question-text">${escapeHtml(q.question)}</p>

    <div class="options" id="options">
      ${q.options.map((opt, i) => `
        <button class="option" data-index="${i}">
          ${escapeHtml(opt)}
        </button>
      `).join('')}
    </div>

    <button class="next-btn" id="nextBtn">
      ${currentIndex === questions.length - 1 ? 'See results' : 'Next question'}
    </button>
  `;

  document.querySelectorAll('.option').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index);
      selectAnswer(index);
    });
  });

  document.getElementById('nextBtn').addEventListener('click', nextQuestion);
}
async function selectAnswer(selectedOption) {
  if (answered) return;
  answered = true;

  const q = questions[currentIndex];
  const optionButtons = document.querySelectorAll('.option');
  optionButtons.forEach(btn => btn.disabled = true);

  try {
    const res = await fetch(`${API_BASE}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId: q.id, selectedOption })
    });

    const json = await res.json();
    const { isCorrect, correctAnswer } = json.data;

    optionButtons.forEach((btn, i) => {
      btn.classList.add('selected');

      if (i === correctAnswer) {
        btn.classList.add('correct');
      } else if (i === selectedOption) {
        btn.classList.add('wrong');
      }
    });

    if (isCorrect) score++;

    document.getElementById('nextBtn').classList.add('visible');

  } catch (err) {
    app.innerHTML = `<div class="error-box">Something went wrong: ${err.message}</div>`;
  }
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    renderResults();
  }
}

function renderResults() {
  const pct = Math.round((score / questions.length) * 100);
  let message = "Keep practicing!";

  if (pct === 100) {
    message = "Perfect score!";
  } else if (pct >= 70) {
    message = "Great job!";
  } else if (pct >= 40) {
    message = "Not bad!";
  }

  app.innerHTML = `
    <div class="results">
      <p class="results-score">${score} / ${questions.length}</p>
      <p class="results-sub">${message} You scored ${pct}%.</p>
      <button class="restart-btn" id="restartBtn">Play again</button>
    </div>
  `;

  document.getElementById('restartBtn').addEventListener('click', loadQuiz);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

loadQuiz();