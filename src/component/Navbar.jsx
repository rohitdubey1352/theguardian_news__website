import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


document.addEventListener("DOMContentLoaded", function () {
  var navbarItems = document.getElementById("navbar").getElementsByTagName("li");

  for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener("click", function () {
      for (var j = 0; j < navbarItems.length; j++) {
        navbarItems[j].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
});


const Navbar = () => {

  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <Navbars>
        <div className='top_line' />

        <ul id='navbar'>
          <li className={activeItem === 0 ? 'active' : ''} onClick={() => handleItemClick(0)}>
            <Link to="/">NEWS</Link>
          </li>
          <li className={activeItem === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>
            <Link to="/sports">SPORTS</Link>
          </li>
          <li className={activeItem === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>
            <Link to="/entertainment">ENTERTAINMENT</Link>
          </li>
          <li className={activeItem === 3 ? 'active' : ''} onClick={() => handleItemClick(3)}>
            <Link to="/health">HEALTH</Link>
          </li>
          <li className={activeItem === 4 ? 'active' : ''} onClick={() => handleItemClick(4)}>
            <Link to="/tech">TECH</Link>
          </li>
          <li className={activeItem === 5 ? 'active' : ''} onClick={() => handleItemClick(5)}>
            <Link to="/business">Business</Link>
          </li>
          <li className={activeItem === 6 ? 'active' : ''} onClick={() => handleItemClick(6)}>
            <Link to="/contact" className='contact'>CONTACT US</Link>
          </li>
          {/* <li className='contact'>
            <Link to="/contact"></Link>
          </li> */}

        </ul>

        <div className='bottom_line' />
      </Navbars>
    </>
  )
}

export default Navbar

const Navbars = styled.main`
  position: relative;
  margin: 2.13rem 0;

  ul{
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
    list-style-type: none;
    overflow: hidden;

    li a{
      width: 10rem;
      color: #2B2D42;
      text-align: center;
      font-family: Montserrat Subrayada;
      float: left;
      display: block;
      font-size: 0.875rem;
      font-weight: 400;
      letter-spacing: 0.09625rem;
    }
    .active{
      position: relative;
      color: #DA4933;
      padding-bottom: .3rem;
      border-bottom: 0.2rem solid #DA4933; 
    }
    .contact{
      font-weight: 900;
      font-size: 1.26rem;
    }
  }
  .top_line, .bottom_line{
    position: relative;
    width: 77.25rem;
    height: 0.125rem;
    border-radius: 3.125rem;
    background: #D0D1DB;
  }
  .bottom_line{
    margin-top: -.8rem;
  }
  .bottom_line::after{
    content: '';
    position: absolute;
    width: 77.25rem;
    height: 0.12rem;
    border-radius: 3.125rem;
    background: #D0D1DB;
    top: .2rem;
  }

  @media screen and (max-width: 720px) {
      display: none;
  }

`