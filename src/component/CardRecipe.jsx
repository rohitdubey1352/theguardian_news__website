import React from 'react'
import styled from 'styled-components'

const CardRecipe = (props) => {
  return (
    <>
    <Recipe>
        <div className="card">
        <div className="card_body">
            <img src={props.image} alt="cardImg" />
            <div className="content_title my-3">
                <h5>{props.title}</h5>
                <p>{props.para}</p>
            </div>
            <div className="nutrients">
                <ul>
                    <li><strong>Energy:</strong>{props.e}</li>
                    <li><strong>Protein:</strong>{props.p}</li>
                    <li><strong>Fat:</strong>{props.f}</li>
                    <li><strong>Carbohydrates:</strong>{props.c}</li>
                    <li><strong>Fibre:</strong>{props.fi}</li>
                </ul>
            </div>
        </div>
      </div>
    </Recipe>
    
    </>
  )
}

export default CardRecipe

const Recipe = styled.main`
.card{
    width: auto;
    height: auto;
    border-radius: 1rem;
    position: relative;
    .card_body{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .2rem;
        flex-direction: column;
        .content_title{
            display: grid;
            place-items: center;
            grid-template-columns: repeat(2,1fr);
            gap: 2rem;
            p{
                color: #2B2D42;
                font-family: DM Serif Display;
                font-size: 1.1rem;
                letter-spacing: .02rem;
            }
        }
        h5{
            color: #2B2D42;
            font-family: Playfair Display;
            font-weight: 600;
            font-size: 1.6rem;
        }
        img{
            width: 100%;
            border-radius: 1rem;
            height: auto;
        }
    }
}
.nutrients{
    ul{
        display: flex;
        margin-left: -1.5rem;
        font-family: 'Montserrat';
        li{
            font-size: .82rem;
            display: flex;
            align-items: center;
            margin-right: 1.2rem;
            flex-direction: column;
        }
    }
}


`