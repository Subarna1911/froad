import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Task from './pages/Task';
import SinglePost from './components/SinglePost';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
           <Route path="/blog/:slug" element={<SinglePost/>} />

            <Route path="task" element={<Task />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;

