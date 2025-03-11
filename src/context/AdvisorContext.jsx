import React, { createContext, useState, useContext } from 'react';

const AdvisorContext = createContext();

export const useAdvisor = () => useContext(AdvisorContext);

export const AdvisorProvider = ({ children }) => {
  const [advisor, setAdvisor] = useState('Heather');
  const [messages, setMessages] = useState([]);
  const [services, setServices] = useState([]);
  const [progress, setProgress] = useState([]);

  const addMessage = (message) => setMessages([...messages, message]);
  const addService = (service) => setServices([...services, service]);
  const addProgress = (milestone) => setProgress([...progress, milestone]);

  return (
    <AdvisorContext.Provider value={{ advisor, messages, services, progress, addMessage, addService, addProgress }}>
      {children}
    </AdvisorContext.Provider>
  );
};
