import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { CategoryContext } from "../CategoryContext";
// import Videos from "./Videos";
import Product from "./Products";

// import ImageCrousel from "./ImageCrousel";

function Header() {
  const { category } = useContext(CategoryContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <nav className="relative bg-blue-500 p-2 flex items-center justify-between text-white shadow-md">
        {/* Left Section: Menu and Home */}
        <div className="flex items-center space-x-4">
          <button
            className="p-2 bg-blue-600 rounded-full shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <NavLink to="/">Home</NavLink>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink className={({ isActive }) => `${isActive ? "text-blue-300" : "text-white"}`} to="/About">About</NavLink>
          <NavLink className={({ isActive }) => `${isActive ? "text-blue-300" : "text-white"}`} to="/Contact">Contact</NavLink>
          <NavLink className={({ isActive }) => `${isActive ? "text-blue-300" : "text-white"}`} to="/Login">Login</NavLink>
        </div>
      </nav>

      <div className="flex">
        {/* Category Menu */}
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="relative left-0 w-auto overflow-y-scroll bg-white shadow-lg p-5  z-50  "
            
          >
            
            <h2 className="text-xl font-bold mb-4 mt-12">Categories</h2>
            <ul>
              {category?.map((item, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-200 rounded cursor-pointer"
                  onClick={() => {
                    setSelectedCategory(item);
                    setIsOpen(false);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}


        {/* <ImageCrousel/> */}
        {/* <Videos/> */}
        {/* Product Component Adjusting */}
        <div className={`transition-all duration-300 ${isOpen ? 'ml-20' : 'ml-16'} w-full`}> 
          <Product  selectedCategory={selectedCategory}/>
        </div>
      </div>
    </>
  );
}

export default Header;
