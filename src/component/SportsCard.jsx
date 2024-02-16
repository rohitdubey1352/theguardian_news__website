import React from 'react'
import styled from 'styled-components'
import MiniShare from './MiniShare'
import { Link } from 'react-router-dom'

const SportsCard = (props) => {
    return (
        <>
            <Card>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="card">
                                <img src="/src/assets/Image/go.svg" className='img-fluid' alt="goto" />
                                <button className='btn'>
                                    SPORTS
                                </button>
                                <img className='bgImage' src={props.image} alt="bgImage" />
                            </div>
                        </div>
                        <div className="leftCorner col-12 col-lg-6 col-md-6">
                            <button className="btn">
                                {props.tag}
                            </button>
                            <Link to={props.link}>
                                <h2>{props.title.slice(0, 80)}</h2>
                            </Link>
                            <p>{props.para}...</p>
                            <MiniShare />
                        </div>
                    </div>
                </div>

            </Card>
        </>
    )
}

export default SportsCard

const Card = styled.main`
position: relative;
.row{
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;    
}
.leftCorner{
    position: relative;
    padding-left: 4.25rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    justify-content: center;
    h2{
        color: #2B2D42;
        font-family: Playfair Display;
        font-size: 2rem;
        font-weight: 700;
        line-height: 136.5%; /* 2.73rem */
        letter-spacing: 0.04rem;
    }
    p{
        color: #000;
        font-family: Montserrat;
        font-size: 1.3rem;
        font-weight: 300;
        line-height: 136.5%; /* 2.0475rem */
    }
    .btn{
        border-radius: 3.125rem;
        border: 1px solid #2B2D42;
        color: #2B2D42;
        text-align: center;
        font-family: Montserrat;
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 61.5%; /* 0.46125rem */
        letter-spacing: 0.045rem;
    }
}

.card{
    position: relative;
    width: 40.3125rem;
    height: 22.1875rem;
    border: none;
    outline: none;
    
    img{
        position: absolute;
        width: 2.5rem;
        height: 2.5rem;
        bottom: .8rem;
        right: 1rem;
    }
    .btn{
        position: absolute;
        background: #9747FF;
        color: #fff;
        bottom: 1.13rem;
        right: 4.5rem;
    }
}

`