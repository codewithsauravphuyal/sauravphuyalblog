import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./context/authContext.jsx";
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Blog from './pages/blog/Blog.jsx';
import Blog_Details from './pages/blog/Blog_Details.jsx';
import Create from './pages/blog/Create.jsx';
import Edit from './pages/blog/Edit.jsx';
import OurServices from './components/footer/OurServices.jsx';
import Policy from './components/footer/Policy.jsx';
import TermsAndCondition from './components/footer/TermsAndCondition.jsx';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/post/:id" element={<Blog_Details />} />
          <Route path='/create' element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/termsandcondition" element={<TermsAndCondition />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
