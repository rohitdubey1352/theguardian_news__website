import React from 'react'
import styled from 'styled-components'
import search from '../assets/Image/Search.png'
import Navbar from './Navbar'
import Weather from '../component/Weather'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const current = new Date();
    const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const day = dayList[current.getDay()];
    const time = current.toLocaleString();

    return (
        <>
            <Headers>

                <div className="top_Heading">
                    <p>
                        {day}, {time}
                    </p>
                    <div className="wheather">
                        <picture>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6.5 20C4.98 20 3.68333 19.4767 2.61 18.43C1.53667 17.3767 1 16.0933 1 14.58C1 13.28 1.39 12.12 2.17 11.1C2.95667 10.08 3.98333 9.43 5.25 9.15C5.67 7.61667 6.50333 6.37667 7.75 5.43C9.00333 4.47667 10.42 4 12 4C13.9533 4 15.6067 4.68 16.96 6.04C18.32 7.39333 19 9.04667 19 11C20.1533 11.1333 21.1067 11.6333 21.86 12.5C22.62 13.3533 23 14.3533 23 15.5C23 16.7533 22.5633 17.8167 21.69 18.69C20.8167 19.5633 19.7533 20 18.5 20M6.5 18H18.5C19.2 18 19.79 17.7567 20.27 17.27C20.7567 16.79 21 16.2 21 15.5C21 14.8 20.7567 14.21 20.27 13.73C19.79 13.2433 19.2 13 18.5 13H17V11C17 9.62 16.5133 8.44 15.54 7.46C14.5667 6.48667 13.3867 6 12 6C10.62 6 9.44 6.48667 8.46 7.46C7.48667 8.44 7 9.62 7 11H6.5C5.53333 11 4.71 11.3433 4.03 12.03C3.34333 12.71 3 13.5333 3 14.5C3 15.4667 3.34333 16.3 4.03 17C4.71 17.6667 5.53333 18 6.5 18Z" fill="#888888" />
                            </svg>
                        </picture>
                        <Weather />
                    </div>
                </div>

                <div className="main_title">

                    <div className="menuIcon">
                        <svg className='mIcon' xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                            <path d="M1 1H21" stroke="#2B2D42" stroke-width="2" stroke-linecap="round" />
                            <path d="M1 7H21" stroke="#2B2D42" stroke-width="2" stroke-linecap="round" />
                            <path d="M1 13H21" stroke="#2B2D42" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>

                    <div className="searchBar">
                        <input type="text" name='search' placeholder='search' />
                        <img src={search} alt="icon" />
                    </div>

                    <div className="Hero_Title">
                        <NavLink to="/">
                            <h1>
                                The<br />Guardian.
                            </h1>
                        </NavLink>
                    </div>

                    <div className="buttons">
                        <div className="btn sign">Admin</div>
                        {/* <div className="btn sub">Admin</div> */}
                    </div>

                </div>

                <Navbar />

            </Headers>
        </>
    )
}

export default Header

const Headers = styled.header`
    width: 77.25rem;
    margin: auto;
    .main_title{
        width: 100%;
        margin-top: 1.88rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .buttons{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.6rem;
            .sign{
                font-weight: 400;
                color: #2B2D42;
                font-size: .92rem;
            }
            .sign:hover{
                background: #2B2D42;
                color: #fff;
            }
            .sub{
                color: #FFF;
                background: #2B2D42;
                box-shadow: 4px 4px 0px 0px #888;
                color: #fff;
            }
            .btn{
                width: 7.5rem;
                height: 2.6875rem;
                // font-size: 0.7rem;
                font-family: Montserrat;
                // font-weight: 500;
                line-height: 61.5%; 
                letter-spacing: 0.0375rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 3.125rem;
                border: 1px solid #2B2D42;
            }
        }
        
        .Hero_Title h1{
            color: #2B2D42;
            text-align: center;
            font-family: Playfair Display;
            font-size: 3rem;
            font-weight: 900;
            line-height: 84.5%;
            margin-left: -4rem;
            letter-spacing: 0.06rem;
        }
        .searchBar{
            position: relative;
            width: 12rem;
            height: 2.25rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 1.125rem;
            border: 1px solid #797B8F;
            margin-left: -12rem;
            padding: 0.5rem;
            img{
                margin-right: .4rem;
                cursor: pointer;
            }
            input{
                background: transparent;
                border: none;
                outline: none;
                width: 75%;
            }
            input::placeholder{
                color: #797B8F;
                font-family: Montserrat;
                font-size: .8rem;
                font-weight: 500;
                background: transparent;
                line-height: 61.5%;
                letter-spacing: 0.0375rem;
            }
        }
    }
    
    .top_Heading{
        position: relative;
        width: 100%;
        margin-top: .5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            color: #000;
            font-family: DM Serif Display;
            font-size: .88rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.01875rem;
        }
        .wheather{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
        }
        .menuIcon{
            position: relative;
            width: 1.25rem;
            height: 0.75rem;
        }
    }
    .top_Heading::before{
        content: '';
        position: absolute;
        width: 77.25rem;
        height: 0.12rem;
        border-radius: 3.125rem;
        background: #D0D1DB;
        top: 2.3rem;
    }

    @media screen and (max-width: 720px) {
        width: 100%;
        .Hero_Title h1{
            margin: 1rem -4.5rem 1rem 0;
        }
        .main_title{
            flex-direction: column;
        }
        .searchBar{
            margin-left: 0!important;
        }
        .top_Heading{
            margin-top: 0;
            p{
                font-size: .74rem;
                letter-spacing: 0.01rem;
            }
            .wheather{
                gap: .2rem;
            }
        }
        .top_Heading::before{
            width: 100%;
        }
    }

`