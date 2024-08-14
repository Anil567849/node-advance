import cluster  from 'cluster';
import express  from 'express';
import axios  from 'axios';
import os  from 'os';
const ax = axios.default;
const numCPUs = os.cpus().length;


if (cluster.isPrimary) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    // Optionally, restart the worker process here
    // cluster.fork();
  });
} else {
  // Create Worker process of each CPU - When ever user get into application our different CPU will handle users.
  const app = express();

  app.get('/', async (req, res) => {
    try {
      let arr = [];

      // Simulate fetching data multiple times (adjust as needed)
      for (let i = 0; i < 5; i++) {
        const { data } = await ax.get('https://jsonplaceholder.typicode.com/todos');
        arr.push(data);
      }
      console.log(`Worker ${process.pid} Resolved Query.`);
      return res.json(arr);
    } catch (error) {
      console.error('Error fetching data:', error);
      return res.status(500).json({ error: 'Failed to fetch data' });
    }
  });

  // Start Express server for each child and parent
  const server = app.listen(8000, () => {
    console.log(`Worker ${process.pid} started. Listening on port 8000`);
  });

  // Handle server errors for each child and parent
  server.on('error', (err) => {
    console.error('Server error:', err);
  });
}
