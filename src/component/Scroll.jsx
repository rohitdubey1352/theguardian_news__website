import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <ScrollTo>
                <button className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop} >
                    <img src="/src/assets/Image/go.svg" alt="topToBottom" />
                </button>
            </ScrollTo>
        </>
    );
};

export default Scroll;

const ScrollTo = styled.main`

.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    background-color: #232323;
    color: #fff;
    border: none;
    padding: 15px 15px;
    cursor: pointer;
    border-radius: 2rem;
    outline: none;
    transform: rotate(-45deg);
  }
  
  .scroll-to-top.visible {
    display: block;
  }
  

`