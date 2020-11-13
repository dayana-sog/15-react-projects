import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

import api from './api';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours);
  };

  const loadingData = async() => {
    setLoading(true);

    try {
      const response = await api.get('react-tours-project');

      setLoading(false);
      setTours(response.data);
    } catch (error) {
      setLoading(false);

      console.log('Error', error);
    }  
  };

  useEffect(() => {
    loadingData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={loadingData}>Load tours</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App
