// src/components/ScrapeForm.tsx
import React, { useState } from 'react';

interface ScrapeFormProps {
  onScrape: (url: string, dataSelector?: string) => void;
}


const ScrapeForm: React.FC<ScrapeFormProps> = ({ onScrape }) => {
  const [url, setUrl] = useState('');
  const [dataSelector, setDataSelector] = useState('');

  const handleScrape = () => {
    if (url.trim() !== '') {
      console.log('URL:', url);
      console.log('Data Selector:', dataSelector);
      onScrape(url, dataSelector);
    } else {
      // Handle empty URL case
      console.error('Please enter a valid URL.');
    }
  };
  

  return (
    <div>
      <label>
        Website URL:
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      </label>
      <br />
      <label>
        Data Selector:
        <input type="text" value={dataSelector} onChange={(e) => setDataSelector(e.target.value)} />
      </label>
      <br />
      <button onClick={handleScrape}>Scrape Data</button>
    </div>
  );
};

export default ScrapeForm;
