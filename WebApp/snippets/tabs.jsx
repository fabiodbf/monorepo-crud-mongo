import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab ${index === activeTab ? "active" : ""}`}
          onClick={() => setActiveTab(index)}
        >
          {tab.title}
        </div>
      ))}
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
