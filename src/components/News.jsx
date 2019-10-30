import React from 'react'
// import "./styles/NewsItem.scss";
import "./styles/News.scss";


const News = ({children, title}) => (
  <div className='news'>
    <h1>{title}</h1>
    <div className='news__container'>
      {children}
    </div>
  </div >
)

export default News
