import React from 'react';
import './ExtractedContent.css';

function ExtractedContent({ student }) {
  return (
    <div className="extracted-content">
      <span>{student}</span>
    </div>
  );
}

export default ExtractedContent;
