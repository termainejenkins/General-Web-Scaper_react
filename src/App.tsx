// src/App.tsx
import React, { useState } from 'react';
import axios from 'axios';
import ScrapeForm from './components/ScrapeForm';
import ScrapedDataDisplay from './components/ScrapedDataDisplay';
import DOMPurify from 'dompurify';
const App: React.FC = () => {
  const [scrapedData, setScrapedData] = useState<{ content: string; isRawHTML: boolean }>({
    content: '',
    isRawHTML: false,
  });
  const [loading, setLoading] = useState(false);

  const handleScrape = async (url: string, dataSelector?: string) => {
    console.log('Attempting to scrape...');
    try {
      setLoading(true);

      console.log('Sending request to:', url);
      console.log('Using data selector:', dataSelector || 'No data selector provided');

      const response = await axios.post('http://localhost:8000/scrape', { url, dataSelector });

      console.log('Response:', response.data.data);
      setScrapedData({ content: response.data.data, isRawHTML: true });
    } catch (error) {
      console.error('Error during scraping, could not fetch raw text from URL response:', error);

      // If there is an error, attempt to fetch raw HTML text directly from the URL
      try {
        const rawTextResponse = await fetch(url);
        const rawText = await rawTextResponse.text();

        // Label the data as raw HTML
        setScrapedData({ content: rawText, isRawHTML: true });
      } catch (fetchError) {
        console.error('Error fetching raw text:', fetchError);
        setScrapedData({ content: 'An error occurred during scraping.', isRawHTML: false });
      }
    } finally {
      setLoading(false);
    }
  };

  // Sanitize the raw HTML text
  const sanitizedText = DOMPurify.sanitize(scrapedData.content, { ALLOWED_TAGS: [] });
  console.log('Sanitized text completed');
  console.log('sanitizedText:', sanitizedText);

  return (
    <div>
      <h1>General Web Scraper</h1>
      <ScrapeForm onScrape={handleScrape} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ScrapedDataDisplay scrapedData={sanitizedText} isRawHTML={scrapedData.isRawHTML} />
      )}
    </div>
  );
};

export default App;