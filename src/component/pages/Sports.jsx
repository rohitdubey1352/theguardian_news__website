import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LiveSports from './LiveSports'
import Carousel from '../Carousel'
import HeadlineTag from '../HeadlineTag'
import RecCarousel from '../RecCarousel'
import AllNews from '../AllNewsCard'
import SportsCard from '../SportsCard'
import Story from '../Stories'
import Subscribe from '../Subscribe'
import { Link } from 'react-router-dom'
import SportsDivCard from '../SportsDivCard'

const Sports = () => {
    const API = "https://newsapi.org/v2/top-headlines/sources?apiKey=925d1ff1422242c28c0c441655c01437";
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
    }, [API]);

    return (
        <>
            <Sport>
                <Carousel />
                <div className="liveScore">
                    <LiveSports />
                </div>
                {/* Cricket */}
                <div className="cricket">
                    <HeadlineTag title="Cricket" />
                    <div className="cricketDiv my-5">
                        {/* <RecCarousel /> */}
                        <AllNews name={data?.sources?.[32]?.name ?? "Loading..."}
                            description={data?.sources?.[32]?.description ?? "Loading..."}
                            img="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/371200/371277.jpg"
                        />
                        <AllNews name={data?.sources?.[39]?.name ?? "Loading..."}
                            description={data?.sources?.[39]?.description ?? "Loading..."}
                            img="https://content.api.news/v3/images/bin/12ee6ad944c2fe010db0fbe7f5f41d3d?width=768"
                        />
                        <AllNews name={data?.sources?.[12]?.name ?? "Loading..."}
                            description={data?.sources?.[12]?.description ?? "Loading..."}
                            img="https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/913E/production/_131728173_virat-battle-of-the-goats-1.jpg"
                        />

                    </div>
                </div>
                {/* Football */}
                <div className="football">
                    <HeadlineTag title="Football" />
                    <div className="footballDiv my-5">
                        <AllNews name={data?.sources?.[35]?.name ?? "Loading..."}
                            description={data?.sources?.[35]?.description ?? "Loading..."}
                            img="https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/99B7/production/_131715393_gettyimages-1483376483.jpg" />
                        <AllNews name={data?.sources?.[37]?.name ?? "Loading..."}
                            description={data?.sources?.[37]?.description ?? "Loading..."}
                            img="https://cdn.mos.cms.futurecdn.net/rZBkiXQwps9ujTQ6L7wmVT-840-80.jpg.webp" />
                        <AllNews name={data?.sources?.[47]?.name ?? "Loading..."}
                            description={data?.sources?.[47]?.description ?? "Loading..."}
                            img="https://ss-i.thgim.com/public/incoming/fvsic3/article67535903.ece/alternates/LANDSCAPE_1200/india%20vs%20kuwait.jpg" />
                    </div>
                </div>
                {/* More Sports */}
                <div className="moreSports">
                    <HeadlineTag title="More Sport's" />
                    {/* Sports Card */}
                    <SportsDivCard />

                    <Link to="/">
                        <button className="readmore">
                            Read More
                        </button>
                    </Link>

                </div>

                <Story />
                <Subscribe />

            </Sport>

        </>
    )
}

export default Sports

const Sport = styled.main`

position: relative;
.liveScore{
    position: relative;
    margin: 10rem 0 5rem 0;
}
.cricket,
.football,
.moreSports
{
    position: relative;
    margin: 8rem 0 4rem 0;
}
.footballDiv, .cricketDiv{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cardDiv{
    margin: 7rem 0;
    display: grid;
    gap: 2rem;
}

.moreSports{
    .bgImage{
        width: 40.3125rem;
        height: 22.1875rem;
        border-radius: 0.6125rem;         
  }
}

// ..................................................................-0.03rem
@media screen and (max-width: 720px) {
    .moreSports{
        
    }
    .cricketDiv, .footballDiv{
        // max-width: 20rem;
        width: 100%;
        margin-left: 2.2rem;
        flex-direction: column;
        .card-body .cardImage{
            max-width: 20rem;
        }
        .card-body p{
            max-width: 20rem;
        }
        .shareIcons{
            margin-left: -1rem;
            .profile{
                p{
                    font-size: .7rem;
                }
            }
            .iconsGroup{
                p{
                    font-size: .6rem;
                }
                .icons{
                    width: 20px;
                    height: 20px;
                }
                margin-right: 4rem;
            }
        }
    }
}
`