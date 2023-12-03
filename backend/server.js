// backend/server.js
import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

const PORT = 8000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World! This is the backend.');
});

// Example scraping route
app.post('/scrape', async (req, res) => {
  const { url, dataSelector } = req.body;

  // Implement your web scraping logic here using axios and cheerio

  res.send({ scrapedData: 'Scraped data goes here' });
});

app.listen(PORT, () => console.log(`Backend server running on PORT ${PORT}`));
