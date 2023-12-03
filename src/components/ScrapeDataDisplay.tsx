// src/components/ScrapedDataDisplay.tsx
import React from 'react';

interface ScrapedDataDisplayProps {
  scrapedData: string;
}

const ScrapedDataDisplay: React.FC<ScrapedDataDisplayProps> = ({ scrapedData }) => {
  return <div>{scrapedData && <div>Scraped Data: {scrapedData}</div>}</div>;
};

export default ScrapedDataDisplay;
