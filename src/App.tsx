// src/App.tsx
import React, { useState } from 'react';
import axios from 'axios';
import ScrapeForm from './components/ScrapeForm';
import ScrapedDataDisplay from './components/ScrapedDataDisplay';

const App: React.FC = () => {
  const [scrapedData, setScrapedData] = useState('');
  const [loading, setLoading] = useState(false);

  const handleScrape = async (url: string, dataSelector?: string) => {
    console.log('Handling scrape...');
    try {
      setLoading(true); // Set loading to true when starting the scraping operation

      console.log('Sending request to:', url);
      console.log('Using data selector:', dataSelector || 'No data selector provided');

      const response = await axios.post('http://localhost:8000/scrape', { url, dataSelector });

      console.log('Response:', response.data.data);
      setScrapedData(response.data.data);
    } catch (error) {
      console.error('Error during scraping:', error);
      setScrapedData('An error occurred during scraping.');
    } finally {
      setLoading(false); // Set loading to false when the operation completes (either success or failure)
    }
  };

  return (
    <div>
      <h1>General Web Scaper</h1>
      <ScrapeForm onScrape={handleScrape} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ScrapedDataDisplay scrapedData={scrapedData} />
      )}
    </div>
  );
};

export default App;
