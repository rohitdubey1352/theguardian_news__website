import React from 'react'
import styled from 'styled-components'
import MiniShare from './MiniShare'
import { Link } from 'react-router-dom'

const Card = (props) => {

  return (
    <>
    <MainCard>
        <div className="card">
            <div className="videoSection">
                <img src={props.img} className='img-fluid videoImage' alt="img1" />
                <Link to={props.link}>
                    <img className='play' src="/src/assets/Image/play.png" alt="" />
                </Link>
            </div>
            <div className="author">
                <MiniShare />
            </div>
            <div className="content">
                <h3>
                    <Link to={props.link}>
                        {props.title}
                    </Link>
                </h3>
            </div>
        </div>
        
        
    </MainCard>    
    </>
  )
}

export default Card

const MainCard = styled.main`
position: relative;
.card{
    position: relative;
    width: 25.625rem;
    height: 27.6875rem;
    background: transparent;
    border: none;
    .content h3, a{
        color: #2B2D42;
        font-family: DM Serif Display;
        font-size: 1.5rem;
        font-weight: 400;
        margin-top: 1rem;
        line-height: 130.5%; /* 1.9575rem */
        letter-spacing: -0.03rem;
    }
    .videoSection{
        position: relative;
        .videoImage{
            width: 25.625rem;
            height: 18.75rem;
            border-radius: 10px;  
        }
        img{
            width: auto;
            height: 18.75rem;
        }
        .play{
            position: absolute;
            width: 5rem;
            height: 5rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .videoSection::before{
        content: '';
        position: absolute;
        width: 5rem;
        height: 5rem;
        border-radius: 3.125rem;
        border: 2px solid #FFF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
}



`