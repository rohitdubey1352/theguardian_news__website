import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel' 
import HeadTag from '../HeadlineTag'
import Allnews from '../AllNewsCard'
import WatchNow from '../pages/WatchNews'
import Story from '../Stories'
import Subscribe from '../Subscribe'
import Socialmedia from '../Socialmedia'

const Entertainment = () => {
    const [data, setData] = useState(null);
    const API = 'https://watchmode.p.rapidapi.com/title/3173903/seasons';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bf99a2a22amshfcd7cae92ce7c1ep1a23dbjsne5afb00a2ff2',
            'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
        }
    };
    
    const fetchData = async (url) => {
        try {
            const res = await fetch(url, options);
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
    <Entertainments>
        <Carousel />
        {/* Today's Trending */}
        <div className="Todaytrending">
            <HeadTag title="Today's Trending"/>
            <div className="trendingDiv grid">
                <Allnews name={data?.[0]?.name ?? "Loading..."} 
                         description={data?.[0]?.overview ?? "Loading..."}
                         img={data?.[0]?.poster_url ?? "Loading..."}
                         link={data?.[0]?.url??"Loading"}
                />
                <Allnews name={data?.[1]?.name ?? "Loading..."} 
                         description={data?.[1]?.overview ?? "Loading..."}
                         img={data?.[1]?.poster_url ?? "Loading..."}
                         link={data?.[1]?.url??"Loading"}
                />
                <Allnews name={data?.[2]?.name ?? "Loading..."} 
                         description={data?.[2]?.overview ?? "Loading..."}
                         img={data?.[2]?.poster_url ?? "Loading..."}
                         link={data?.[2]?.url??"Loading"}
                />
                <Allnews name={data?.[3]?.name ?? "Loading..."}
                         description={data?.[3]?.overview ?? "Loading..."}
                         img={data?.[3]?.poster_url ?? "Loading..."}
                         link={data?.[3]?.url??"Loading"}
                />
                <Allnews name={data?.[4]?.name ?? "Loading..."} 
                         description={data?.[4]?.overview ?? "Loading..."}
                         img={data?.[4]?.poster_url ?? "Loading..."}
                         link={data?.[4]?.url??"Loading"}
                />
                
            </div>
            
            <button className="readmore mt-3">
                Read More
            </button>
        </div>
        <div className="features">
            <div className="container-fluid">
                <div className="grid">
                    <div className="feat">
                        <img src="/src/assets/Image/person1.png" alt="" />
                        <h3>ANOTHER GUIDE</h3>
                    </div>
                    <div className="feat">
                        <img src="/src/assets/Image/person2.png" alt="" />
                        <h3>FEATURES</h3>
                    </div>
                    <div className="feat">
                        <img src="/src/assets/Image/person3.png" alt="" />
                        <h3>INTERVIEW</h3>
                    </div>
                        <div className="feat">
                            <img src="/src/assets/Image/person4.png" alt="" />
                            <h3>ALL NEWS</h3>
                        </div>
                        <div className="feat">
                            <img src="/src/assets/Image/person5.png" alt="" />
                            <h3>IN PICTURES</h3>
                        </div>
                    
                </div>
            </div>
        </div>
        
        <Socialmedia />

        <WatchNow />
        <Story />
        <Subscribe />


    </Entertainments>    
    
    </>
  )
}

export default Entertainment

const Entertainments = styled.main`

position: relative;

.lastDiv{
    margin-top: -12rem;
}

.thirdImg{
    width: 22.25rem;
    height: 15.0625rem;
}
.secondImg{
    width: 29rem;
    height: 28.75rem;
}

.features{
    margin: 38rem 0 10rem 0;
}
.Todaytrending{
    height: 100vh;
    margin-top: 10rem;
    .trendingDiv{
        margin-top: 5rem;
        gap: 2.2rem;
    }

}

.grid{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2.4rem;
    place-items: start;
}
.content h3{
    color: #000;
    font-family: Playfair Display;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
    margin-top: 1rem;
}

`