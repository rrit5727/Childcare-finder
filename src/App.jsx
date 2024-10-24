import { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './HomePage'
import axios from 'axios'

function App() {
  const [search, setSearch] = useState(false);
  const apiKeyRef = useRef('');

  const fetchApiKey = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/api-key'); // Adjust the URL as necessary
      apiKeyRef.current = response.data.apiKey; // Store the API key in the ref
    } catch (error) {
      console.error('Error fetching API key:', error);
    }
  };

  // Fetch the API key when the component mounts
  useEffect(() => {
    fetchApiKey();
  }, []);

  const sendInformation = () => {
    setSearch(true);
  };

  return (
    <>
      <main className="App">
        <div>
          <h1>Childcare finder</h1>
        </div>
        <Routes>
              <Route
                path="/"
                element={
                  <div className="center-searchPage">
                    <HomePage
                      search={search}
                      sendInformation={sendInformation}
                      apiKeyRef={apiKeyRef}
                    />
                  </div>
                }
              />
            </Routes>
      </main>
    </>
  )
}

export default App
