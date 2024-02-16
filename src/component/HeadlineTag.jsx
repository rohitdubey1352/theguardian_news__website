import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const HeadlineTag = (props) => {
    return (
        <>
            <TagLine>
                <div className="Headline_tag">
                    <h1>
                        {props.title}
                    </h1>
                    <Link to="/">
                        <img src="\src\assets\Image\goTo.svg" alt="" />
                    </Link>
                </div>
            </TagLine>
        </>
    )
}

export default HeadlineTag

const TagLine = styled.main`

.Headline_tag{
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2.6rem;
}
.Headline_tag::after{
    content: '';
    position: absolute;
    width: 77.25rem;
    height: 0.0625rem;
    border-radius: 3.125rem;
    background: #D0D1DB;
    bottom: -2rem;
}
.Headline_tag h1{
    position: relative;
    color: #2B2D42;
    font-family: Playfair Display;
    font-size: 3rem;
    font-style: normal;
    font-weight: 900;
    line-height: 61.5%; /* 1.845rem */
    letter-spacing: 0.06rem;
}
.Headline_tag h1::before{
    content: '';
    position: absolute;
    width: 105%;
    height: 1rem;
    bottom: -.9rem;
    left: 0;
    background: #DA4933;
    z-index: -1;
}

@media screen and (max-width: 720px){
    .Headline_tag::after{
        width: 100%;
    }
    .Headline_tag{
        width: 100%;
        display: flex;
        justify-content: space-between;
        // background: #fff;
    }
    .Headline_tag h1{
        font-size: 2.6rem;
        font-weight: 700;
        margin-right: -2rem;
    }
   
    img{
        width: 3rem;
    }
}
`