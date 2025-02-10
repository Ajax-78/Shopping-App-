import React, { useEffect, useState } from 'react'

function Product({selectedCategory}) {

    const [data,setData]=useState([]);
   const [page,setPage]=useState(1)


    const url="https://dummyjson.com/products?limit=100"
     const fetchData=async()=>{
       const res=await fetch(url);
       const response= await res.json();
       if(response && response.products){
        setData(response.products)
       }
       
        
     }
    
     useEffect(()=>{
       fetchData()
     },[page])

     const handleselectedPage=(page)=>{
        if(page>0 && page<=Math.ceil(data.length/10))
        setPage(page)
     }


      const filterData=selectedCategory? data.filter((item)=>item.category === selectedCategory):data;

  return (<>
     <div   className='text-center h-auto  font-bold mb-4 mt-4 text-[20px]'>Product</div>
    <div className='flex flex-wrap h-auto '>

        
        
        {filterData.slice(page*10-10,page*10).map((item,index)=>{
            return(
                <div key={index} className='m-2 border w-[207px] shadow-xl'>
                    <img 
                    className='w-44 h-44 object-cover '
                    src={item.thumbnail} alt="item.title" />
                    <div className='text-center font-semibold'>{item.title}</div>
                </div>
            )
        })}

    </div>
    {
      filterData.length > 0 && (
        <div className='flex align-middle justify-center'> 
          <span 
          className='mt-2 cursor-pointer'
          onClick={(()=>handleselectedPage(page-1))}>⬅️</span>
           {[...Array(Math.ceil(data.length/10))].map((item,index)=>{
            return (
               <div className='m-2 cursor-pointer'>
                 <span 
                className={page===index+1 && 'block w-6 text-center border bg-slate-400 rounded-xl'}
                onClick={(()=>handleselectedPage(index+1))}
                key={index}>{index+1}</span>
               </div>
            )
            })}
           <span 
           className='mt-2  cursor-pointer'
           onClick={(()=>handleselectedPage(page+1))}>➡️</span>
        </div>
      )
    }
    </>
  )
}

export default Product