import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import HeadTag from './HeadlineTag'

const Socialmedia = () => {
  const [memes, setMemes] = useState([]);
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://programming-memes-images.p.rapidapi.com/v1/memes', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'bf99a2a22amshfcd7cae92ce7c1ep1a23dbjsne5afb00a2ff2',
            'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMemes(data);
        setVotes(Array(data.length).fill(0));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleVote = (index, type) => {
    const newVotes = [...votes];
    newVotes[index] = type === 'upvote' ? newVotes[index] + 1 : newVotes[index] - 1;
    setVotes(newVotes);
  };

  return (
    <>
      <MediaSection>

        <div className="socialMedia my-5">
          <HeadTag title="Programming Meme's" />
          <div className="my-5">
            <div className='grid'>
              {memes.map((meme, index) => (
                <div key={index}>
                  <img className='firstImg' src={meme.image} alt={`Meme ${index}`} />

                  <div className='voting'>
                    <button className='btn' onClick={() => handleVote(index, 'upvote')}>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5ElEQVR4nO2ZO0scURSAj43uOauVJCmCRRARJKnyA1LlN6QLREjrHwiYVlE5Z+y0SWNjQkgXSCGBoHsO65JCbSxTRQufBCIWjoxrFGVd7z4ynAvzwe2m+L553DtzB6CgoKDrlKqzQ6hygCorpPwWvn8oQUyUlF+RSXo1VLbLVXkKsUAmyY0AkxSVf5dVHkEMkHL1dsBlxAy4p7ZApHzaMMBkA7xTqiQvGslfPgt/wDuk/O6uADTZBc+QJc/R5LjJFVgHr/StJsNovHOnfD3gE3ik/0fyIJvrm8rXZ6EJ8Mbg6vQAGdfuk8+Gv8Vs630vKn8LkSflX5CmPeCGNO1Bk6Ug+foMNAWeIOPXofIXt09l7llOYtJQ4PZxaPyzlYB2B9an5c+9KiNdDSDjkzwC6DpkDytzj7sYkJ88XQ1ejjoAVQ6jDqAGHkUA5fog837UVwBVVqIOIJU30QZg9jEUsj3jNYCMJ++V9xvAJ8FbMh4D0GQxSN5lgPJZvyVj0QagyddgeY8BZZWX0Qag8mbLn6GeAsh4vCV5TwEYunB5DaDQhavdgKZbiJ3L/y2vzTz8rwGk8sXFwtVuwECVR7P3867La4d/ckID/v3MI5WPqHzU+Vnn/Wzzt8/mn7QtX1BQUAB5cw5q35dnuK60pAAAAABJRU5ErkJggg==" />
                    </button>
                    <span>{votes[index]}</span>
                    <button className='btn1' onClick={() => handleVote(index, 'downvote')}>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1ElEQVR4nO2ZsUocURSGj02Q7M7/7yhRRLYQCYGQVHkAK5/BLhDB1hcQrIVUaa1tEgnpAil8gSSkSKqUVmqhJiKoew8emc0GRVf37roO58J8cLspvm/uzL27d0QqKiqGjuV5MwCHCmwpuWQio5ISCiwoaf9HIH+f5fkLSYVAvrsa0InYsVptUlJAya/XA9oRwFvxjk1NPQ5kq1uAAj/FO61GY66r/L8ZOBbvKLByawC5J55pka8CcHRbgJLfxCsGzAZy9w754h3YFI9Yvf6kWOvvlC9Gli2LN2x8PFPye0950txtZibySMkvMfIB2DaREfGCiYwEciNGvrMCrYkntNF4HSvfeXxeliPG7gI3rgN+9BMw6AjFsgx8tCx7OtSAQJ6WEaCXj+C+jY1ND28GSpTXy4j3aQcAf5IO0C4eVYCW+w4cpD0DwFbaAeSbZAMCuRd1POM1QIHVnvJeAwJ5Gn0k4zIAWI+S9xgQyHOr158nG6Dk52h5jwEBmE83APjV999QVwHkYl/yngJC7MblNUBjN65BA3ocId737p9YrTbxoAEKfHKxcQ0aYFn2rPh9/gB3f+deX3JiA9oRed5U8kMA/g5B/KA4/DVyZmD5ioqKCimbCyVhjMH/AWbCAAAAAElFTkSuQmCC" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className='readmore'>
            Read More
          </button>
        </div>

      </MediaSection>
    </>

  )
}

export default Socialmedia

const MediaSection = styled.main`

.grid{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2.4rem;
    place-news: start;
    img{
        width: 22.25rem;
        height: 25.0625rem;
    }
}
.voting{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1.2rem;
    place-items: center;
    padding-top: 1rem;
    .btn1{
        background: white;
        color: #fff;
        width: 3.4rem;
        height: 3.4rem;
        color: #fff;
        font-family: 'Montserrat';
        font-size: .7rem;
        font-weight: 500;
        border-radius: 3.125rem;
        border: none;
        img{
          width: 30px;
          height: 30px;
          transform: rotate(180deg);
          transition: all easy-in-out 0.3s;
        }
        
      }
    }
    .btn{
      background: white;
      color: #fff;
      width: 3.4rem;
      height: 3.4rem;
      font-family: 'Montserrat';
      font-size: .7rem;
      font-weight: 500;
      padding: 1rem;
      border-radius: 5rem;
      border: none;
      transition: all easy-in-out 0.3s;
      img{
        width: 30px;
        height: 30px;
      }
    }
}

`