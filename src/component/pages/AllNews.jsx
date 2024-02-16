import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HeadlineTag from '../HeadlineTag'
import Card from '../AllNewsCard'

const AllNews = () => {

  const [data, setData] = useState(null);
  const API_1 = "https://newsapi.org/v2/top-headlines?country=in&apiKey=925d1ff1422242c28c0c441655c01437";

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
    fetchData(API_1);
  }, []);

  return (
    <>
      <News>
        <HeadlineTag title="All News" />

        <div class="container mt-5">
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              {/* <!-- First Section --> */}
              <div class="carousel-item active">
                <button className='btn my-4'>
                  {data?.articles?.[2]?.source?.name ?? "Loading..."}
                </button>
                <div class="row">
                  <div class="col-4">
                    <Card description={data?.articles?.[1]?.description ?? "Loading..."}
                      name={data?.articles?.[1]?.title ?? "Loading..."}
                      img={data?.articles?.[1]?.urlToImage ?? "Loading..."}
                      link={data?.articles?.[1]?.url ?? "Loading"} />
                  </div>
                  <div class="col-4">
                    <Card description={data?.articles?.[5]?.description ?? "Loading..."}
                      name={data?.articles?.[5]?.title ?? "Loading..."}
                      img={data?.articles?.[5]?.urlToImage ?? "Loading..."}
                      link={data?.articles?.[5]?.url ?? "Loading"} />

                  </div>
                  <div class="col-4">
                    <Card description={data?.articles?.[3]?.description ?? "Loading..."}
                      name={data?.articles?.[3]?.title ?? "Loading..."}
                      img={data?.articles?.[3]?.urlToImage ?? "Loading..."}
                      link={data?.articles?.[3]?.url ?? "Loading"} />
                  </div>
                </div>
              </div>
              {/* <!-- Second Section --> */}
              <div class="carousel-item">
                <button className='btn my-4'>
                  {data?.articles?.[6]?.source?.name ?? "Loading..."}
                </button>
                <div class="row">
                  <div class="col-4">
                    <Card description={data?.articles?.[6]?.description ?? "Loading..."}
                      name={data?.articles?.[6]?.title ?? "Loading..."}
                      img={data?.articles?.[6]?.urlToImage ?? "Loading..."}
                      link={data?.articles?.[6]?.url ?? "Loading"} />
                  </div>
                  <div class="col-4">
                    <Card description={data?.articles?.[11]?.description ?? "Loading..."}
                      name={data?.articles?.[11]?.title ?? "Loading..."}
                      img={data?.articles?.[11]?.urlToImage ?? "Loading..."}
                      link={data?.articles?.[11]?.url ?? "Loading"} />

                  </div>
                  <div class="col-4">
                    <Card description={data?.articles?.[5]?.description ?? "Loading..."}
                      name={data?.articles?.[5]?.title ?? "Loading..."}
                      img={data?.articles?.[5]?.urlToImage ?? "Loading..."}
                      link={data?.articles?.[5]?.url ?? "Loading"} />

                  </div>
                </div>
              </div>
              {/* <!-- Third Section --> */}
              <div class="carousel-item">
                <button className='btn my-4'>
                  {data?.articles?.[12]?.source?.name ?? "Loading..."}
                </button>
                <div class="row">
                  <div class="col-4">
                    <Card description={data?.articles?.[18]?.description ?? "Loading..."}
                      name={data?.articles?.[18]?.title ?? "Loading..."}
                      img={data?.articles?.[18]?.urlToImage ?? "Loading..."}
                      link={data?.articles?.[18]?.url ?? "Loading"} />
                  </div>
                  <div class="col-4">
                    <Card description={data?.articles?.[17]?.description ?? "Loading..."}
                      name={data?.articles?.[17]?.title ?? "Loading..."}
                      img={data?.articles?.[17]?.urlToImage ?? "Loading..."}
                      link={data?.articles?.[17]?.url ?? "Loading"} />
                  </div>
                  <div class="col-4">
                    <Card description={data?.articles?.[14]?.description ?? "Loading..."}
                      name={data?.articles?.[14]?.title ?? "Loading..."}
                      img={data?.articles?.[14]?.urlToImage ?? "Loading..."}
                      link={data?.articles?.[14]?.url ?? "Loading"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </News>

    </>
  )
}

export default AllNews

const News = styled.main`

position: relative;
margin-top: 18rem;

.btn{
    width: auto;
    min-width: 12.6875rem;
    height: 3.8125rem;
    background: #9747FF;
    color: #FFF;
    font-family: Montserrat Subrayada;
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.1375rem;
    box-shadow: 2px 3px 0px 0px rgba(0, 0, 0, 0.70);
}

@media screen and (max-width: 720px){
  .carousel-item{
    width: 100%;
    height: 120vh;
    position: relative;
    .row{
      display: grid;grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1rem;
    }
    .card-body{
      width: 100%;
      padding-top: 1.6rem;
      .card-title a{
        text-align: center;
        padding: 0 2rem;
        font-size: 1rem;
        font-style: normal;
      }
    }
  }

}

`