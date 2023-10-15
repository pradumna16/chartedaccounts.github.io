import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/chartedacc/search', (req, res) => {
  const name = req.query.name;

  fs.readFile('CA.json', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    const CAData = JSON.parse(data);

    const filteredData = CAData.filter((ca) =>
      ca.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(filteredData);
  });
});

app.listen(3800, () => {
  console.log('Server is running on port 3800');
});
