
import React, { useState } from 'react'

import './sidebar.css';
import { Sidebardata } from './Sidebardata';

function Sidebar() {

    const[isopen, setIsopen]= useState(true)

    const togglesidebar = ()=>{
        setIsopen(!isopen);
    }
  return (
    <>
    <div className= {`sidebar ${isopen ? 'open' : 'closed'}`}>

        <div className='sidebar_header'>

            <button className='toggle-btn' onClick={togglesidebar}>

                <div className={`arrow ${isopen ? 'left' : 'right'}`}> </div>

                
                
            </button>

            <div className='logo'>
                
                <h2>{isopen ? 'Logo' : ""}</h2>
            </div>

        </div> 

        <nav className='nav_menu'>

            <ul>
                {Sidebardata?.map((item, index)=> (

                    <li key={index}>
                        <a href={item.path}>
                            {item.icon}
                            {isopen? item.title : ""}

                        </a>

                    </li>

                ))}
                    
                
            </ul>

        </nav>
        
    </div>
    </>
  )
}

export default Sidebar
