import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CarouselCard = (props) => {
  return (
    <>
    <Card>
        <div class="card">
            <div class="card-body">
                <img src={props.img} alt='cimage' />
                    <button className='btn politics'>
                        {props.tag}
                    </button>
                <h2 class="card-title">
                    <Link to={props.link}>
                        {props.title}
                    </Link>
                </h2>          
            </div>
        </div>
    </Card>
    </>
  )
}

export default CarouselCard
const Card = styled.main`
.card{
    width: 24rem;
    height: 34.75rem;
    background: transparent;
    border: none;
    outline: none;
    .card-body{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        text-align: center;
        
        .card-title, a{
            color: #000;
            text-align: center;
            margin-top: 1rem;
            font-family: Playfair Display;
            font-size: 1.35rem;
            font-style: normal;
            font-weight: 600;
            line-height: 136.5%;
            letter-spacing: 0.065rem;
        }
        img{
            position: relative;
            width: 109%;
            height: 25rem;
            margin: -1rem 0 1rem 0;         
            border-radius: 0.3125rem;
        }
        .btn{
            width: auto;
            border: 1px solid #000;
            background: #FFF;
            font-family: Montserrat Subrayada;
            box-shadow: 2px 3px 0px 0px rgba(0, 0, 0, 0.70);
        }
        .sports{
          background: #9747FF;
          color: #fff;
        }
        .tech{
          background: #F02052;
          color: #fff;
        }
    }
}


`