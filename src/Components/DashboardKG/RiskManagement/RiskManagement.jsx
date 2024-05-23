import React, { useState } from 'react';
import TagsInput from '../../TagsInput/TagsInput';
import './RiskManagement.css';

const initialRisks = [
  "Local Transition Risk",
  "Accidental Risk",
  "Quality Risk",
  "Supplier Risk",
  "Supplier Supply Risk",
  "Supplier Payment Risk",
  "Risk of Loss",
  "Storage Risk",
  "Fungus Risk",
  "Rotting Risk",
  "Weather Risk",
  "Natural Calamity Risk",
  "Fire Risk",
  "Sailing Period Risk",
  "Buyer Payment Risk",
  "Market Acceptance Risk",
  "Political Risk",
  "Currency Risk",
  "Legal and Regulatory Risk",
  "Cultural Risk",
  "Intellectual Property Risk",
  "Logistical Risk",
  "Security Risk",
  "Ethical and Social Responsibility Risk",
  "Competitive Risk",
  "Technology Risk"
];

const mitigationSuggestions = [
  "ECGC",
  "Insurance",
  "Lab Test Reports",
  "Product Knowledge",
  // Other mitigation suggestions...
];

const RiskManagement = () => {
  const [risks, setRisks] = useState(initialRisks);
  const [mitigations, setMitigations] = useState({});

  const handleAddRisk = () => {
    // When adding a new risk, add an empty string to the array of risks
    setRisks([...risks, '']);
  };

  const handleRisksChange = (newRisks) => {
    // Update the entire array of risks
    setRisks(newRisks);
  };

  const handleMitigationsChange = (riskIndex, newMitigations) => {
    setMitigations((prevState) => ({
      ...prevState,
      [riskIndex]: newMitigations,
    }));
  };

  return (
    <div className="KnowledgeGathering">
      <h3>Risk Management</h3>
      <button onClick={handleAddRisk}>Add Risk</button>
      <div></div>
      <div className='riskContainer'>
        <table className='table'>
          <thead>
            <tr>
              <th style={{width:"50%"}}>Risks</th>
              <th style={{width:"50%"}}>Mitigations</th>
            </tr>
          </thead>
          <tbody>
            {risks.map((risk, riskIndex) => (
              <tr key={riskIndex}>
                <td style={{width:"50%"}}>
                  <TagsInput
                    tags={risks} // Pass the entire array of risks
                    setTags={handleRisksChange} // Handle changes to the entire array
                    suggestions={initialRisks}
                    label={"Risk"}
                  />
                </td>
                <td style={{width:"50%"}}>
                  <TagsInput
                    tags={mitigations[riskIndex] || []}
                    setTags={(newMitigations) => handleMitigationsChange(riskIndex, newMitigations)}
                    suggestions={mitigationSuggestions}
                    label={"Mitigations"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RiskManagement;
