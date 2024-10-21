import React from 'react';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <ContactCard
        name="Hubert L. S."
        title="Consultant TI Avancé & Spécialiste en Support Informatique et Relation Client"
        phone="514.371.8022"
        email="hlarosesurprenant@gmail.com"
        website="www.example.com"
        location="Greenfield Park, Quebec, Canada"
        github="https://github.com/hlsitechio"
        linkedin="https://www.linkedin.com/in/hubertls/"
      />
    </div>
  );
}

export default App;