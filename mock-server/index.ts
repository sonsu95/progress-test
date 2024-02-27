import express from 'express';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/mock-server', (req, res) => {
  const filePath = path.join(__dirname, 'mock-server.json');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(404).send('Not found');
    }

    res.setHeader('Content-Length', data.length);
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

