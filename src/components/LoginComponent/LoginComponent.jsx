import React, { useState } from 'react'
import {Link} from 'react-router-dom'
// import { Modal } from 'bootstrap'



const LoginComponent = () => {

    const [registernumber, setRegisternumber] = useState('')
    const [password, setPassword] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);

    const registernumberHandler = (event) =>{
      setRegisternumber(event.target.value)
      }
    
    const passwordHandler = (event) =>{
        setPassword(event.target.value)
      }
    
    const formSubmitHandler = (event) =>{
        event.preventDefault()
        setIsModalOpen(true);
      }
    
      const closeModal = () => {
        setIsModalOpen(false);
    }

  return (
    <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={formSubmitHandler}>
        <div className='mb-3'>
            <label>Register Number</label>
            <input
                type='text'
                className='form-control'
                placeholder='Enter your register number'
                value={registernumber}
                onChange={registernumberHandler}
                required
            />
        </div>

        <div className='mb-3'>
            <label>Password</label>
            <input
                type='password'
                className='form-control'
                placeholder='Enter your password'
                value={password}
                onChange={passwordHandler}
                required
            />
        </div>

        <div className='mb-3'>
          <div className='custom-checkbox custom-control'>
            <input 
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
              />

            <label className='custom-control-label' htmlFor='customCheck1'>
              Remember me?
            </label>
          </div>
          <div className='d-grid'>
            <button type='submit'  className='btn btn-primary' >Submit</button>
          </div>

{isModalOpen && (
                <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Successfully registered</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

          <p className='forgot-password text-right'>
            Forgot <Link to='/forgotpassword'>Password?</Link>
          </p>
          <br></br>
          <h5 className='text-center'>
          Registered? <Link to='/enrollment'>Enroll here!</Link>
          </h5>
        </div>

      </form>
    </React.Fragment>
  )
}

export default LoginComponent