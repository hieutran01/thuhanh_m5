import { useEffect, useState } from "react";
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';

import TourCreate from "./pages/TourCreate";
import TourDelete from "./pages/TourDelete";
import TourEdit from "./pages/TourEdit";
import TourList from "./pages/TourList";
import TourShow from "./pages/TourShow";

import './App.css';

function App() {
  const [tours, setBooks] = useState([
    {
      name: 'Iphone',
      price: 2000
    }
  ]);
 


  return (
    <div className="App">

      <div className="content">

        <Provider store={store}>
        <Routes>

          <Route path="/tours" element={<TourList tours={tours} />} />
          <Route path="" element={<TourList tours={tours} />} />
          <Route path="/tours/create" element={<TourCreate />} />
          <Route path="/tours/delete/:id" element={<TourDelete />} />
          <Route path="/tours/:id/edit" element={<TourEdit />} />
          <Route path="/tours/:id" element={<TourShow />} />
        </Routes>
        </Provider>
      </div>
    
    </div>
  );
}

export default App;
