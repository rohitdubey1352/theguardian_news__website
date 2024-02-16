import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Carousel = () => {
    const API = "https://newsapi.org/v2/top-headlines?country=in&apiKey=925d1ff1422242c28c0c441655c01437";
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
            <Carousels>

                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            {data ? (
                                <img src={data.articles[1].urlToImage} class="d-block w-100"></img>
                            ) : (<p>Loading...</p>
                            )}
                            <div class="carousel-caption d-md-block">
                                <div className="author">
                                    {data ? (
                                        <p>{data.articles[1].author}</p>
                                    ) : (
                                        <p>Loading...</p>
                                    )}
                                    <button className='btn'>
                                        {data ? (
                                            <p>{data.articles[1].source.name}</p>
                                        ) : (
                                            <p>Loading...</p>
                                        )}
                                    </button>
                                </div>
                                <div className="carousel_title">
                                    {data ? (
                                        <h1>{data.articles[1].title}</h1>
                                    ) : (
                                        <h1>Loading...</h1>
                                    )}
                                </div>
                                <div className="para">
                                    {data ? (
                                        <p>{data.articles[1].description}</p>
                                    ) : (
                                        <p>Loading...</p>
                                    )}
                                </div>
                                <Link to={data?.articles?.[1]?.url ?? "Loading..."}>
                                    <div className="gobtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <rect width="40" height="40" rx="20" fill="white" />
                                            <path d="M15.2189 25.2193C14.9455 25.4926 14.9455 25.9358 15.2189 26.2092C15.4923 26.4826 15.9355 26.4826 16.2088 26.2092L15.2189 25.2193ZM24.9853 17.1428C24.9853 16.7562 24.6719 16.4428 24.2853 16.4428L17.9853 16.4428C17.5987 16.4428 17.2853 16.7562 17.2853 17.1428C17.2853 17.5294 17.5987 17.8428 17.9853 17.8428L23.5853 17.8428L23.5853 23.4428C23.5853 23.8294 23.8987 24.1428 24.2853 24.1428C24.6719 24.1428 24.9853 23.8294 24.9853 23.4428L24.9853 17.1428ZM16.2088 26.2092L24.7803 17.6378L23.7903 16.6478L15.2189 25.2193L16.2088 26.2092Z" fill="#2B2D42" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div class="carousel-item">
                            {data ? (
                                <img src={data.articles[13].urlToImage} class="d-block w-100"></img>
                            ) : (<p>Loading...</p>
                            )}
                            <div class="carousel-caption d-md-block">
                                <div className="author">
                                    {data ? (
                                        <p>{data.articles[13].author}</p>
                                    ) : (
                                        <p>Loading...</p>
                                    )}

                                    <button className='btn'>
                                        {data ? (
                                            <p>{data.articles[13].source.name}</p>
                                        ) : (
                                            <p>Loading...</p>
                                        )}
                                    </button>

                                </div>
                                <div className="carousel_title">
                                    {data ? (
                                        <h1>{data.articles[13].title}</h1>
                                    ) : (
                                        <h1>Loading...</h1>
                                    )}
                                </div>
                                <div className="para">
                                    {data ? (
                                        <p>{data.articles[13].content}</p>
                                    ) : (
                                        <p>Loading...</p>
                                    )}
                                </div>
                                <Link to={data?.articles?.[13]?.url ?? "Loading..."}>
                                    <div className="gobtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <rect width="40" height="40" rx="20" fill="white" />
                                            <path d="M15.2189 25.2193C14.9455 25.4926 14.9455 25.9358 15.2189 26.2092C15.4923 26.4826 15.9355 26.4826 16.2088 26.2092L15.2189 25.2193ZM24.9853 17.1428C24.9853 16.7562 24.6719 16.4428 24.2853 16.4428L17.9853 16.4428C17.5987 16.4428 17.2853 16.7562 17.2853 17.1428C17.2853 17.5294 17.5987 17.8428 17.9853 17.8428L23.5853 17.8428L23.5853 23.4428C23.5853 23.8294 23.8987 24.1428 24.2853 24.1428C24.6719 24.1428 24.9853 23.8294 24.9853 23.4428L24.9853 17.1428ZM16.2088 26.2092L24.7803 17.6378L23.7903 16.6478L15.2189 25.2193L16.2088 26.2092Z" fill="#2B2D42" />
                                        </svg>
                                    </div>
                                </Link>

                            </div>
                        </div>

                        <div class="carousel-item">
                            {data ? (
                                <img src={data.articles[4].urlToImage} class="d-block w-100"></img>
                            ) : (<p>Loading...</p>
                            )}
                            <div class="carousel-caption d-md-block">
                                <div className="author">
                                    {data ? (
                                        <p>{data.articles[4].author}</p>
                                    ) : (
                                        <p>Loading...</p>
                                    )}
                                    <button className='btn'>
                                        {data ? (
                                            <p>{data.articles[4].source.name}</p>
                                        ) : (
                                            <p>Loading...</p>
                                        )}
                                    </button>
                                </div>
                                <div className="carousel_title">
                                    {data ? (
                                        <h1>{data.articles[4].title}</h1>
                                    ) : (
                                        <h1>Loading...</h1>
                                    )}
                                </div>
                                <div className="para">
                                    {data ? (
                                        <p>{data.articles[4].content}{`...`}</p>
                                    ) : (
                                        <p>Loading...</p>
                                    )}
                                </div>
                                <Link to={data?.articles?.[4]?.url ?? "Loading..."}>
                                    <div className="gobtn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <rect width="40" height="40" rx="20" fill="white" />
                                            <path d="M15.2189 25.2193C14.9455 25.4926 14.9455 25.9358 15.2189 26.2092C15.4923 26.4826 15.9355 26.4826 16.2088 26.2092L15.2189 25.2193ZM24.9853 17.1428C24.9853 16.7562 24.6719 16.4428 24.2853 16.4428L17.9853 16.4428C17.5987 16.4428 17.2853 16.7562 17.2853 17.1428C17.2853 17.5294 17.5987 17.8428 17.9853 17.8428L23.5853 17.8428L23.5853 23.4428C23.5853 23.8294 23.8987 24.1428 24.2853 24.1428C24.6719 24.1428 24.9853 23.8294 24.9853 23.4428L24.9853 17.1428ZM16.2088 26.2092L24.7803 17.6378L23.7903 16.6478L15.2189 25.2193L16.2088 26.2092Z" fill="#2B2D42" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
                                <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM29 7L1 7V9L29 9V7Z" fill="#797B8F" />
                            </svg>
                        </span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="16" viewBox="0 0 52 16" fill="none">
                                <path d="M51.7071 8.70711C52.0976 8.31658 52.0976 7.68342 51.7071 7.29289L45.3431 0.928932C44.9526 0.538408 44.3195 0.538408 43.9289 0.928932C43.5384 1.31946 43.5384 1.95262 43.9289 2.34315L49.5858 8L43.9289 13.6569C43.5384 14.0474 43.5384 14.6805 43.9289 15.0711C44.3195 15.4616 44.9526 15.4616 45.3431 15.0711L51.7071 8.70711ZM0 9H51V7H0V9Z" fill="#2B2D42" />
                            </svg>
                        </span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </Carousels>

        </>
    )
}

export default Carousel;

const Carousels = styled.main`
    position: relative;

.carousel-inner{
    position: relative;    
    width: 77.25rem;
    height: 100%;
    min-height: 100%;
    img{
        border-radius: 0.375rem;
        height: 30rem;
    }
}
.carousel-caption{
    position: relative;
    width: 50rem;
    height: auto;
    margin-left: 2rem;
    margin-top: -10%;
    border-radius: 0.25rem;
    padding: 1rem 2rem;
    background: #EFEBDC;
    box-shadow: 0px 2px 12px 0px rgba(206, 206, 206, 0.25);
    .para{
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-height: 4.4em;
    }
    .gobtn{
        position: relative;
        margin-left: 98%;
        margin-top: 1rem;
    }
    .author{
        display: flex;
        justify-content: space-between
        align-items: center;
        p{
            color: #797B8F;
            font-family: Montserrat;
            font-size: 0.625rem;
            font-weight: 500;
            line-height: 61.5%;
            letter-spacing: 0.05rem;
        }
        .btn{
            width: auto;
            color: #fff;
            border: 1px solid #000;
            background: #2DC0FF;
            box-shadow: 2px 3px 0px 0px rgba(0, 0, 0, 0.70);
            p{
                color: #fff;
            }
        }
    }
    .carousel_title h1{
        margin-top: .6rem;
        margin-bottom: 1.2rem;
        text-align: left;
        color: #2B2D42;
        font-family: Playfair Display;
        font-size: 2.25rem;
        font-weight: 900;
        line-height: 125.5%;
        letter-spacing: 0.045rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-height: 2.5em;
    }

}
.carousel-control-next, .carousel-control-prev {
    top: 100%;
    justify-content: flex-end;
    width: 96%;
    padding: 1rem 15rem 0 0;
    color: #2B2D42;
    text-align: right;
}
.carousel-indicators{
    width: 50%;
    margin-left: -4.2rem;
    margin-bottom: -1.8rem;
}
.carousel-indicators [data-bs-target] {
    width: 0.625rem;
    height: 0.625rem;
    padding: 0;
    margin-right: 3px;
    margin-left: 3px;
    background-color: #2B2D42;
    border-radius: 50%;
}

@media screen and (max-width: 720px){
    .carousel{
        margin-top: 2rem;
        width: 100%;
    }
    .carousel-inner{    
        width: 100%;
    }
    .carousel-caption{
        width: 96%;
        height: 100%;
        margin-left: -2.5rem;
        margin-top: 1rem;
        .gobtn{
            display: none;
        }
        .author{
            display: none;
        }
        .carousel_title h1{
            font-size: 1.4rem;
        }

    }
    .carousel-control-next, .carousel-control-prev {
        width: 86%;
        padding: 1rem 1.4rem 0 0;
        text-align: center;
    }

}
`