import React from 'react'
import styled from 'styled-components'
import MiniShare from './MiniShare'
import { Link } from 'react-router-dom'

const AllNewsCard = (props) => {
    return (
    <>
    <Card>
        <div class="card">
            <div class="card-body">
                <img className='cardImage' src={props.img} alt='cimage' />
                <Link to={props.link}>
                    <h2 class="card-title">{props.name}</h2> 
                </Link>
                <p>{props.description.slice(0, 219)}{`...`}</p>
                <div className="shareIcons my-3">
                    <MiniShare />
                </div>
            </div>
        </div>

    </Card>
    
    </>
  )
}

export default AllNewsCard

const Card = styled.main`
.card{
    width: 24.55rem;
    height: 100%;
    padding: 0;
    background: transparent;
    border: none;
    .card-body{
        padding: 0;
        .cardImage{
            width: 24.25rem;
            height: 21.75rem;
            border-radius: .6rem;
        }
        .card-title{
            color: #2B2D42;
            font-family: DM Serif Display;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 400;
            line-height: 130.5%; /* 1.9575rem */
            letter-spacing: -0.03rem;
            padding-top: 1rem;
            span{
                margin-left: 10rem;
            }
        }
        p{
            color: #515151;
            font-family: Montserrat;
            font-size: .89rem;
            font-weight: 300;
            line-height: 138.5%; /* 1.085rem */
            letter-spacing: -0.02rem;
        }
    }
    
}


`