import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import HeadlineTag from '../component/HeadlineTag'
import { Link } from 'react-router-dom'
import WeatherGrid from './WeatherGrid';



const Stories = () => {

    return (
        <>
            <Story>
                <HeadlineTag title="Weather Update's" />
                <div className="container">

                    <div className="grid">
                        <WeatherGrid />
                    </div>

                    <Link to="/contact">
                        <button className='readmore'>
                            Read More
                        </button>
                    </Link>

                </div>

            </Story>


        </>
    )
}

export default Stories

const Story = styled.main`
position: relative;
margin-top: 8rem;


.container{
    margin: 5rem 0;
}

`