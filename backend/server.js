// backend/server.js
// server.js
import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import cors package

const PORT = 8000;
const app = express();

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

app.post('/scrape', async (req, res) => {
  const { url } = req.body;

  try {
    const response = await axios.get(url);
    const scrapedData = response.data; // Assuming the response is plain text

    // You can save scrapedData to a file or database if needed

    res.json({ data: scrapedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during scraping.' });
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
