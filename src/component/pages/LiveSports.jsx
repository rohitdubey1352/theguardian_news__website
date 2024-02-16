import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import HeadlineTag from '../HeadlineTag'
import ShareIcons from '../ShareIcons'
import LiveCarsl from '../LiveCarsl'
import { Link } from 'react-router-dom'

const LiveSports = () => {
    const API = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=925d1ff1422242c28c0c441655c01437";
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

            <LiveSport>
                <HeadlineTag title="Live Score's" />
                <div className="container">
                    <div className="box">
                        <div className="top">
                            <div className="topContent">
                                <h1>
                                    5 T2OI Series, 2023
                                </h1>
                                <img src="/src/assets/Image/go.svg" alt="" />
                            </div>
                            <div className="iconsGroup">
                                <div className="icons">
                                    <img src="\src\assets\Image\like.png" alt="like" />
                                    <p>30k+</p>
                                </div>
                                <div className="icons">
                                    <img src="\src\assets\Image\share.png" alt="share" />
                                    <p>10k+</p>
                                </div>
                                <div className="icons">
                                    <img src="\src\assets\Image\chat.png" alt="chat" />
                                    <p>1k+</p>
                                </div>
                            </div>
                        </div>

                        <div className="innerContainer my-2">
                            <div className="contentImage">
                                <iframe width="450" height="300" src="https://www.youtube.com/embed/f7R895GBLPg?si=iNHJOmOJyOt0_LUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className="contentText">
                                <ol>
                                    <li>
                                        <Link to={data?.articles?.[0]?.url ?? "Loading"}>
                                            {data?.articles?.[0]?.title ?? "Loading..."}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={data?.articles?.[1]?.url ?? "Loading"}>
                                            {data?.articles?.[1]?.title ?? "Loading..."}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={data?.articles?.[2]?.url ?? "Loading"}>
                                            {data?.articles?.[2]?.title ?? "Loading..."}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={data?.articles?.[3]?.url ?? "Loading"}>
                                            {data?.articles?.[3]?.title ?? "Loading..."}
                                        </Link>
                                    </li>
                                </ol>
                            </div>
                            <div className="contentButtons">
                                <button className='btn'>NEWS</button>
                                <button className='btn'>PHOTOS</button>
                                <button className='btn'>SCHEDULE</button>
                                <button className='btn'>STANDING</button>
                            </div>

                        </div>

                        <div className="carousel">
                            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    {/* <!-- First Section --> */}
                                    <LiveCarsl />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </LiveSport>

        </>
    )
}

export default LiveSports

const LiveSport = styled.main`

.box{
    width: 77.25rem;
    min-width: 100%;
    height: auto;
    background: linear-gradient(101deg, #2B2D42 -4.54%, #404040 100.85%);
    margin: 6rem 0;
    padding: 1.5rem;
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .topContent{
            display: flex;
            gap: 1rem;
            align-items: center;    
        }
        h1{
            color: #FFF;
            font-family: Playfair Display;
            font-size: 2.25rem;
            font-weight: 700;
            letter-spacing: 0.045rem;
        }
    }
}
.iconsGroup{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .icons{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .6rem;
        cursor: pointer;
        p{
            color: #FFF;
            font-family: Montserrat;
            font-size: 0.625rem
            font-weight: 600;
        }
    }
}

.innerContainer{
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
}
.contentText li, a{
    list-style: bullet;
    color: #FFF;
    width: 28rem;
    font-family: DM Serif Display;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 136.5%; /* 1.53563rem */
    letter-spacing: 0.045rem;
    margin: 1rem 0;
}
.contentButtons{
    width: 35%;
}
.contentButtons .btn{
    width: 7.5rem;
    height: 2.6875rem;
    border-radius: 3.125rem;
    background: #FFF;
    margin: 1rem 0 1rem 1rem;
    color: #2B2D42;
    text-align: center;
    font-family: Montserrat;
    font-size: 0.625rem;
}
.card{
    position: relative;
    width: 23.4rem;
    height: 10rem;
    border-radius: 0.62rem;
    background: #222;
    margin: 1rem 0;
}

// Media query....

@media screen and (max-width: 720px){

    .box{
        width: 100%;
        height: auto;
        background: linear-gradient(101deg, #2B2D42 -4.54%, #404040 100.85%);
        margin: 2rem 0;
        padding: 1.5rem;
        .top{
            flex-direction: column;
            h1{
                font-size: 1.75rem;
                font-weight: 700;
            }
        }
    }

    .contentButtons{
        width: 100%;
        display: grid;
        margin-top: -3.2rem;
        margin-left: -2rem;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
    }

    .innerContainer{
        grid-template-columns: repeat(1, 1fr);
        .contentText li, a{
            width: 100%;
            font-size: 1rem;
            margin-left: -1rem;

        }
        .contentImage{
            display: none;
        }
    }
    .carousel{
        display: none;
    }

    .Headline_tag h1{
        font-size: 2.8rem;
        font-weight: 700;
        margin-right: 0;
    }
    .Headline_tag h1::before{
      height: .8rem;
      bottom: -.5rem;
    }

}
`