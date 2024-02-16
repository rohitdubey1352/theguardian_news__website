import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel'
import Tag from '../HeadlineTag'
import Share from '../MiniShare'
import VisitNow from '../AllNewsCard'
import Cards from '../LatestNewsComp'
import TripCard from '../SportsCard'
import Subscribe from '../Subscribe'
import { Link } from 'react-router-dom'

const Business = () => {
  const API = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=925d1ff1422242c28c0c441655c01437";
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

  return(
    <>
      <TravelDepart>
        <Carousel />

        {/* Trending Carousel */}
        <div className="trending">
          <Tag title='Trending'/>
          <div className="carouselDiv">
            <VisitNow img={data?.articles?.[0]?.urlToImage?? "Loading..."}
                   link={data?.articles?.[0]?.url?? "Loading..."}
                   name={data?.articles?.[0]?.title?? "Loading..."}
                   description={data?.articles?.[0]?.description?? "Loading..."}
            />
            <VisitNow img={data?.articles?.[1]?.urlToImage?? "Loading..."}
                   link={data?.articles?.[1]?.url?? "Loading..."}
                   name={data?.articles?.[1]?.title?? "Loading..."}
                   description={data?.articles?.[1]?.description?? "Loading..."}
            />
            <VisitNow img={data?.articles?.[2]?.urlToImage?? "Loading..."}
                   link={data?.articles?.[2]?.url?? "Loading..."}
                   name={data?.articles?.[2]?.title?? "Loading..."}
                   description={data?.articles?.[2]?.description?? "Loading..."}
            />
            <VisitNow img={data?.articles?.[3]?.urlToImage?? "Loading..."}
                   link={data?.articles?.[3]?.url?? "Loading..."}
                   name={data?.articles?.[3]?.title?? "Loading..."}
                   description={data?.articles?.[3]?.description?? "Loading..."}
            />
            <VisitNow img={data?.articles?.[4]?.urlToImage?? "Loading..."}
                   link={data?.articles?.[4]?.url?? "Loading..."}
                   name={data?.articles?.[4]?.title?? "Loading..."}
                   description={data?.articles?.[4]?.description?? "Loading..."}
            />
            <VisitNow img={data?.articles?.[5]?.urlToImage?? "Loading..."}
                   link={data?.articles?.[5]?.url?? "Loading..."}
                   name={data?.articles?.[5]?.title?? "Loading..."}
                   description={data?.articles?.[5]?.description?? "Loading..."}
            />
            
          </div>
                <button className="readmore mt-5">
                  Read More
                </button>
        </div>

        {/* Top Highlights */}
        <div className="Top_Highlights">
          <Tag title='Top Highlights'/>
              <div className="row cardDiv">
                <div className="col-12 col-lg-6 col-md-6">
                  <div className="box">
                    <div className="content">
                      <h3>
                        <Link to={data?.articles?.[10]?.url??"Loading..."}>
                          {data?.articles?.[10]?.title?? "Loading..."}
                        </Link>
                      </h3>
                      <Share />
                    </div>
                    <img className='boxImage' src={data?.articles?.[10]?.urlToImage?? "Loading..."} alt="" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6">
                  <div className="box">
                    <div className="content">
                      <h3>
                        <Link to={data?.articles?.[11]?.url??"Loading..."}>
                          {data?.articles?.[11]?.title?? "Loading..."}
                        </Link>  
                      </h3>
                      <Share />
                    </div>
                    <img className='boxImage' src={data?.articles?.[11]?.urlToImage?? "Loading..."} alt="" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6">
                  <div className="box">
                    <div className="content">
                      <h3>
                        <Link to={data?.articles?.[13]?.url??"Loading..."}>
                          {data?.articles?.[13]?.title?? "Loading..."}
                        </Link>  
                      </h3>
                      <Share />
                    </div>
                    <img className='boxImage' src={data?.articles?.[13]?.urlToImage?? "Loading..."} alt="" />
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6">
                  <div className="box">
                    <div className="content">
                      <h3>
                        <Link to={data?.articles?.[17]?.url??"Loading..."}>
                          {data?.articles?.[17]?.title?? "Loading..."}
                        </Link>
                      </h3>
                      <Share />
                    </div>
                    <img className='boxImage' src={data?.articles?.[17]?.urlToImage?? "Loading..."} alt="" />
                  </div>
                </div>

                <button className="readmore mt-5">
                  Read More
                </button>
                
              </div>
        </div>

        {/* Recommendation! */}
        <div className="visitNow">
          <Tag title='Recommendation!'/>
          <div className="visitDiv">
            <div className="cards">
              <Cards img={data?.articles?.[0]?.urlToImage??"Loading..."}
                     link={data?.articles?.[0]?.url??"Loading..."}
                     title={data?.articles?.[0]?.title??"Loading..."}
                     author={data?.articles?.[0]?.author??"Loading..."}
              />
            </div>
            <VisitNow img={data?.articles?.[1]?.urlToImage??"Loading..."} 
                      link={data?.articles?.[1]?.url??"Loading..."}
                      name={data?.articles?.[1]?.title??"Loading..."}
                      description={data?.articles?.[1]?.description??"Loading..."} 
            />
            <div className="cards">
              <Cards img={data?.articles?.[2]?.urlToImage??"Loading..."}
                     link={data?.articles?.[2]?.url??"Loading..."}
                     title={data?.articles?.[2]?.title??"Loading..."}
                     author={data?.articles?.[2]?.author??"Loading..."}
              />
            </div>
            <div className="cardDiv">
              <Cards img={data?.articles?.[3]?.urlToImage??"Loading..."}
                      link={data?.articles?.[3]?.url??"Loading..."}
                      title={data?.articles?.[3]?.title??"Loading..."}
                      author={data?.articles?.[3]?.author??"Loading..."}
              />
            </div>
            <div></div>
            <div className="cardDiv">
              <Cards img={data?.articles?.[4]?.urlToImage??"Loading..."}
                     link={data?.articles?.[4]?.url??"Loading..."}
                     title={data?.articles?.[4]?.title??"Loading..."}
                     author={data?.articles?.[4]?.author??"Loading..."}
              />
            </div>
            <div className="cardDiv2">
              <Cards img={data?.articles?.[5]?.urlToImage??"Loading..."}
                     link={data?.articles?.[5]?.url??"Loading..."}
                     title={data?.articles?.[5]?.title??"Loading..."}
                     author={data?.articles?.[5]?.author??"Loading..."}
              />
            </div>
            <div></div>
            <div className="cardDiv2">
              <Cards img={data?.articles?.[6]?.urlToImage??"Loading..."}
                     link={data?.articles?.[6]?.url??"Loading..."}
                     title={data?.articles?.[6]?.title??"Loading..."}
                     author={data?.articles?.[6]?.author??"Loading..."}
              />
            </div>
          </div>
        </div>

        {/* Make A Trip */}
        <div className="makeATrip">
          <Tag title='More About The Business'/>
          <div className="tripGrp">
            <TripCard 
              image={data?.articles?.[12]?.urlToImage??"Loading..."}
              tag={data?.articles?.[12]?.author??"Loading..."}
              link={data?.articles?.[12]?.url??"Loading..."}
              title={data?.articles?.[12]?.title??"Loading..."}
              para={data?.articles?.[12]?.content??"Loading..."}
            />
            <TripCard 
              image={data?.articles?.[4]?.urlToImage??"Loading..."}
              tag={data?.articles?.[4]?.author??"Loading..."}
              link={data?.articles?.[4]?.url??"Loading..."}
              title={data?.articles?.[4]?.title??"Loading..."}
              para={data?.articles?.[4]?.content??"Loading..."}
            />
            <TripCard 
              image={data?.articles?.[5]?.urlToImage??"Loading..."}
              tag={data?.articles?.[5]?.author??"Loading..."}
              link={data?.articles?.[5]?.url??"Loading..."}
              title={data?.articles?.[5]?.title??"Loading..."}
              para={data?.articles?.[5]?.content??"Loading..."}
            />
            <TripCard 
              image={data?.articles?.[1]?.urlToImage??"Loading..."}
              tag={data?.articles?.[1]?.author??"Loading..."}
              link={data?.articles?.[1]?.url??"Loading..."}
              title={data?.articles?.[1]?.title??"Loading..."}
              para={data?.articles?.[1]?.content??"Loading..."}
            />
            <TripCard 
              image={data?.articles?.[16]?.urlToImage??"Loading..."}
              tag={data?.articles?.[16]?.author??"Loading..."}
              link={data?.articles?.[16]?.url??"Loading..."}
              title={data?.articles?.[16]?.title??"Loading..."}
              para={data?.articles?.[16]?.content??"Loading..."}
            />
          </div>
          <button className="readmore mt-5">
            Read More
          </button>

        </div>

        <Subscribe />

      </TravelDepart>
    </>
  )
}

export default Business

const TravelDepart = styled.main`
position: relative;

.trending, 
.Top_Highlights, 
.visitNow,
.makeATrip{
  margin-top: 8rem;
}
.tripGrp{
  margin-top: 5rem;
  display: grid;
  gap: 4.4rem;
  .card{
    .bgImage{
      width: 40.3125rem;
      height: 22.1875rem;
      border-radius: 0.6125rem;         
    }
    .btn{
      display: none;
    }
  }
  .leftCorner{
    gap: 1.2rem;
  }
  p{
    font-size: 1rem;
  }
}
.visitDiv{
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  .author{
    display: none;
  }
  .cards,.cardDiv,.cardDiv2{
    .content{
      width: 100%;
    }
    h2{
      font-size: .9rem;
      line-height: 142%;
    }
  } 
  .cardDiv{
    margin-top: -23rem;
  }
  .cardDiv2{
    margin-top: -11.9rem;
  }

}
.Top_Highlights{
  .cardDiv{
    margin-top: 5rem;
  }
}
.carouselDiv{
  margin-top: 5rem;
  display: grid;
  place-items: start;
  grid-template-columns: repeat(3,1fr);
}
.row{
  .box{
    position: relative;
    width: 38.0625rem;
    height: 35.264rem;
    // background: pink;
    margin-bottom: 2rem;
    .boxImage{
      width: 100%;
      height: 100%;  
      margin-top: -8.9rem; 
    }
    .content{
      position: relative;
      width: 38.0625rem;
      height: 10rem;
      border-radius: 0rem 0rem 0.3125rem 0.3125rem;
      background: linear-gradient(0deg, #2B2D42 0%, rgba(80, 80, 85, 0.70) 157.75%);
      top: 75%;
      padding-top: .65rem;
      padding-left: 1.5rem;
      color: #FFF;
      .container{
        padding: 1.4rem 0 1.8rem 0;
      }
      h3, a{
        font-family: Playfair Display;
        font-size: 1.425rem;
        color: #fff;
        font-weight: 600;
        line-height: 136.5%; /* 2.21813rem */
        letter-spacing: 0.065rem;
        margin-bottom: .6rem;
      }
    }
  }
}

.boxImage{
  width: 14rem;
  height: 10rem;
}

`