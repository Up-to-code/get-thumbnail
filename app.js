
import express, { json } from 'express';
const app = express();
const port = 3000; // You can change this port number if needed
import getThumbnail from 'youtube-thumbnail';



// Middleware (if needed)
app.use(json());
// Route to get YouTube thumbnail
app.post('/get-thumbnail', (req, res) => {
  const videoUrl = req.body.url;
  if (!videoUrl) {
    return res.status(400).json({ error: 'Missing video URL' });
  }

  try {
    const thumbnail = getThumbnail(videoUrl);
    res.json(thumbnail);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get thumbnail' });
  }
});
// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
