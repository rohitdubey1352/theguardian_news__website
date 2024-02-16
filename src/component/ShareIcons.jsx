import React from 'react'
import styled from 'styled-components'

const ShareIcons = (props) => {
  return (
    <>
    
    <Share>
        <div className="container mt-4">
            <div className="profile">
                <img src="\src\assets\Image\profile.png" alt="profile" />
                <p>
                    by {props.author}
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
                    <img src="\src\assets\Image\download (1).png" alt="chat" />
                    
                </div>
            </div>
        </div>
    </Share>

    </>
  )
}

export default ShareIcons

const Share = styled.main`
    margin: .8rem 0;
    position: relative;
    .container{
        position: relative;
        // width: 55.4375rem;
        // max-width: 100%;
        max-height: 5vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .iconsGroup{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            .icons{
                img{
                    width: 35px;
                    height: 35px;
                }
                cursor: pointer;
            }
        }
    }
    
    .profile{
        position: relative;
        display: flex;
        align-items: center;
        gap: .8rem;
        p{
            color: #797B8F;
            font-family: Montserrat;
            font-size: 0.625rem
            font-weight: 600;
            letter-spacing: 0.0375rem;
        }
    }

`
