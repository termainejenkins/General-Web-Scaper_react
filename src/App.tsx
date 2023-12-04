// src/App.tsx
import React, { useState } from 'react';
import axios from 'axios';
import ScrapeForm from './components/ScrapeForm';
import ScrapedDataDisplay from './components/ScrapedDataDisplay';


const App: React.FC = () => {
  const [scrapedData, setScrapedData] = useState('');

  const handleScrape = async (url: string, dataSelector?: string) => {
    console.log('Handling scrape...');
    try {
      console.log('Sending request to:', url);
      console.log('Using data selector:', dataSelector || 'No data selector provided');

      const response = await axios.post('http://localhost:8000/scrape', { url, dataSelector });

      console.log('Response:', response.data.data);
      setScrapedData(response.data.data);
    } catch (error) {
      console.error('Error during scraping:', error);
      setScrapedData('An error occurred during scraping.');
    }
  };

  return (
    <div>
      <h1>Web Scraping App</h1>
      <ScrapeForm onScrape={handleScrape} />
      <ScrapedDataDisplay scrapedData={scrapedData} />
    </div>
  );
};
console.log("TESTING TESTING--App started")
export default App;
