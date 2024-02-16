import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import HeadlineTag from '../HeadlineTag'
import LatestNewsComp from '../LatestNewsComp'
import { Link } from 'react-router-dom'


const LatestNews = () => {
    const API = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=925d1ff1422242c28c0c441655c01437';
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

            <LatestNew>
                <HeadlineTag title="Latest New's" />

                <div className="container my-5">
                    <div className="leftSection">
                        <div className="texture">
                            <h1>
                                LATEST NEWS
                            </h1>
                        </div>
                        <div className="imgContent">
                            <div className="content">
                                <button className='btn mb-2'>
                                    {data?.articles?.[3]?.author ?? "Loading..."}
                                </button>
                                <h2>
                                    {data?.articles?.[3]?.title ?? "Loading..."}
                                </h2>
                                <p>{data?.articles?.[3]?.description ?? "Loading..."}
                                    <span>
                                        <Link to={data?.articles?.[3]?.url ?? "Loading..."}>
                                            Read More
                                        </Link>
                                    </span>
                                </p>
                                <h5>
                                    Published at: {data?.articles?.[3]?.publishedAt ?? "Loading..."}
                                </h5>
                            </div>
                            <img src={data?.articles?.[3]?.urlToImage ?? "Loading..."} className='mainImage' alt="bgimage" />
                        </div>
                    </div>
                    <div className="rightSection">
                        <LatestNewsComp img={data?.articles?.[17]?.urlToImage ?? "Loading..."}
                            title={data?.articles?.[17]?.title ?? "Loading..."}
                            author={data?.articles?.[1]?.author ?? "Loading..."}
                            link={data?.articles?.[17]?.url ?? "Loading..."}
                        />
                        <LatestNewsComp img={data?.articles?.[11]?.urlToImage ?? "Loading..."}
                            title={data?.articles?.[11]?.title ?? "Loading..."}
                            author={data?.articles?.[5]?.author ?? "Loading..."}
                            link={data?.articles?.[11]?.url ?? "Loading..."}
                        />
                        <LatestNewsComp img={data?.articles?.[10]?.urlToImage ?? "Loading..."}
                            title={data?.articles?.[10]?.title ?? "Loading..."}
                            author={data?.articles?.[2]?.author ?? "Loading..."}
                            link={data?.articles?.[10]?.url ?? "Loading..."}
                        />
                    </div>
                    <div className="bottomSection">
                        <div className="box">
                            <LatestNewsComp img={data?.articles?.[13]?.urlToImage ?? "Loading..."}
                                title={data?.articles?.[13]?.title ?? "Loading..."}
                                author={data?.articles?.[13]?.author ?? "Loading..."}
                                link={data?.articles?.[13]?.url ?? "Loading..."}
                            />
                        </div>
                        <div className="box">
                            <LatestNewsComp img={data?.articles?.[14]?.urlToImage ?? "Loading..."}
                                title={data?.articles?.[14]?.title ?? "Loading..."}
                                author={data?.articles?.[14]?.author ?? "Loading..."}
                                link={data?.articles?.[14]?.url ?? "Loading..."}
                            />
                        </div>
                        <div className="box">
                            <LatestNewsComp img={data?.articles?.[4]?.urlToImage ?? "Loading..."}
                                title={data?.articles?.[4]?.title ?? "Loading..."}
                                author={data?.articles?.[10]?.author ?? "Loading..."}
                                link={data?.articles?.[4]?.url ?? "Loading..."}
                            />
                        </div>
                    </div>
                </div>


            </LatestNew>

        </>
    )
}

export default LatestNews

const LatestNew = styled.main`

position: relative;
margin-top: 5rem;
.mainImage{
    width: 45.625rem;
    height: 35.375rem;
}
.boxImage{
    width: 10rem;
    height: 10.75rem;
    border-radius: 5px;
}
.container{
    position: relative;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 1.4rem;
    // background: pink;
}
.rightSection{
    position: relative;
    margin-left: -14rem;
}
.leftSection{
    position: relative;
    width: 53.4375rem;
    height: 35.375rem;
    // background: pink;
    .imgContent{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 2.2rem;
        .content{
            position: relative;
            width: 21.5625rem;
            height: 24.6875rem;
            display: grid;
            place-items: start;
            border-radius: 0.375rem;
            background: #FFF;
            margin-right: -14rem;
            text-align: left;
            padding: 1rem;
            .btn{
                color: #fff;
                background: #20F0CB;
                box-shadow: 2px 3px 0px 0px rgba(0, 0, 0, 0.70);
            }
            h2{
                color: #000;
                font-family: Playfair Display;
                font-size: 1.3rem;
                font-weight: 600;
                letter-spacing: 0.065rem;
            }
            p{
                color: #2B2D42;
                font-family: Montserrat;
                font-size: .84rem;
                font-weight: 300;
                line-height: 180%; /* 0.8rem */
                letter-spacing: 0.0125rem;
                span a{
                    color: #000;
                    font-family: Playfair Display;
                    font-size: 0.975rem;
                    font-weight: 600;
                    letter-spacing: 0.035rem;
                    cursor: pointer;
                }
            }
            h5{
                color: #2B2D42;
                font-family: Montserrat;
                font-size: .87rem;
                font-weight: 400;
                margin-top: 2rem;
                line-height: 108%;
            }
        }
        img{
            border-radius: 0.5rem;
        }
    }
    .texture h1{
        position: absolute;
        left: -16.5rem;
        top: 16rem;
        color: #000;
        font-family: DM Serif Display;
        font-size: 6rem;
        font-style: italic;
        font-weight: 400;
        line-height: 61.5%; /* 3.69rem */
        letter-spacing: -0.36rem;
        transform: rotate(-90deg);
    }
}
.bottomSection{
    position: relative;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3,1fr); 
}

//...........................................................................

@media screen and (max-width: 720px){
    .leftSection, .bottomSection, .text{
        display: none;
    }
    .rightSection{
        position: relative;
        width: 90%;
        margin-left: 0;
        .box{
            width: 20rem;
        }
        .content h2{
            width: 75%;
            font-size: 1rem;
        }
        .icons{
            img{
                width: 1rem;
                height: 1rem;
            }
        }
    }
}

`