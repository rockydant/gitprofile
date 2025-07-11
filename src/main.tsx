import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GitProfile from './components/gitprofile';
import BlogPostDetail from './components/blog-post-detail';
import CONFIG from '../gitprofile.config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GitProfile config={CONFIG} />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
