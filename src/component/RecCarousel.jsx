import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CarouselCard from './CarouselCard'

const RecCarousel = () => {
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
  }, []);

  return (
    <>
      <Carousels>

        <div class="container mt-5">
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              {/* <!-- First Section --> */}
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-4">
                    <CarouselCard
                      link={data?.articles?.[1]?.url ?? "Loading..."}
                      tag={data?.articles?.[1]?.source?.name ?? "Loading..."}
                      title={data?.articles?.[1]?.title ?? "Loading..."}
                      img={data?.articles?.[1]?.urlToImage ?? "Loading..."}
                    />
                  </div>
                  <div class="col-4">
                    <CarouselCard
                      link={data?.articles?.[4]?.url ?? "Loading..."}
                      tag={data?.articles?.[4]?.source?.name ?? "Loading..."}
                      title={data?.articles?.[4]?.title ?? "Loading..."}
                      img={data?.articles?.[4].urlToImage ?? "Loading..."}
                    />
                  </div>
                  <div class="col-4">
                    <CarouselCard
                      link={data?.articles?.[3]?.url ?? "Loading..."}
                      tag={data?.articles?.[3]?.source?.name ?? "Loading..."}
                      title={data?.articles?.[3]?.title ?? "Loading..."}
                      img={data?.articles?.[3].urlToImage ?? "Loading..."}
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Second Section --> */}
              <div class="carousel-item">
                <div class="row">
                  <div class="col-4">
                    <CarouselCard
                      link={data?.articles?.[10]?.url ?? "Loading..."}
                      tag={data?.articles?.[10]?.source?.name ?? "Loading..."}
                      title={data?.articles?.[10]?.title ?? "Loading..."}
                      img={data?.articles?.[10].urlToImage ?? "Loading..."}
                    />
                  </div>
                  <div class="col-4">
                    <CarouselCard
                      link={data?.articles?.[5]?.url ?? "Loading..."}
                      tag={data?.articles?.[5]?.source?.name ?? "Loading..."}
                      title={data?.articles?.[5]?.title ?? "Loading..."}
                      img={data?.articles?.[5].urlToImage ?? "Loading..."}
                    />
                  </div>
                  <div class="col-4">
                    <CarouselCard
                      link={data?.articles?.[6]?.url ?? "Loading..."}
                      tag={data?.articles?.[6]?.source?.name ?? "Loading..."}
                      title={data?.articles?.[6]?.title ?? "Loading..."}
                      img={data?.articles?.[6].urlToImage ?? "Loading..."}
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Third Section --> */}
              <div class="carousel-item">
                <div class="row">
                  <div class="col-4">
                    <CarouselCard
                      link={data?.articles?.[7]?.url ?? "Loading..."}
                      tag={data?.articles?.[7]?.source?.name ?? "Loading..."}
                      title={data?.articles?.[7]?.title ?? "Loading..."}
                      img={data?.articles?.[7].urlToImage ?? "Loading..."}
                    />
                  </div>
                  <div class="col-4">
                    <CarouselCard
                      link={data?.articles?.[11]?.url ?? "Loading..."}
                      tag={data?.articles?.[11]?.source?.name ?? "Loading..."}
                      title={data?.articles?.[11]?.title ?? "Loading..."}
                      img={data?.articles?.[11].urlToImage ?? "Loading..."}
                    />
                  </div>
                  <div class="col-4">
                    <CarouselCard
                      link={data?.articles?.[12]?.url ?? "Loading..."}
                      tag={data?.articles?.[12]?.source?.name ?? "Loading..."}
                      title={data?.articles?.[12]?.title ?? "Loading..."}
                      img={data?.articles?.[12].urlToImage ?? "Loading..."}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </Carousels>

    </>
  )
}

export default RecCarousel;

const Carousels = styled.main`
position: relative;
width: 100%;
.carousel-inner{
  height: 100%;
  width: 100%;
}
.carousel-control-prev{
  margin-left: 80%;
}
.carousel-control-next, .carousel-control-prev {
  top: -123%;
  justify-content: flex-end;
  padding: 1rem 2rem 0 0;
}
@media screen and (max-width: 720px){
  .carousel-item{
    height: 92vh;
    position: relative;
    .row{
      display: grid;grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1rem;
      
    }
    .card-body{
      // color: #fff;
      width: 90%;
      padding-top: 1.6rem;
      .card-title a{
        text-align: center;
        padding: 0 2rem;
        margin-left: -3rem;
        font-size: 1rem;
        font-style: normal;
      }
    }
  }

}
`