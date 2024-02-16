import React,{useEffect, useState} from 'react'
import Carousel from './component/Carousel'
import styled from 'styled-components'
import Popular from './component/pages/Popular'
import Recommendation from './component/pages/Recommendation'
import LiveSports from './component/pages/LiveSports'
import LatestNews from './component/pages/LatestNews'
import AllNews from './component/pages/AllNews'
import WatchNews from './component/pages/WatchNews'
import Stories from './component/Stories'
import Subscribe from './component/Subscribe'
// import { NavLink } from 'react-router-dom'

const News = () => {
  
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
    }, [API]); 

    // data?.articles?.[14]?.url ?? "Loading..."
    
    return (
    <>
        <NewS>
            <div className="container">
                <Carousel />
            </div>

            <Popular title={data?.articles?.[0]?.title ?? "Loading..."} para={data?.articles?.[0]?.description ?? "Loading..."}/>
            <Recommendation />
            <LiveSports />
            <LatestNews />
            <AllNews />
            <WatchNews />
            <Stories />
            <Subscribe />


        </NewS>
    </>
  )
}
export default News;

const NewS = styled.main`
    position: relative;    
    .container{
        width: 77.25rem;
        min-width: 100%;
        height: 41.1875rem;
        padding: 0;
    }
    @media screen and (max-width: 720px){
        .container{
            width: 100%;
            padding: 0;
        }   
    }


`