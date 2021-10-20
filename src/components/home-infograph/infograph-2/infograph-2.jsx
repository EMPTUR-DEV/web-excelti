import React from 'react'
import './infograph-2.css'
import {RiTranslate} from 'react-icons/ri'
import {GrArticle}  from 'react-icons/gr'
import {FiEdit3} from 'react-icons/fi'
import {GiVideoConference} from 'react-icons/gi'
import {BsHeadset} from 'react-icons/bs'
import {IoIosPeople} from 'react-icons/io'


const InfoGraph2 = ({items}) => {
  console.log(items)
    return (
<div class="graphic-container">
  
  <div class="center-circles-container">
    

    <div class="single">
      <div class="circle one">
        <div class="dot"></div>
        <div class="icon">
        <i class="far fa-building"><RiTranslate/></i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>{items[0].name}</h2>
          <div class="content">
            <h3>option infographic</h3>
            <p>Texto de la sección</p>
          </div>
        </div>
      </div>
    </div>

    <div class="double">
      <div class="circle two">
      
        <div class="icon">
          <i class="far fa-building"><FiEdit3/></i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>{items[1].name}</h2>
          <div class="content">
            <h3>option infographic</h3>
            <p>Texto de la sección</p>
          </div>
        </div>
        </div>
      <div class="circle three">
        <div class="icon">
          <i class="far fa-building"><GiVideoConference/></i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>{items[2].name}</h2>
          <div class="content">
            <h3>option infographic</h3>
            <p>Texto de la sección</p>
          </div>
        </div>
        </div>
    </div>

    <div class="double">
      <div class="circle four">
        <div class="dot"></div>
        <div class="icon">
          <i class="far fa-building"><BsHeadset/></i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>{items[3].name}</h2>
          <div class="content">
            <h3>option infographic</h3>
            <p>Texto de la sección</p>
          </div>
        </div>
        </div>
      <div class="circle five">
        <div class="icon">
        <i class="far fa-building"><IoIosPeople/></i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>{items[4].name}</h2>
          <div class="content">
            <h3>option infographic</h3>
            <p>Texto de la sección</p>
          </div>
        </div>
        </div>
    </div>

    <div class="single">
      <div class="circle six">
        <div class="dot"></div>
        <div class="icon">
        <i class="far fa-building" ><GrArticle/></i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>{items[5].name}</h2>
          <div class="content">
            <h3>option infographic</h3>
            <p>Texto de la sección</p>
          </div>
        </div>
        </div>
    </div>
    
  </div>
  
</div>
    )
}

export default InfoGraph2
