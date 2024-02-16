import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Subscribe = () => {
    return (
        <>
            <SUBSCRIBEs>
                <div className="subscribe">
                    <div className="firstText">
                        <h1>SUBSCRIBE</h1>
                    </div>
                    <div className="form">
                        <div className="container-fluid">
                            <div className="row box">
                                <div className="col-12 col-lg-6 col-md-6">
                                    <div className="form_content">
                                        <div className="Headline_tag">
                                            <h2>
                                                SUBSCRIBE
                                            </h2>
                                        </div>
                                        <form>

                                            <div className="form_head">
                                                <h2>
                                                    Stay updated on global affairs, technology, health, culture, and more, curated to keep you informed and engaged.
                                                </h2>
                                            </div>
                                            <input className='details' name='name' type="text" placeholder='Full Name' />
                                            <input className='details' name='emailid' type="email" placeholder='E-mail Address' />
                                            <div className="terms">
                                                <label for="checkboxId" >
                                                    <input type="checkbox" id="checkboxId" />
                                                    I consent to receive occasional emails with news about our global affairs, technology and culture, in accordance with <strong>The Guardian </strong> Privacy Policy.
                                                </label>
                                            </div>
                                            <Link to="/">
                                                <span>SUBSCRIBE</span>
                                                <img className='blackBox' src="/src/assets/Image/blackbox.png" alt="btn" />
                                            </Link>
                                        </form>
                                    </div>

                                    <img className='rightButton' src="/src/assets/Image/rightButton.svg" alt="" />
                                </div>
                                <div className="col-12 col-lg-6 col-md-6">
                                    <img className='subimage' src="/src/assets/Image/subImage.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="secondText">
                        <h1>SUBSCRIBE</h1>
                    </div>
                </div>
            </SUBSCRIBEs>
        </>
    )
}

export default Subscribe

const SUBSCRIBEs = styled.main`
position: relative;
margin-top: 10rem;
.subimage{
    position: relative;
}
form{
    .blackBox{
        width: auto;
        position: relative;
    }
    span{
        color: #FFF;
        z-index: 1;
        bottom: 2rem;
        left: 3.4rem;
        position: absolute;
        text-align: center;
        font-family: DM Serif Display;
        font-size: 1.125rem;
        font-style: italic;
        font-weight: 400;
        line-height: 103.5%; /* 1.16438rem */
        letter-spacing: 0.1575rem;
    }
    .terms{
        #checkboxId{
            margin-right: .6rem;
        }
        label{
            margin-top: 3rem;
            margin-bottom: 1rem;
            color: #000;
            font-family: Playfair Display;
            font-size: 0.92rem;
            font-style: normal;
            font-weight: 400;
            line-height: 115.5%;
            letter-spacing: 0.09rem;
        }
    }
    .details{
        width: 13.75rem;
        border: none;
        outline: none;
        border-bottom: 0.0625rem solid #232323;
        padding: .6rem 0 .6rem 1.4rem;
        margin-top: 1rem;
        margin-right: 4rem;
    }
    .details::placeholder{
        color: #2B2D42;
        font-family: Montserrat;
        font-size: 0.96rem;
        font-weight: 400;
        line-height: 103.5%;
        letter-spacing: 0.105rem;
    }
    .form_head{
        h2{
            color: #000;
            font-family: DM Serif Display;
            font-size: 1.85rem;
            font-weight: 500;
            line-height: 103.5%;
            margin-top: 1rem;
        }
    }
}
.Headline_tag h2{
    position: relative;
    color: #000;
    font-family: Playfair Display;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.1rem;
}
.Headline_tag h2::before{
    content: '';
    position: absolute;
    width: 8rem;
    height: .8rem;
    bottom: -.1rem;
    left: 0;
    background: #DA4933;
    opacity: 0.5;
    
}
.subscribe{
    position: relative;
    height: 100%;
    .secondText h1{
        bottom: -3rem;
    }
    h1{
        position: absolute;
        color: #888;
        font-family: DM Serif Display;
        font-size: 11.25rem;
        font-style: italic;
        font-weight: 400;
        line-height: 61.5%; 
        letter-spacing: 0.45rem;
        left: 6.5rem;
        z-index: -1;
    }   
}
.form{
    position: relative;
    padding-top: 3.3rem;
    .box{
        position: relative;
        width: 77.3125rem;
        height: 25rem;
        border: 2px solid #BF019275;
        background: #FFF;
        padding: .8rem;
        .rightButton{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
        }
    }
    
}

// ..................................................................
@media screen and (max-width: 720px){
    .form{
        .box{
            width: 100%;
            height: 100%!important;
            .rightButton{
                display: none; 
            }
        }
    }
    .subimage{
        display: none;
    }
    .subscribe{
        h1{
            margin: auto;
            font-size: 2.9rem;
            left: 0;
            top: 2.4rem;
        }   
    }
}

`