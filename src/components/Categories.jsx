import React from 'react'
import './styles/Categories.scss'

const Categories = ({children, title}) => (
  <div className='category'>
    <h1>{title}</h1>
    {children}
  </div>
)

export default Categories
