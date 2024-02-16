import React from 'react'
import styled from 'styled-components'

const LiveCarsl = () => {
    return (
        <>
            <LiveCars>

                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-4">
                            <div class="card">
                                <div class="card-body">
                                    <div className="topSection">
                                        <h2>IND</h2>
                                        <p>MATCH 3, 28 NOV 23</p>
                                        <h2 className='AUS'>AUS</h2>
                                    </div>
                                    <div className="bottomSection">
                                        <div className="IND">
                                            <img src="/src/assets/Image/IND.png" alt="ind" />
                                            <p>222/3</p>
                                        </div>
                                        <img src="/src/assets/Image/Sync.png" alt="sync" />
                                        <div className="AUS_div">
                                            <img src="https://media.istockphoto.com/photos/australian-flag-picture-id178632450?k=20&m=178632450&s=612x612&w=0&h=DvLVvMO7-2WgK9jmmpD11Q7xn6hmSevCRSrvpwsZE68=" alt="AUS" />
                                            <p>225/5</p>
                                        </div>
                                    </div>
                                    <div className="lastSection">
                                        <p>AUS won by 5 wickets</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card">
                                <div class="card-body">
                                    <div className="topSection">
                                        <h2>IND</h2>
                                        <p>MATCH 4, 1 DEC 23</p>
                                        <h2 className='AUS'>AUS</h2>
                                    </div>
                                    <div className="bottomSection">
                                        <div className="IND">
                                            <img src="/src/assets/Image/IND.png" alt="ind" />
                                            <p>174/9</p>
                                        </div>
                                        <img src="/src/assets/Image/Sync.png" alt="sync" />
                                        <div className="AUS_div">
                                            <img src="https://media.istockphoto.com/photos/australian-flag-picture-id178632450?k=20&m=178632450&s=612x612&w=0&h=DvLVvMO7-2WgK9jmmpD11Q7xn6hmSevCRSrvpwsZE68=" alt="AUS" />
                                            <p>154/7</p>

                                        </div>
                                    </div>
                                    <div className="lastSection">
                                        <p>IND won by 20 runs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="card">
                                <div class="card-body">
                                    <div className="topSection">
                                        <h2>IND</h2>
                                        <p>MATCH 5, 3 DEC 23</p>
                                        <h2 className='AUS'>AUS</h2>
                                    </div>
                                    <div className="bottomSection">
                                        <div className="IND">
                                            <img src="/src/assets/Image/IND.png" alt="ind" />
                                            <p>160/8</p>
                                        </div>
                                        <img src="/src/assets/Image/Sync.png" alt="sync" />
                                        <div className="AUS_div">
                                            <img src="https://media.istockphoto.com/photos/australian-flag-picture-id178632450?k=20&m=178632450&s=612x612&w=0&h=DvLVvMO7-2WgK9jmmpD11Q7xn6hmSevCRSrvpwsZE68=" alt="AUS" />
                                            <p>154/8</p>
                                        </div>
                                    </div>
                                    <div className="lastSection">
                                        <p>IND won by 6 runs</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </LiveCars>

        </>
    )
}

export default LiveCarsl

const LiveCars = styled.main`
.card-body{
    position: relative;
    gap: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
}
.topSection, .bottomSection{
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: left;
}
.topSection{
    h2{
        color: #FFF;
        font-family: Montserrat;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 136.5%; /* 1.53563rem */
        letter-spacing: 0.11813rem;
    }
    .AUS{
        margin-left: 4rem;
        p{
            color: #fff;
        }
    }
    p{
        color: #FFF;
        font-family: Montserrat;
        font-size: .6rem;
        font-style: normal;
        text-align: center;
        font-weight: 600;
        line-height: 136.5%; /* 1.02375rem */
        letter-spacing: 0.07125rem;
    }
}
.bottomSection{
    gap: 3rem;
    place-items: center;
    .IND{
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #fff;
        p{
            font-family: Montserrat;
            font-size: 1.25rem;
            font-weight: 700;
            margin-left: .4rem;
        }
    }
}
.lastSection{
    text-align: center;
    p{
        color: #FFF;
        font-family: Montserrat;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.005rem;
    }
}
.AUS_div
{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: .6rem;
    img{
        width: 3.4rem;
        height: auto;
        border-radius: .4rem;
    }
    p{
        color: #fff;
        font-family: Montserrat;
        font-size: 1rem;
        font-weight: 600;
    }
}

`