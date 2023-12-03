// src/App.tsx
import React, { useState } from 'react';
import axios from 'axios';
import ScrapeForm from './components/ScrapeForm';
import ScrapedDataDisplay from './components/ScrapeDataDisplay';

const App: React.FC = () => {
  const [scrapedData, setScrapedData] = useState('');

  const handleScrape = async (url: string, dataSelector: string) => {
    try {
      const response = await axios.post('http://localhost:8000/scrape', { url, dataSelector });
      setScrapedData(response.data.data);
    } catch (error) {
      console.error(error);
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

export default App;
