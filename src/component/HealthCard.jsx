import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import HeadlineTag from './HeadlineTag'
import AllNewsCard from './AllNewsCard'

const HealthCard = () => {
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
    <Health>
        <HeadlineTag title="Health's Time"/>
          <div className="grid my-5">
            <AllNewsCard name={data?.articles?.[6]?.title ?? "Loading..."}
                         img={data?.articles?.[6]?.urlToImage??"loading..."}
                         link={data?.articles?.[6]?.url ?? "Loading..."}
                         description={data?.articles?.[6]?.content ?? "Loading..."}
            />
            <AllNewsCard name={data?.articles?.[2]?.title ?? "Loading..."}
                         img={data?.articles?.[2]?.urlToImage??"loading..."}
                         link={data?.articles?.[2]?.url ?? "Loading..."}
                         description={data?.articles?.[2]?.content ?? "Loading..."}
            />
            <AllNewsCard name={data?.articles?.[0]?.title ?? "Loading..."}
                         img={data?.articles?.[0]?.urlToImage??"loading..."}
                         link={data?.articles?.[0]?.url ?? "Loading..."}
                         description={data?.articles?.[0]?.content ?? "Loading..."}
            />
            <AllNewsCard name={data?.articles?.[15]?.title ?? "Loading..."}
                         img={data?.articles?.[15]?.urlToImage??"loading..."}
                         link={data?.articles?.[15]?.url ?? "Loading..."}
                         description={data?.articles?.[15]?.content ?? "Loading..."}
            />
            <AllNewsCard name={data?.articles?.[18]?.title ?? "Loading..."}
                         img={data?.articles?.[18]?.urlToImage??"loading..."}
                         link={data?.articles?.[18]?.url ?? "Loading..."}
                         description={data?.articles?.[18]?.content ?? "Loading..."}
            />
            <AllNewsCard name={data?.articles?.[17]?.title ?? "Loading..."}
                         img={data?.articles?.[17]?.urlToImage??"loading..."}
                         link={data?.articles?.[17]?.url ?? "Loading..."}
                         description={data?.articles?.[17]?.content ?? "Loading..."}
            />
          </div>
          <button className="readmore">
            Read More
          </button>
    </Health>    
    </>
  )
}

export default HealthCard
const Health = styled.main`
.card{
    background: #fff;
    padding: 2px!important;
}

.grid{
    position: relative;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    place-items: start;
    gap: .6rem;
}


`