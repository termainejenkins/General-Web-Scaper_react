// src/components/ScrapedDataDisplay.tsx
import React from 'react';

interface ScrapedDataDisplayProps {
  scrapedData: string;
}

const ScrapedDataDisplay: React.FC<ScrapedDataDisplayProps> = ({ scrapedData }) => {
  return (
    <div>
      {scrapedData && (
        <div>
          <h2>Scraped Data</h2>
          <pre>{scrapedData}</pre>
        </div>
      )}
    </div>
  );
};

export default ScrapedDataDisplay;
