// General Imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Gallery from "./pages/Gallery/Gallery"; 
import Blog from "./pages/Blog/Blog"; 
import SearchResults from "./pages/SearchResults/SearchResults";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import CreateBlog from "./pages/CreateBlog/CreateBlog";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ImageForm from "./components/ImageForm/ImageForm";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar /> {/* Navbar is rendered for all routes */}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/upload-image" element={<ImageForm />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/create-blog" element={<CreateBlog />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
