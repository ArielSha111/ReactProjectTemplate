// CollapsibleSection.js
import React, { useState } from 'react';

const CollapsibleSection = ({ type }) => {
  const [condition, setCondition] = useState('');

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  const renderSection = () => {
    if (type === 'if') {
      return (
        <div className="collapsible-section">
          <h3>IF Section</h3>
          <input
            type="text"
            placeholder="Enter condition"
            value={condition}
            onChange={handleConditionChange}
          />
        </div>
      );
    } else if (type === 'loop') {
      return (
        <div className="collapsible-section">
          <h3>Loop Section</h3>
          {/* Add loop section content here */}
        </div>
      );
    }
    return null;
  };

  return renderSection();
};

export default CollapsibleSection;
