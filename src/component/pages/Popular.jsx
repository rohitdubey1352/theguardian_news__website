import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HeadlineTag from '../HeadlineTag'
import ShareIcons from '../ShareIcons'
import MiniSection from '../MiniSection'

const Popular = (props) => {
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
            <PopularPage>
                <HeadlineTag title={'Popular News'} />

                <div className="container my-5">
                    <div className="news_Section">
                        <div className="newsImage">
                            <img src={data?.articles?.[3]?.urlToImage ?? "Loading..."} alt="newsimg" />
                            <Link to={data?.articles?.[3]?.url ?? "Loading..."}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <rect width="40" height="40" rx="20" fill="white" />
                                    <path d="M15.2189 25.2193C14.9455 25.4926 14.9455 25.9358 15.2189 26.2092C15.4923 26.4826 15.9355 26.4826 16.2088 26.2092L15.2189 25.2193ZM24.9853 17.1428C24.9853 16.7562 24.6719 16.4428 24.2853 16.4428L17.9853 16.4428C17.5987 16.4428 17.2853 16.7562 17.2853 17.1428C17.2853 17.5294 17.5987 17.8428 17.9853 17.8428L23.5853 17.8428L23.5853 23.4428C23.5853 23.8294 23.8987 24.1428 24.2853 24.1428C24.6719 24.1428 24.9853 23.8294 24.9853 23.4428L24.9853 17.1428ZM16.2088 26.2092L24.7803 17.6378L23.7903 16.6478L15.2189 25.2193L16.2088 26.2092Z" fill="#2B2D42" />
                                </svg>
                            </Link>
                        </div>
                        <div className="headline">
                            <h1>
                                <Link to={data?.articles?.[3]?.url ?? "Loading..."}>
                                    {data?.articles?.[3]?.title ?? "Loading..."}
                                </Link>
                            </h1>
                            <button className='btn'>
                                POLITICS
                            </button>
                        </div>
                        <div className="para">
                            <p>{data?.articles?.[3]?.content ?? "Loading..."}</p>
                        </div>
                        <div className="shareButtons">
                            {/* Share buttons */}
                            <ShareIcons author={data?.articles?.[3]?.author ?? "Loading..."} />
                        </div>
                    </div>

                    <div className="miniSection">
                        <MiniSection title={data?.articles?.[1]?.title ?? "Loading..."}
                            image={data?.articles?.[1]?.urlToImage ?? "Loading..."}
                            link={data?.articles?.[1]?.url ?? "Loading..."}
                            tag={data?.articles?.[1]?.author ?? "Loading..."}
                        />
                        <MiniSection title={data?.articles?.[6]?.title ?? "Loading..."}
                            image={data?.articles?.[6]?.urlToImage ?? "Loading..."}
                            link={data?.articles?.[6]?.url ?? "Loading..."}
                            tag={data?.articles?.[6]?.author ?? "Loading..."}
                        />
                        <MiniSection title={data?.articles?.[4]?.title ?? "Loading..."}
                            image={data?.articles?.[4]?.urlToImage ?? "Loading..."}
                            link={data?.articles?.[4]?.url ?? "Loading..."}
                            tag={data?.articles?.[4]?.author ?? "Loading..."}
                        />
                        <MiniSection title={data?.articles?.[11]?.title ?? "Loading..."}
                            image={data?.articles?.[11]?.urlToImage ?? "Loading..."}
                            link={data?.articles?.[11]?.url ?? "Loading..."}
                            tag={data?.articles?.[11]?.author ?? "Loading..."}
                        />
                    </div>
                </div>

            </PopularPage>
        </>
    )
}
export default Popular

const PopularPage = styled.main`
    position: relative;
    margin-top: 12rem;
    .container{
        width: 55.4375rem!important;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .para{
        p{
            line-height: 180%;
        }
    }
    .miniSection{
        position: relative;
        img{
            width: 10rem;
            height: 12rem;
            margin-right: .6rem;
        }
    }
    .news_Section{
        position: relative;
        width: 55.4375rem;
        height: auto;
        .newsImage{
            position: relative;
            img{
                position: relative;
                width: 55.4375rem;
                height: 27.5625rem;
            }
            svg{
                position: relative;
                margin-top: -5rem;
                margin-left: 94.5%;
                cursor: pointer;
            }
        }
        .headline{
            display: flex;
            justify-content: space-between;
            h1, a{
                font-family: Playfair Display;
                font-size: 2.5rem;
                width: 80%;
                color: #232323;
                font-weight: 600;
                line-height: 110%;
                letter-spacing: 0.1rem;
            }
            .btn{
                width: 6.25rem;
                height: 1.875rem;
                border-radius: 3.125rem;
                border: 1px solid #000;
                background: #FFF;
                font-family: Montserrat Subrayada;
                font-weight: 500;
                box-shadow: 2px 3px 0px 0px rgba(0, 0, 0, 0.70);
            }
        }
    }
    

@media screen and (max-width: 720px){
    .container{
        width: 100%!important;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        height: 100vh;
        // margin-top: 26rem;
    }
    .news_Section{
        display: none;
    }
    .miniSection{
        margin-top: 1rem;
        width: 100%;
        height: 100%;
    }
}
`