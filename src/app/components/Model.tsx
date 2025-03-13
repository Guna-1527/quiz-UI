import React from 'react'

interface ModelType {
  name: string,
  description: string,
  background: string
}

const Model = ({ name, description, background} : ModelType) => {
  return (
    <div style={{ backgroundColor: background }}  className='w-[600] h-[310] rounded-2xl mt-10 p-4'>
      <h1 className='p-5 font-bold text-[24px]'>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Model