require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Quiz API running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT}`);
});

