import React from 'react'
import Model from './Model'

const categories = [
  {
    id: 1,
    name: "General Knowledge",
    description: "Quos aut sed nesciunt facere reprehenderit mollitia vero dignissimos aliquam officia nobis. Asperiores eius explicabo saepe est voluptas cum officia.",
    background: "#B9FF67"
  },
  {
    id: 2,
    name: "Database & Algorithm",
    description: "Quos aut sed nesciunt facere reprehenderit mollitia vero dignissimos aliquam officia nobis. Asperiores eius explicabo saepe est voluptas cum officia.",
    background: "white"
  },
  {
    id: 3, 
    name: "Current Affair",
    description: "Quos aut sed nesciunt facere reprehenderit mollitia vero dignissimos aliquam officia nobis. Asperiores eius explicabo saepe est voluptas cum officia.",
    background: "white"
  },
  {
    id: 4, 
    name: "Current Affair",
    description: "Quos aut sed nesciunt facere reprehenderit mollitia vero dignissimos aliquam officia nobis. Asperiores eius explicabo saepe est voluptas cum officia.",
    background: "#B9FF67"
  }
]

const Service = () => {
  return (
    <div>
      <div className="header">
        <h1 className='text-[40px] w-[200px] flex justify-center items-center font-extrabold'>Categories</h1>
        <div className='grid grid-cols-2'>
          {
            categories.map((item) => (
              <Model key={item.id} name={item.name} description={item.description} background={item.background}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Service