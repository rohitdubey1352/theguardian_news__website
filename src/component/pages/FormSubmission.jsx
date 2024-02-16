import React from 'react'
import styled from 'styled-components'

const FormSubmission = () => {
  return (
    <>
        <FormSub>
            {/* form section */}
          <div className="formSec">
            <h1>Fill the form to submit your<span> News.</span></h1>

            <form action='https://formspree.io/f/mzbllwqp' method='POST'>
              <div className="divider">
                <input type="text" name="fullname" placeholder='Full Name' required />
                <input type="email" name="email" placeholder='Email ID' required />
                <input type="number" name="phone" placeholder='Phone Number' required />
                <input type="date" name="date" required />
              </div>
              <div className="divider">
                <input type="text" name="fullname" placeholder='Category' required />
                <input type="text" name="url" placeholder='Image/Video URL' required />
              </div>
              <textarea name="messageform" cols="30" rows="5" placeholder="Write your news here..." required></textarea>
              <button className='btn' type='submit'>Send Report</button>

            </form>

          </div>
            
        </FormSub>    
    
    </>
  )
}

export default FormSubmission

const FormSub = styled.main`



`