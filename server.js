require('dotenv').config();

const express = require('express');
const cors = require('cors');

const LearningPathOrchestrator =
  require('./backend/agents/orchestrator');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Learning Path Generator API Running'
  });
});

app.post('/generate-learning-path', (req, res) => {

  const { goal, level } = req.body;

  const orchestrator =
    new LearningPathOrchestrator();

  const result =
    orchestrator.generate(goal, level);

  res.json(result);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});
