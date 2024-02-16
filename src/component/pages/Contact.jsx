import React from 'react'
import styled from 'styled-components'
import FormSubmission from './FormSubmission'

const Contact = () => {
  return (
    <>
      <ContactUs>

        <div className="heading">
          <h1>
            Contact Us
          </h1>
        </div>

        <div className="container">

          {/* Contact us Section */}
          <div className="grid grid_two_column">
            <div className="box">
              <h5>Phone</h5>
              <a href='tel:1234567894'>(+91) 1234567894</a>
            </div>
            <div className="box">
              <h5>Email</h5>
              <a href='mailto:theguardian123@gmail.com'>theguardian123@gmail.com</a>
            </div>
          </div>
          <div className="grid grid_two_column">
            <div className="box2">
              <h5>Address</h5>
              <a href='https://www.google.com/maps?ll=28.562484,77.372632&z=14&t=m&hl=en&gl=IN&mapclient=embed&q=Sector+49+Noida,+Uttar+Pradesh'>Sector 49, Noida, India</a>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.969498621354!2d77.36233190761544!3d28.56248371124573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f25ac323b5%3A0xd496afa2bb8dd672!2sSector%2049%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1696663997669!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>

            </div>
          </div>

          {/* Form seciton */}
          <div className="form">

            <div className="grid grid_two_column">
              <div className="form_div">
                <h1>Fill the form <br /> to <span>contact us.</span></h1>

                <form action="https://formspree.io/f/myyqqvvr" method='POST'>
                  <input type="text" name="fullname" placeholder='ex. Rohit Dubey' required />
                  <input type="number" name="phone" placeholder='ex. +91 1234567895' required />
                  <input type="email" name="email" placeholder='ex. theguardian123@gmail.com' required />
                  <textarea name="messageform" cols="30" rows="5" placeholder="Write your message here..." required></textarea>

                  <button className='btn' type='submit'>Send Message</button>

                </form>

              </div>
              <div className="message">
                <h2>Need specific help?</h2>
                <p>If you don't want to contact us for a project, you may download my Brochure and understand our terms & conditions.</p>
                <a target='_blank' href="/" className='resume'>Download Link</a>
              </div>

            </div>

          </div>

          {/* News submission section */}
          <div className="heading my-5">
            <h1>
              News Submission
            </h1>
          </div>
          <FormSubmission />

        </div>

      </ContactUs>
    </>
  )
}

export default Contact

const ContactUs = styled.main`
position: relative;
padding: 3rem;
// height: 100%;
height: 150rem!important;
overflow-y: hidden;
  .container {
    width: 100%;
    // max-width: 120rem;
    margin: auto;
  }
  .sub{
    margin-top: 10rem;
  }
  .heading {
    width: 34%;
    height: auto;
    margin: auto;
    position: relative;
    font-size: 2rem;
    font-family: Playfair Display;
    padding: .5rem .6rem;
    text-align: center;
    color: #232323;
    background: #fff;
    letter-spacing: .1rem;
  }
  
  .heading::after {
    content: '';
    position: absolute;
    top: -1.2rem;
    left: -1.2rem;
    width: 100%;
    height: 100%;
    background: #232323;
    border: 2px solid #fff;
    z-index: -1;
  }
  .grid_two_column{
    grid-template-columns: repeat(2,1fr);
  }
  .grid{
    display: grid;
    gap: 6rem;
    place-items: center;
    margin: 4rem 0;
  }
  .box:nth-child(1){
    background: #ffedcb;
    svg{
    color: #dfbf06;
    }
  }
  .box:nth-child(2){
    color: #fff;
    background: #232323;
    a{
      color: #fff;
    }
    svg{
      color: #fff;
    }
  }
  .map iframe{
    width: 45vw;
    height: 26rem;
    margin-left: -7rem;
  }
  .box2{
    position: relative;
    width: 24.6rem;
    height: 26rem;
    color: #fff;
    background: #f1a93e;
    margin-left: -2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    a{
      color: #000;
    }
  }

  .box{
    position: relative;
    width: 30rem;
    height: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // margin-left: -1.6rem;
    a{
      color: #000;
    }
  }
  svg{
    font-size: 1.6rem;
    margin: 1rem;
  }
  h5{
    font-family: Playfair Display;
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: .1rem;
    margin: .5rem;
  }
  a{
    text-decoration: none;
    margin: 1rem;
    font-weight: 400;
    font-family: 'Montserrat';
  }

  .form .grid {
    text-align: left;
    padding: 2rem 2.6rem;
  }
  
  .form_div ,.formSec{
    h1{
      color: #232323;
      font-size: 4rem;
      margin: 2rem 0;
      letter-spacing: 2px;
      span{
        color: #e9b200;
      }
    }
  }

  form{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    .divider{
      display: flex;
      justify-content: flex-start;
      align-items: start;
      gap: 8rem;
      input{
        width: 100%;
      }
    }

    input, textarea{
      padding: .89rem .6rem;
      border: none;
      outline: none;
      background: transparent;
      border-bottom: .2rem solid #e9b200;
      color: #232323;
      letter-spacing: 1.4px;
      font-family: Arial, sans-serif;
      ::placeholder{
        outline: none;
        color: #23232390;
        letter-spacing: 1.6px;
      }
    }
    .btn{
      position: relative;
      cursor: pointer;
      letter-spacing: 2px;
      font-weight: 500;
      font-size: .9rem;
      border-radius: 0;
      width: 50%;
      padding: 1.4rem;
      background: wheat;
    }
    .btn::after{
      content: '';
      position: absolute;
      bottom: -.5rem;
      right: -.5rem;
      border: 2px solid #232323;
      background: transparent;
      width: 100%;
      height: 3rem;
      z-index: -1;
  }
    
  }

  // ........................................... //
  
  .message{
    position: relative;
    width: 80%;
    color: #232323;
    
    h2, p, a{
      margin: 2rem;
    }
    p{
      letter-spacing: .04rem;
      word-spacing: .14rem;
    }
    a{
      color: #232323;
      padding-bottom: .4rem;
      border-bottom: 2px solid #232323;
    }
  }

  @media screen and (max-width: 646px){
    .heading {
      font-size: .55rem;
    }
    .box{
      width: 22rem;
    }
    .box2{
      width: 22rem;
      margin-left: 0;
    }
    .map iframe{
      width: 90vw;
      margin-left: 0;
    }
    .form .grid {
      text-align: center;
      padding: 1rem 0;
      margin: auto;
    }
    .btn{
      width: 100%!important;
    }
    .form_div h1{
        color: #fff;
        font-size: 2rem;
        margin: 0;
        word-wrap: normal;
    }
    .message{
      width: 20rem;
    }
`;