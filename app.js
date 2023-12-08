import express from 'express';
import tasks from './routes/tasks.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
global.__dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! You\'re on ' + fileURLToPath(import.meta.url) + ' and dirname is ' + __dirname);
});

app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
    console.log(`http://localhost:${port}`);
});