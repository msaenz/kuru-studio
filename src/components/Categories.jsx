import React from 'react'
import './styles/Categories.scss'

const Categories = ({children, title}) => (
  <div>
  <h1>{title}</h1>
  <div className='category'>
    {children}
  </div>

</div>
)

export default Categories
