// src/components/ScrapedDataDisplay.tsx
import React from 'react';

interface ScrapedDataDisplayProps {
  scrapedData: string;
  isRawHTML: boolean;
}

const ScrapedDataDisplay: React.FC<ScrapedDataDisplayProps> = ({ scrapedData }) => {
  return (
    <div>
      {scrapedData ? (
        <div>
          <h2>Scraped Data</h2>
          <pre>{scrapedData}</pre>
        </div>
      ) : (
        <div>
          <p>An error occurred during scraping. Please check your input and try again.</p>
        </div>
      )}
    </div>
  );
};


export default ScrapedDataDisplay;
