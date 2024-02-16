import React from 'react'
import styled from 'styled-components'
import HeadlineTag from '../HeadlineTag';
import RecCarousel from '../RecCarousel';

const Recommendation = () => {
  return (
    <>
      <Recomm>
        <HeadlineTag title={'Recommendation News'} />
        <div className="carousel my-5">
          <RecCarousel />
        </div>
      </Recomm>
    </>
  )
}

export default Recommendation;

const Recomm = styled.main`

position: relative;
margin-top: 15rem;

@media screen and (max-width: 720px){
.Headline_tag h1{
    font-size: 1.7rem;
    font-weight: 700;
    margin-right: 0;
}
.Headline_tag h1::before{
  height: .8rem;
  bottom: -.5rem;
}


}
`