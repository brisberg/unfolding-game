import React from 'react';
import './ProgressBar.css';

const ProgressBar: React.FC = () => {
  return (
    <div className="tracker">
      <div className="progress-in-tracker" percentage={25}></div>
    </div>
  );
}

export default ProgressBar;
