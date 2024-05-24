// RibbonOptions.js
import React from 'react';

const RibbonOptions = ({ addCollapsibleSection }) => {
  const handleAddSection = (type) => {
    addCollapsibleSection(type);
  };

  return (
    <div className="ribbon">
      <button onClick={() => handleAddSection('if')}>Add If Section</button>
      <button onClick={() => handleAddSection('loop')}>Add Loop Section</button>
    </div>
  );
};

export default RibbonOptions;
