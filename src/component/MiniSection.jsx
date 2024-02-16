import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const MiniSection = (props) => {

    const API = 'https://newsapi.org/v2/top-headlines/sources?apiKey=925d1ff1422242c28c0c441655c01437';
    const [data, setData] = useState(null);

    const fetchData = async (url) => {
        try {
            const res = await fetch(url);
            const result = await res.json();
            setData(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData(API);
    }, []);

    return (
        <>

            <Mini>

                <div className="popularMini mb-5">
                    <div className='data'>
                        <img src={props.image}
                            alt="mininews" />
                        <div className="content">
                            <button className='btn mb-3'>
                                {props.tag}
                            </button>
                            <h2 className='mb-4'>
                                <Link to={props.link}>
                                    {props.title.slice(0, 100)}{`...`}
                                </Link>
                            </h2>
                            <div className="credit">
                                <p>
                                    {`by `}{data?.sources?.[5].name ?? "Loading..."}
                                </p>
                                <img src="\src\assets\Image\share.png" alt="share" />
                            </div>
                        </div>
                    </div>
                </div>

            </Mini>

        </>
    )
}

export default MiniSection
const Mini = styled.main`

.popularMini .data{
    width: 20.375rem;
    height: 9.8125rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.2rem;
    .content{
        position: relative;
        h2, a{
            color: #2B2D42;
            font-family: DM Serif Display;
            font-size: 1rem;
            font-weight: 400;
            line-height: 101.5%; /* 1.015rem */
        }
        .btn{
            width: 10rem;
            height: auto;
            border-radius: 5rem;
            border: 0.4px solid #232323;
            background: #F0FF47;
            color: #2B2D42;
            word-break: break-all;
            text-align: center;
            font-family: Montserrat Subrayada;
            font-size: 0.5rem;
            font-weight: 400;
            line-height: 120%;
            letter-spacing: 0.03438rem;
        }
        .credit{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .credit p{
            color: #797B8F;
            font-family: Montserrat;
            font-size: 0.455rem
            font-weight: 600;
            line-height: 61.5%;
            letter-spacing: 0.0225rem;
        }
        .credit img{
            width: 20px;
            height: 20px;
            margin-right: .6rem;
        }
    }
}

@media screen and (max-width: 720px){
    .popularMini .data{
        .content{
            .btn{
                width: 100%;
                height: auto;
                font-size: .4rem;
                line-height: 120%;
            }
        }
    }
}
`