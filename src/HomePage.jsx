import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

const HomePage = ({search, sendInformation}) => {
  const [address1, setAddress1] = useState([]);
  const [transportation, setTransportation] = useState(['driving']);
  const [childcareType, setchildcareType] = useState(['Centre-Based-Care']);

  const apiKeyRef = useRef('');
  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const response = await axios.get('/api/api-key');
        apiKeyRef.current = response.data.apiKey;
      } catch (error) {
        console.error('Error fetching API key:', error);
      }
    };

    fetchApiKey();
  }, []);

  

}