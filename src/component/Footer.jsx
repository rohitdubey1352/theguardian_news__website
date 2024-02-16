import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <div className="lines">
          <div className='Line'></div>
          <div className='Line'></div>
        </div>
        <div className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="list col-12 col-lg-4 col-md-4">
                <ul>
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/sports">SPORTS</Link>
                  </li>
                  <li>
                    <Link to="/health">HEALTH</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="/tech">TECH</Link>
                  </li>
                  <li>
                    <Link to="/entertainment">ENTERTAINMENT</Link>
                  </li>
                  <li>
                    <Link to="/business">Business</Link>
                  </li>
                </ul>
              </div>

              <div className="middleWare col-12 col-lg-4 col-md-4">
                <div className="first">
                  <h1>The <br />Guardian.</h1>
                </div>
                <div className="second">
                  <div className="formDiv">
                    <input className='details' name='emailid' type="email" placeholder='E-mail Address' />
                    <Link to="/">
                      <span>SUBSCRIBE</span>
                      <img className='blackBox' src="/src/assets/Image/blackbox.png" alt="btn" />
                    </Link>
                  </div>
                  <p className='copy'>copywrite © 2023 All Rights  Reserved by the guardian</p>
                </div>
              </div>

              <div className="col-12 col-lg-4 col-md-4">
                <div className="followus">
                  <h3>Follow Us!</h3>
                  <div className="socialIcons">
                    <Link to="/"><img src="/src/assets/Image/facebook.png" alt="fb" /></Link>
                    <Link to="/"><img src="/src/assets/Image/twitter.png" alt="fb" /></Link>
                    <Link to="/"><img src="/src/assets/Image/instagram.png" alt="fb" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </FooterDiv>
    </>
  )
}

export default Footer

const FooterDiv = styled.main`
position: relative;
margin-top: 18rem;

.followus{
  margin-left: 14rem;
  .socialIcons{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.4rem;
    img{
      margin: 0 1rem;
    }
  }
  h3{
    position: relative;
    width: 100%;
    color: #000;
    text-align: center;
    font-family: Playfair Display;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.1rem;
  }
  h3::after{
    content: '';
    position: absolute;
    width: 8.625rem;
    bottom: 0;
    left: 1rem;
    height: 0.625rem;
    background: #DA4933;
    z-index: -1;
  }

}

.second{
  position: relative;
  width: 100%;
  heigth: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  .formDiv{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

.details{
  background: transparent;
    width: 13.75rem;
    border: none;
    outline: none;
    border-bottom: 0.0625rem solid #232323;
    padding: .6rem 0 .6rem 1.4rem;
    margin-right: 2rem;
}
.details::placeholder{
    color: #2B2D42;
    font-family: Montserrat;
    font-size: 0.96rem;
    font-weight: 400;
    line-height: 103.5%;
    letter-spacing: 0.105rem;
}
  .blackBox{
    width: auto;
    position: relative;
  }
  span{
    color: #FFF;
    z-index: 1;
    bottom: 1rem;
    left: 16.5rem;
    position: absolute;
    text-align: center;
    font-family: DM Serif Display;
    font-size: 1.125rem;
    font-style: italic;
    font-weight: 400;
    line-height: 103.5%;
    letter-spacing: 0.1575rem;
  }
  
}

.footer{
  position: relative;
  width: 77.25rem;
  height: 20.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .middleWare{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: .6rem;
    h1{
      color: #2B2D42;
      font-family: Playfair Display;
      font-size: 3rem;
      font-weight: 900;
      line-height: 90.5%;
      letter-spacing: 0.06rem;
    }
    
  }
  .list{
    display: flex;
    justify-content: start;
    gap: 6rem;
  }
  li{
    padding-top: 1rem;
  }
  li a{
    color: #2B2D42;
    font-family: Montserrat Subrayada;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 61.5%;
    letter-spacing: 0.09625rem;
    margin-left: -2.8rem;

  }
}
.lines{
  .Line{
    width: 77.25rem;
    height: 0.125rem;
    border-radius: 3.125rem;
    background: #2B2D42;
    margin: .12rem 0;
  }
}

@media screen and (max-width: 720px){
  .footer{
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
  }
  .lines{
    .Line{
      width: 100%;
    }
  }
  .followus{
    display: none;
  }
  .formDiv{
    flex-direction: column; 
    text-align: center;
    gap: 1rem;
    a{
      span{
        margin-left: -77%;
      }
    }
    .second{
      p{
        margin-bottom: 5rem;
      }
    }

  }

`