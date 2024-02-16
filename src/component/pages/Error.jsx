import React from 'react'
import styled from 'styled-components'

const Error = () => {
  return (
    <>
        <ErrorPage>
            <div className="box">
                <h2>
                    404: Page not found!
                </h2>
            </div>
        </ErrorPage>
    </>
  )
}

export default Error

const ErrorPage = styled.main`
position: relative;
height: 100%!important;

.box{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 12rem;
    h2{
        font-size: 4.5rem;
        letter-spacing: .2rem;
        font-family: Montserrat;
        font-weight: 900;
        line-height: 155%;
    }
}


`