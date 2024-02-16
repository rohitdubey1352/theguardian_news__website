import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel'
import HeadTag from '../HeadlineTag'
import MiniShare from '../MiniShare'
import Story from '../Stories'
import Subscribe from '../Subscribe'
import HealthCard from '../HealthCard'
import FoodsCard from '../FoodsCard'
import { Link } from 'react-router-dom'

const Health = () => {
  const [data, setData] = useState(null);
  const API = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=925d1ff1422242c28c0c441655c01437';
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
    const fetchDataFromAPI = async () => {
        await fetchData(API);
    };

    fetchDataFromAPI();
}, []);  


  return (
    <>
    <Update>
      <Carousel />
      
      {/* Life Update */}
      <div className="updates">
        <HeadTag title="Health's News"/>
        <div className="boxGrp">
          <div className="grid">
            <div className="firstDiv">
              <img className='first mb-2' src={data?.articles?.[10]?. urlToImage ?? "Loading..."} alt="gifImage" />
                <Link to={data?.articles?.[10]?.url??"Loading..."}>
                  {data?.articles?.[10]?.title ?? "Loading..."}
                </Link>
              <p>
                {data?.articles?.[10]?.description??"loading..."}
              </p>
              <MiniShare />
            </div>
            <div className="firstDiv">
              <img className='first mb-2' src={data?.articles?.[3]?. urlToImage ?? "Loading..."} alt="gifImage" />
                <Link to={data?.articles?.[3]?.url??"Loading..."}>
                  {data?.articles?.[3]?.title ?? "Loading..."}
                </Link>
              <p>
                {data?.articles?.[3]?.description??"loading..."}
              </p>
              <MiniShare />
            </div>
            <div className="firstDiv">
              <img className='first mb-2' src={data?.articles?.[7]?. urlToImage ?? "Loading..."} alt="gifImage" />
               <Link to={data?.articles?.[7]?.url??"Loading..."}>
                  {data?.articles?.[7]?.title ?? "Loading..."}
                </Link>
              <p>
                {data?.articles?.[7]?.content??"loading..."}
              </p>
              <MiniShare />
            </div>
            <div className="firstDiv">
              <img className='first mb-2' src={data?.articles?.[4]?. urlToImage ?? "Loading..."} alt="gifImage" />
              <Link to={data?.articles?.[4]?.url??"Loading..."}>
                  {data?.articles?.[4]?.title ?? "Loading..."}
                </Link>
              <p>
                {data?.articles?.[4]?.content??"loading..."}
              </p>
              <MiniShare />
            </div>
            <div className="firstDiv">
              <img className='first mb-2' src={data?.articles?.[11]?. urlToImage ?? "Loading..."} alt="gifImage" />
              <Link to={data?.articles?.[11]?.url??"Loading..."}>
                  {data?.articles?.[11]?.title ?? "Loading..."}
                </Link>
              <p>
                {data?.articles?.[11]?.description??"loading..."}
              </p>
              <MiniShare />
            </div>
            <div className="firstDiv">
              <img className='first mb-2' src={data?.articles?.[6]?. urlToImage ?? "Loading..."} alt="gifImage" />
              <Link to={data?.articles?.[6]?.url??"Loading..."}>
                  {data?.articles?.[6]?.title ?? "Loading..."}
                </Link>
              <p>
                {data?.articles?.[6]?.content??"loading..."}
              </p>
              <MiniShare />
            </div>

          </div>
          <button className="readmore mt-5">
            Read More
          </button>
        </div>

        {/*Health's Time  */}
        <div className="health">
          <HealthCard />
        </div>

        {/* Tips & Trick */}
        <div className="Foods">
          <FoodsCard />

        </div>
    
        <Story />
        <Subscribe />

      </div>

    </Update>
    
    </>
  )
}

export default Health

const Update = styled.main`

position: relative;

h3{
  color: #2B2D42;
  text-transform: capitalize;
  font-family: Playfair Display;
  font-size: 1rem;
  font-weight: 900;
  line-height: 107.5%;
  margin: auto;
  letter-spacing: 0.03rem;
}


.updates{
  margin-top: 10rem;
  position: relative;
}
.Foods{
  margin-top: 8rem;
  position: relative;
  .Section{
    display: grid;
    gap: 1.8rem;
  }
  .grid{
    gap: 2.4rem;
    margin-top: 5rem;
  }
}
.health{
  margin-top: 8rem;
  position: relative;
}

.boxGrp{
  position: relative;
  margin-top: 5rem;
  width: 100%;

  .firstDiv{
    position: relative;
    width: 85%;
    display: grid;
    place-items: start;
    text-align: center;
    gap: .4rem;
    height: auto;
    .para{
      color: #2B2D42;
      font-family: Playfair Display;
      font-size: 1rem;
      font-weight: 700;
    }
    ul{
      margin-left: -2rem;
      margin-bottom: 0.4rem;
      display: flex;
      align-items: start;
      text-align: center;
      gap: 1rem;
      li{
        text-transform: capitalize;
      }
    }
    .profile{
      margin-left: 4px;
      p{
        font-size: .7rem;
      }
    }
    a{
      color: #2B2D42;
      font-family: Playfair Display;
      font-size: 1.2rem;
      font-weight: 900;
      text-align: center;
      margin: auto;
    }
  }
}

.first{
  text-align: center;
  width: 100%;
  border-radius: .6rem;
  height: 16rem;
}

.grid{
  position: relative;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  place-items: start;
  gap: .6rem;
}

`