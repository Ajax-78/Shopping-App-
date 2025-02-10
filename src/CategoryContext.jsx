import React, { createContext, useState, useEffect } from "react";


export const CategoryContext = createContext();


export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  const fetchedData=async()=>{
   const res= await fetch("https://dummyjson.com/products/category-list")
   const data =await res.json();

   if(data.length>0)
   {
    setCategory(data)
   }
      
  }


  useEffect(() => {
    fetchedData()
    
  }, []);

  return (
    <CategoryContext.Provider value={{ category }}>
      {children}
    </CategoryContext.Provider>
  );
};
