import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/users', (req, res) => {
  res.json([{ name: 'John' }, { name: 'Doe' }]);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
