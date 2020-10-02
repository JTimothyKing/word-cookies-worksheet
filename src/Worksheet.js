import React from 'react';
import './Worksheet.css';

function Worksheet() {
  return (
    <div className="worksheet">
      <header className="worksheet-header">
        <img src={process.env.PUBLIC_URL + '/android-chrome-512x512.png'} className="worksheet-logo" alt="" />
        <p>
          Coming soon!
        </p>
      </header>
    </div>
  );
}

export default Worksheet;
