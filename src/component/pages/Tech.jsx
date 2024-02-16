import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel'
import HeadTag from '../HeadlineTag'
import ShareIcons from '../ShareIcons'
import Card from '../LatestNewsComp'
import TipsCard from '../AllNewsCard'
import WatchNow from './WatchNews'
import Subscribe from '../Subscribe'
import { Link } from 'react-router-dom'

const Tech = () => {
  const API = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=925d1ff1422242c28c0c441655c01437";
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
      <Techno>
        <Carousel />
        {/* Popular Tech */}
        <div className="PopularTech">
          <HeadTag title="Popular Tech" />
          <div className="grid my-5">
            <div className="news_Section">
              <div className="newsImage">
                <img src={data?.articles?.[2]?.urlToImage ?? "Loading..."} alt="newsimg" />
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="20" fill="white" />
                  <path d="M15.2189 25.2193C14.9455 25.4926 14.9455 25.9358 15.2189 26.2092C15.4923 26.4826 15.9355 26.4826 16.2088 26.2092L15.2189 25.2193ZM24.9853 17.1428C24.9853 16.7562 24.6719 16.4428 24.2853 16.4428L17.9853 16.4428C17.5987 16.4428 17.2853 16.7562 17.2853 17.1428C17.2853 17.5294 17.5987 17.8428 17.9853 17.8428L23.5853 17.8428L23.5853 23.4428C23.5853 23.8294 23.8987 24.1428 24.2853 24.1428C24.6719 24.1428 24.9853 23.8294 24.9853 23.4428L24.9853 17.1428ZM16.2088 26.2092L24.7803 17.6378L23.7903 16.6478L15.2189 25.2193L16.2088 26.2092Z" fill="#2B2D42" />
                </svg>
              </div>
              <div className="headline">
                <Link to={data?.articles?.[2].url ?? "Loading..."}>
                  <h1>
                    {data?.articles?.[2]?.title ?? "Loading..."}
                  </h1>
                </Link>
              </div>
              <div className="para">
                <p>
                  {data?.articles?.[2]?.description ?? "Loading..."}
                </p>
              </div>
              <div className="shareButtons">
                <ShareIcons author={data?.articles?.[0]?.author ?? "Loading..."} />
              </div>
            </div>
            <div className="rightOne">
              <Card img={data?.articles?.[11]?.urlToImage ?? "Loading..."}
                title={data?.articles?.[11]?.title ?? "Loading..."}
                author={data?.articles?.[11]?.author ?? "Loading..."}
                link={data?.articles?.[11]?.url ?? "Loading..."}
              />
              <Card img={data?.articles?.[6]?.urlToImage ?? "Loading..."}
                title={data?.articles?.[6]?.title ?? "Loading..."}
                author={data?.articles?.[6]?.author ?? "Loading..."}
                link={data?.articles?.[6]?.url ?? "Loading..."}
              />
              <Card img={data?.articles?.[4]?.urlToImage ?? "Loading..."}
                title={data?.articles?.[4]?.title ?? "Loading..."}
                author={data?.articles?.[4]?.author ?? "Loading..."}
                link={data?.articles?.[4]?.url ?? "Loading..."}
              />
              <Card img={data?.articles?.[7]?.urlToImage ?? "Loading..."}
                title={data?.articles?.[7]?.title ?? "Loading..."}
                author={data?.articles?.[5]?.author ?? "Loading..."}
                link={data?.articles?.[7]?.url ?? "Loading..."}
              />
            </div>
          </div>
        </div>

        {/* Tips & Trick */}
        <div className="Tips_Trick">
          <HeadTag title="Internet & AI" />
          <div className="tips_content">
            <TipsCard
              img={data?.articles?.[13]?.urlToImage ?? "Loading..."}
              name={data?.articles?.[13]?.title ?? "Loading..."}
              description={data?.articles?.[13]?.description ?? "Loading..."}
              link={data?.articles?.[13]?.url ?? "Loading..."}
            />
            <TipsCard
              img={data?.articles?.[14]?.urlToImage ?? "Loading..."}
              name={data?.articles?.[14]?.title ?? "Loading..."}
              description={data?.articles?.[14]?.description ?? "Loading..."}
              link={data?.articles?.[14]?.url ?? "Loading..."}
            />
            <TipsCard
              img={data?.articles?.[16]?.urlToImage ?? "Loading..."}
              name={data?.articles?.[16]?.title ?? "Loading..."}
              description={data?.articles?.[16]?.description ?? "Loading..."}
              link={data?.articles?.[16]?.url ?? "Loading..."}
            />
            <TipsCard
              img={data?.articles?.[10]?.urlToImage ?? "Loading..."}
              name={data?.articles?.[10]?.title ?? "Loading..."}
              description={data?.articles?.[10]?.description ?? "Loading..."}
              link={data?.articles?.[10]?.url ?? "Loading..."}
            />
            <TipsCard
              img={data?.articles?.[18]?.urlToImage ?? "Loading..."}
              name={data?.articles?.[18]?.title ?? "Loading..."}
              description={data?.articles?.[18]?.description ?? "Loading..."}
              link={data?.articles?.[18]?.url ?? "Loading..."}
            />
            <TipsCard
              img={data?.articles?.[19]?.urlToImage ?? "Loading..."}
              name={data?.articles?.[19]?.title ?? "Loading..."}
              description={data?.articles?.[19]?.description ?? "Loading..."}
              link={data?.articles?.[19]?.url ?? "Loading..."}
            />
            <TipsCard
              img={data?.articles?.[12]?.urlToImage ?? "Loading..."}
              name={data?.articles?.[12]?.title ?? "Loading..."}
              description={data?.articles?.[12]?.description ?? "Loading..."}
              link={data?.articles?.[12]?.url ?? "Loading..."}
            />
            <TipsCard
              img={data?.articles?.[17]?.urlToImage ?? "Loading..."}
              name={data?.articles?.[17]?.title ?? "Loading..."}
              description={data?.articles?.[17]?.description ?? "Loading..."}
              link={data?.articles?.[17]?.url ?? "Loading..."}
            />
            <TipsCard
              img={data?.articles?.[4]?.urlToImage ?? "Loading..."}
              name={data?.articles?.[4]?.title ?? "Loading..."}
              description={data?.articles?.[4]?.description ?? "Loading..."}
              link={data?.articles?.[4]?.url ?? "Loading..."}
            />
          </div>
          <button className="readmore mt-5">
            Read More
          </button>
        </div>

        {/* Watch More */}
        <WatchNow />

        {/* Subscribe */}
        <Subscribe />

      </Techno>
    </>
  )
}

export default Tech

const Techno = styled.main`
position: relative;
.rightOne{
  position: relative;
  margin-left: -4.6rem;
  width: 26rem;
  .box{
    width: auto;
  }
}

.rightOne .boxImage{
  width: 15rem;
}
.rightOne .content{
  h2{
    width: 100%;
    color: #2B2D42;
    font-family: DM Serif Display;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 105.5%;
  }
}
.headline{
  a{
    color: #2B2D42;
    font-family: DM Serif Display;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 105.5%;
  }
}
.NewsSection{
  .profile, .iconsGroup{
    display: none;
  }
}
.PopularTech, .Tips_Trick{
  position: relative;
  margin-top: 8rem;
}
.tips_content{
  position: relative;
  margin-top: 5rem;
}
.btn{
  border-radius: 3.125rem;
  border: 1px solid #000;
  background: #FFF;
  box-shadow: 2px 3px 0px 0px rgba(0, 0, 0, 0.70);
}
.news_Section{
  position: relative;
  width: 55.4375rem;
  padding-right: 5.2rem;
  height: auto;
  .newsImage{
      position: relative;
      img{
          width: 50rem;
          height: 27.5625rem;
      }
      svg{
          position: relative;
          margin-top: -5rem;
          margin-left: 93.7%;
          cursor: pointer;
      }
  }
}
}
.grid{
  position: relative;
  display: grid;
  grid-template-columns: repeat(2,1fr);
}
.tips_content{
  position: relative;
  display: grid;
  grid-template-columns: repeat(3,1fr);

}



`