import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Side from "./Side";
import Main from "./Main";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to = "/notes"></Navigate>}></Route>
        <Route path="/notes" element={<App />}></Route>
        <Route path="/notes/:id" element={<App />}></Route>
        <Route path="/notes/:id/edit" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
