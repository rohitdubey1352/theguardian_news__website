import React from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel'
import Tag from '../HeadlineTag'
import SportsCard from '../SportsCard'
import Carsl from '../RecCarousel'
import OnlineCard from '../Card'
import Card from '../AllNewsCard'
import Subscribe from '../Subscribe'

const Money = () => {
  return (
    <>
    <MoneyDiv>
        <Carousel />
        {/* Trending */}
        <div className="trending">
            <Tag title="Trending's" />
            <div className="trendingDiv">
                <div className="cardDiv">
                    <SportsCard />
                    <SportsCard />
                    <SportsCard />
                </div>
            </div>
            <button className="readmore">
                Read More
            </button>
        </div>

        {/* Trading */}
        <div className="Trading">
            <Tag title="Trading" />
            <Carsl />
        </div>

        {/* Internet */}
        <div className="Internet">
            <Tag title="Internet" />
            <div className="online grid">
                <OnlineCard />
                <OnlineCard />
                <OnlineCard />
                <OnlineCard />
                <OnlineCard />
                <OnlineCard />
            </div>
            <button className="readmore">
                Read More
            </button>
        </div>

        {/* Business */}
        <div className="Business">
            <Tag title="Business" />
            <div className="grid my-5">
                <Card />
                <Card />
                <Card />
            </div>
        </div>

        <Subscribe />

    </MoneyDiv>
    
    </>
  )
}

export default Money

const MoneyDiv = styled.main`
position: realtive;
margin: 2rem 0;
.trending,
.trendingDiv,
.Internet{
    position: realtive;
    margin: 7rem 0;
}
.cardDiv{
    margin: 7rem 0;
    display: grid;
    gap: 2rem;
}
.online{
    margin: 4rem 0;
}
.grid{
    display: grid;
    place-items: start;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
}

`