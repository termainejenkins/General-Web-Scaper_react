// server.js
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = 8000;
const app = express();

app.use(cors()); // Enable CORS

app.use(bodyParser.json());

app.options('/scrape', cors()); // Enable preflight CORS for the /scrape route

app.post('/scrape', async (req, res) => {
  const { url } = req.body;

  try {
    const response = await axios.get(url);
    const scrapedData = response.data; // Assuming the response is plain text

    // We can save scrapedData to a file or database if needed

    res.json({ data: scrapedData });
  } catch (error) {
    console.error(error);

    // Return a more detailed error response
    res.status(500).json({ error: 'An error occurred during scraping.', details: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
