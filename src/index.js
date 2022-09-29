import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestCallback from './components/spotifyAuth/TestCallback';
import HomePage from './components/HomePage/HomePage';
import RequestPage from './components/RequestPage/RequestPage';
import EntryPage from './components/EntryPage/EntryPage';
import PerformerHub from './components/performers/PerformerHub/PerformerHub';
import AudienceHub from './components/audience/AudienceHub';
import CreateShow from './components/performers/CreateShow';
import SongSelector from './components/audience/SongSelector/SongSelector';
import NotFound from './components/404Page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App />}>
        <Route path='/callback' element={<TestCallback />} />
        <Route path='/entry' element={<EntryPage />} />

        <Route path='/home' element={<HomePage />} />

        <Route path='/performer' element={<PerformerHub />} />
        <Route path='/create' element={<CreateShow />} />
        <Route path='/performer/create' element={<CreateShow />} />
        {/* <Route path='/performer/show/:showId' element={<ShowDashboard />} /> */}
        <Route path='/requests' element={<RequestPage />} />

        <Route path='/audience' element={<AudienceHub />} />
        <Route path='/audience/gigs/:gigId' element={<SongSelector />} />
        {/* requests page probably not needed */}
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
