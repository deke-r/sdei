import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const BannerTop = (props) => {
  return (
    <>
    <div className="banner-top banner-top-about" style={{height:500}}>
        

        <div className="video-overlay"></div>
        <Navbar />
        <div className="container banner-txt font-pop">
              <h1>{props.page}</h1>
              <h3><Link to='/' style={{textDecoration:'none'}}> 
              <span className='text-o'>Home</span>
               </Link>
                <Link to={`/${props.page2}`} className='text-o' style={{textDecoration:'none'}} >{props.page2?'/ '+props.page2 :'' }</Link>  
                <Link to={`/${props.page3}`} className='text-o' style={{textDecoration:'none'}} >{props.page3?'/ '+props.page3 :'' }</Link>  
                 / {props.page}</h3>
            </div>
    
      
      
      </div>
    </>
  )
}

export default BannerTop