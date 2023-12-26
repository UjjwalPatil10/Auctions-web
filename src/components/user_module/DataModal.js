import React from 'react';

const DataModal = ({ data }) => {
  return (
    <div>
      {/* Display the data here */}
      {data && Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
};

export default DataModal;