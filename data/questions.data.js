const questions = [
  {
    id: 1,
    category: "general",
    difficulty: "easy",
    question: "What is the capital of Nepal?",
    options: ["Pokhara", "Kathmandu", "Lalitpur", "Biratnagar"],
    correctAnswer: 1
  },
  {
    id: 2,
    category: "general",
    difficulty: "easy",
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2
  },
  {
    id: 3,
    category: "tech",
    difficulty: "medium",
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "HyperText Transmission Process",
      "High Transfer Text Protocol",
      "Host Transfer Text Process"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    category: "tech",
    difficulty: "medium",
    question: "Which company created JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    correctAnswer: 1
  },
  {
    id: 5,
    category: "tech",
    difficulty: "hard",
    question: "What does CRUD stand for?",
    options: [
      "Create, Read, Update, Delete",
      "Copy, Read, Use, Drop",
      "Create, Repeat, Use, Delete",
      "Connect, Read, Update, Disconnect"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    category: "general",
    difficulty: "medium",
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
    correctAnswer: 2
  },
  {
    id: 7,
    category: "sports",
    difficulty: "easy",
    question: "How many players are on a football (soccer) team on the field?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 2
  },
  {
    id: 8,
    category: "sports",
    difficulty: "medium",
    question: "Which country won the FIFA World Cup in 2018?",
    options: ["Brazil", "Germany", "France", "Argentina"],
    correctAnswer: 2
  },
  {
    id: 9,
    category: "sports",
    difficulty: "hard",
    question: "In cricket, what is the maximum number of overs in a T20 match per side?",
    options: ["10", "20", "40", "50"],
    correctAnswer: 1
  },
  {
    id: 10,
    category: "movie",
    difficulty: "easy",
    question: "Which movie features the character Jack Dawson?",
    options: ["Avatar", "Titanic", "Inception", "Gladiator"],
    correctAnswer: 1
  },
  {
    id: 11,
    category: "movie",
    difficulty: "medium",
    question: "Who directed the movie 'Inception'?",
    options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Ridley Scott"],
    correctAnswer: 1
  },
  {
    id: 12,
    category: "movie",
    difficulty: "hard",
    question: "Which movie won the Oscar for Best Picture in 2020?",
    options: ["1917", "Joker", "Parasite", "Ford v Ferrari"],
    correctAnswer: 2
  },
  {
    id: 13,
    category: "history",
    difficulty: "easy",
    question: "Who was the first President of the United States?",
    options: ["Abraham Lincoln", "George Washington", "John Adams", "Thomas Jefferson"],
    correctAnswer: 1
  },
  {
    id: 14,
    category: "history",
    difficulty: "medium",
    question: "In which year did World War II end?",
    options: ["1943", "1945", "1947", "1950"],
    correctAnswer: 1
  },
  {
    id: 15,
    category: "history",
    difficulty: "hard",
    question: "Which empire was ruled by Genghis Khan?",
    options: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "Persian Empire"],
    correctAnswer: 2
  },
  {
    id: 16,
    category: "tech",
    difficulty: "easy",
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Power Unit",
      "Control Processing Unit"
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    category: "tech",
    difficulty: "hard",
    question: "Which data structure uses FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correctAnswer: 1
  },
  {
    id: 18,
    category: "medical",
    difficulty: "easy",
    question: "What organ pumps blood throughout the body?",
    options: ["Lungs", "Brain", "Heart", "Kidney"],
    correctAnswer: 2
  },
  {
    id: 19,
    category: "medical",
    difficulty: "medium",
    question: "What is the normal human body temperature in Celsius?",
    options: ["35°C", "36°C", "37°C", "38°C"],
    correctAnswer: 2
  },
  {
    id: 20,
    category: "medical",
    difficulty: "hard",
    question: "What does ECG stand for?",
    options: [
      "Electrocardiogram",
      "Echo Cardio Graph",
      "Electrical Cardio Gram",
      "Electro Cell Graph"
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    category: "general",
    difficulty: "medium",
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: 1
  },
  {
    id: 22,
    category: "general",
    difficulty: "hard",
    question: "What is the smallest unit of life?",
    options: ["Atom", "Molecule", "Cell", "Tissue"],
    correctAnswer: 2
  }
];

module.exports = questions;