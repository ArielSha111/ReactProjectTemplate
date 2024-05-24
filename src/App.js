// App.js
import React, { useState } from 'react';
import RibbonOptions from './RibbonOptions';
import CollapsibleSection from './CollapsibleSection';
import './App.css';

function App() {
  const [sections, setSections] = useState([]);

  const addCollapsibleSection = (type) => {
    const newSection = { type };
    setSections([...sections, newSection]);
  };

  return (
    <div className="App">
      <RibbonOptions addCollapsibleSection={addCollapsibleSection} />
      <div className="main-content">
        {sections.map((section, index) => (
          <CollapsibleSection key={index} type={section.type} />
        ))}
      </div>
    </div>
  );
}

export default App;
