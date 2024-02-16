import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HeadlineTag from '../HeadlineTag'
import ShareIcons from '../ShareIcons'
import Card from '../Card'
import { Link } from 'react-router-dom'

const WatchNews = () => {
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
            <WatchNow>
                <HeadlineTag title='Watch News' />

                <div className="NewsSection">
                    <div className="box mt-5">
                        <div className="videoSection">
                            <img src={data?.articles?.[6]?.urlToImage ?? "Loading..."} className='videoImage' alt="watchnow" />
                            <Link to={data?.articles?.[6]?.url ?? "Loading..."}>
                                <img className='playnow' src="/src/assets/Image/play.png" alt="play" />
                            </Link>
                        </div>
                        <div className="shareicons">
                            <ShareIcons author={data?.articles?.[6]?.author ?? "Loading..."} />
                        </div>
                        <Link to={data?.articles?.[6]?.url ?? "Loading..."}>
                            <h1>{data?.articles?.[6]?.title ?? "Loading..."}</h1>
                        </Link>

                    </div>
                    <div className="container contentBox">
                        <div className="row">
                            <div className="col-12 col-lg-4 col-md-4">
                                <Card img={data?.articles?.[14]?.urlToImage ?? "Loading..."}
                                    title={data?.articles?.[14]?.title ?? "Loading..."}
                                    link={data?.articles?.[14]?.url ?? "Loading..."}

                                />
                            </div>
                            <div className="col-12 col-lg-4 col-md-4">
                                <Card img={data?.articles?.[3]?.urlToImage ?? "Loading..."}
                                    title={data?.articles?.[3]?.title ?? "Loading..."}
                                    link={data?.articles?.[3]?.url ?? "Loading..."}

                                />
                            </div>
                            <div className="col-12 col-lg-4 col-md-4">
                                <Card img={data?.articles?.[19]?.urlToImage ?? "Loading..."}
                                    title={data?.articles?.[19]?.title ?? "Loading..."}
                                    link={data?.articles?.[19]?.url ?? "Loading..."}

                                />
                            </div>
                        </div>
                    </div>
                    <Link to="/contact">
                        <button className='readmore mt-5'>
                            Read More
                        </button>
                    </Link>
                </div>

            </WatchNow>

        </>
    )
}

export default WatchNews

const WatchNow = styled.main`
    position: relative;
    margin-top: 10rem;
    .container {
        height: 100%!important;
        margin-left: -1rem;
    }
    .row{
        margin-right: -2.2rem;
    }
    .NewsSection{
        position: relative;
    }
    .shareicons{
        position: relative;
    }
    .box{
        position: relative;
        h1{
            color: #2B2D42;
            font-family: DM Serif Display;
            font-size: 2rem;
            font-style: normal;
            font-weight: 400;
            letter-spacing: 0.05rem;
        }
        h1::first-letter{
            color: #2B2D42;
            font-family: DM Serif Display;
            font-size: 3.4rem;
            font-weight: 400;
            line-height: 118%;
            letter-spacing: 0.08rem;
        }
        .videoSection{
            position: relative;
            width: 100%;
            height: 100%;
            .videoImage{
                width: 100%;
                height: 470px;
                border-radius: 12px;
            }
            .playnow{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
        .videoSection::before{
            content: '';
            position: absolute;
            width: 6.25rem;
            height: 6.25669rem;
            border-radius: 3.125rem;
            border: 2px solid #FFF;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .contentBox{
        position: relative;
        width: 100%;
        height: 100%;
    }
// ............................................................

@media screen and (max-width: 720px){
    .shareicons{
        display: none;
    }
    .box{
        h1{
            font-size: 1.7rem;
        }
        h1::first-letter{
            font-size: 3.2rem;
        }
    }
    .contentBox{
        padding: 1rem;
        .card{
            width: 100%;
            // margin: auto;
            margin-bottom: 2rem;
            .author{
                margin-left: 1rem;
                .iconsGroup{
                    margin-right: -1rem;
                }
            }
            .content h3, a{
                font-size: 1.1rem;
            }
            .videoSection{
                width: 100%;
                height: 100%;
                margin: auto;
                position: relative;
                .videoImage{
                    width: 99%;
                    height: 100%;
                }
                .play{
                    position: absolute;
                    width: 3rem;
                    height: 3rem;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
            .videoSection::before{
                width: 4rem;
                height: 4rem;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}

`