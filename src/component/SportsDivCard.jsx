import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SportsCard from './SportsCard'

const SportsDivCard = () => {
  const API = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=925d1ff1422242c28c0c441655c01437";
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
      <Card>
        <div className="cardDiv">
          <SportsCard image={data?.articles?.[4]?.urlToImage ?? "Loading..."}
            link={data?.articles?.[4]?.url ?? "Loading..."}
            tag={data?.articles?.[4]?.author ?? "Loading..."}
            title={data?.articles?.[4]?.title ?? "Loading..."}
            para={data?.articles?.[4]?.content ?? "Loading..."}
          />
          <SportsCard image={data?.articles?.[5]?.urlToImage ?? "Loading..."}
            link={data?.articles?.[5]?.url ?? "Loading..."}
            tag={data?.articles?.[5]?.author ?? "Loading..."}
            title={data?.articles?.[5]?.title ?? "Loading..."}
            para={data?.articles?.[5]?.content ?? "Loading..."}
          />
          <SportsCard image={data?.articles?.[2]?.urlToImage ?? "Loading..."}
            link={data?.articles?.[2]?.url ?? "Loading..."}
            tag={data?.articles?.[2]?.author ?? "Loading..."}
            title={data?.articles?.[2]?.title ?? "Loading..."}
            para={data?.articles?.[2]?.content ?? "Loading..."}
          />
          <SportsCard image={data?.articles?.[9]?.urlToImage ?? "Loading..."}
            link={data?.articles?.[9]?.url ?? "Loading..."}
            tag={data?.articles?.[9]?.author ?? "Loading..."}
            title={data?.articles?.[9]?.title ?? "Loading..."}
            para={data?.articles?.[9]?.content ?? "Loading..."}
          />
          <SportsCard image={data?.articles?.[1]?.urlToImage ?? "Loading..."}
            link={data?.articles?.[1]?.url ?? "Loading..."}
            tag={data?.articles?.[1]?.author ?? "Loading..."}
            title={data?.articles?.[1]?.title ?? "Loading..."}
            para={data?.articles?.[1]?.content ?? "Loading..."}
          />
        </div>

      </Card>
    </>
  )
}

export default SportsDivCard

const Card = styled.main`
.cardDiv{
  gap: 4rem;
}
@media screen and (max-width: 720px) {
  .leftCorner{
    padding-left: 0;
    h2{
      font-size: 1rem;
      width: 82%;
    }
    p{
      font-size: .8rem;
      width: 94%;
    }
  }
  .btn{
    display: none;
  }
  .iconsGroup{
    .icons{
      display: none;
    }
  }
  .cardDiv{
    .card{
      width: 20rem;
      // margin-right: 10rem;
      img{
        width: 20rem;
        // margin-right: 10rem;
      }
      
    }
  }
 

}

`