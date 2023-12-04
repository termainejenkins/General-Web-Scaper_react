import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import { createProxyMiddleware } from 'http-proxy-middleware';

const PORT = 8000;
const app = express();

app.use(bodyParser.json());

// This is a proxy route for the /scrape endpoint
app.use(
  '/scrape',
  createProxyMiddleware({
    target: 'http://localhost:8000',  // This is the backend server's URL
    changeOrigin: true,
  })
);

// Express Server route for existing /scrape route
app.post('/scrape', async (req, res) => {
  const { url } = req.body;

  try {
    const response = await axios.get(url);
    const scrapedData = response.data; // Assuming the response is plain text

    // You can save scrapedData to a file or database if needed

    res.json({ data: scrapedData });
  } catch (error) {
    console.error(error);

    // Return a more detailed error response
    res.status(500).json({ error: 'An error occurred during scraping.', details: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
