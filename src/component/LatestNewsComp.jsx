import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LatestNewsComp = (props) => {
  return (
    <>

    <Latest>
        <div className="box mb-4">
            <img src={props.img} alt="comp" className='boxImage' />
            <div className="content">
                <Link to={props.link}>
                    <h2>{props.title.slice(0, 80)}{`...`}</h2>
                </Link>
                <div className="author">
                    <p className='text'>by- {props.author}</p>
                        <div className="icons">
                            <img src="\src\assets\Image\share.png" alt="share" />
                        </div>
                </div>
            </div>
        </div>
    </Latest>

    
    </>
  )
}

export default LatestNewsComp

const Latest = styled.main`
.box{
    width: 22rem;
    height: auto;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2,1fr);
    gap: .6rem;
    .content{
        h2{
            color: #2B2D42;
            font-family: DM Serif Display;
            font-size: 1.25rem;
            font-weight: 400;
            line-height: 105.5%; /* 1.31875rem */
        }
    }
    .author{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: .2rem;
        // margin-top: 2rem;
        margin-right: 1rem;
        .text{
            color: #797B8F;
            font-family: Montserrat;
            font-size: 0.575rem;
            font-weight: 600;
            line-height: 61.5%; /* 0.23063rem */
            letter-spacing: 0.0225rem;
        }
        img{
            width: 30px;
            height: 30px;
        }
    }
}


`