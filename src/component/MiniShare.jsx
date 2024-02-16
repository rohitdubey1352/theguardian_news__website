import React from 'react'
import styled from 'styled-components'

const MiniShare = () => {
  return (
    <>
    
    <MiShare>
        <div className="container shareit mt-2">
            <div className="profile">
                <img src="\src\assets\Image\profile.png" alt="profile" />
                <p>
                    by Author - October, 2023
                </p>
            </div>
            <div className="iconsGroup">
                <div className="icons">
                    <img src="\src\assets\Image\like.png" alt="like" />
                    <p>30k+</p>
                </div>
                <div className="icons">
                    <img src="\src\assets\Image\share.png" alt="share" />
                    <p>10k+</p>
                </div>
                <div className="icons">
                    <img src="\src\assets\Image\chat.png" alt="chat" />
                    <p>1k+</p>
                </div>
                <div className="icons">
                    <img src="\src\assets\Image\download (2).png" alt="chat" />
                    
                </div>
            </div>
        </div>
    </MiShare>

    </>
  )
}

export default MiniShare

const MiShare = styled.main`
    margin: 0.2rem;
    position: relative;
    .container{
        position: relative;
        width: 100%;
        max-width: 100%;
        max-height: 5vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .profile{
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                font-size: 0.725rem;
                margin-left: .6rem;
            }        
        }
        .iconsGroup{
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            .icons img{
                width: 1.4rem;
                height: 1.4rem;
            }
        }
    }

`
