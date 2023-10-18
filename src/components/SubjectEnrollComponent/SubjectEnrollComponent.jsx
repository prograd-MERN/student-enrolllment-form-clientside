import React, { useState } from 'react'

const SubjectEnrollComponent = () => {
    const [Name, setName] = useState('')
    const [SubjectOne, setSubjectOne] = useState('')
    const [SubjectTwo, setSubjectTwo] = useState('')
    const [SubjectThree, setSubjectThree] = useState('')

    const NameHandler = (event) => {
        setName(event.target.value)
    }

    const SubjectOneHandler = (event) => {
        setSubjectOne(event.target.value)
    }
    
    const SubjectTwoHandler = (event) => {
        setSubjectTwo(event.target.value)
    }
    const SubjectThreeHandler = (event) => {
        setSubjectThree(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        console.log(Name,SubjectOne,SubjectTwo,SubjectThree)
    }

  return (
    <form onSubmit={formSubmitHandler} >
        <h1>Enrollment</h1>

        <div className='mb-3'>
            <label>Name</label>
            <input 
                type='text'
                className='form-control'
                placeholder='Enter your name'
                value={Name}
                onChange={NameHandler}
                required
            />
        </div>

       <div className='mb-3'>
       <label>Select Subject</label>
       <br></br><br></br>
       <label>Subject 01 :</label>
       <select value={SubjectOne} onChange={SubjectOneHandler}>
        <option id='none' name= 'none'>
        select 
        </option>
        <option id='MERN' name='MERN'>
            MERN
        </option>
        <option id='MEAN' name='MEAN'>
            MEAN
        </option>
        <option id='JAVA' name='JAVA'>
            JAVA
        </option>
       </select>
       </div>

       <div className='mb-3'>
       <label>Subject 02 :</label>
       <select value={SubjectTwo} onChange={SubjectTwoHandler}>
       <option id='none' name= 'none'>
        select 
        </option>
        <option id='MERN' name='MERN'>
            TOC
        </option>
        <option id='MEAN' name='MEAN'>
            DPSD
        </option>
        <option id='JAVA' name='JAVA'>
            VCC
        </option>
       </select>
       </div>

       <div className='mb-3'>
       <label>Subject 03 :</label>
       <select value={SubjectThree} onChange={SubjectThreeHandler}>
       <option id='none' name= 'none'>
        select 
        </option>
        <option id='MERN' name='MERN'>
            AI
        </option>
        <option id='MEAN' name='MEAN'>
            CRYPTO
        </option>
        <option id='JAVA' name='JAVA'>
            MAD
        </option>
       </select>
       </div>

        <div className='d-grid'>
            <button type='submit' className='btn btn-primary' >Submit</button>
        </div>
        {/* <p className='forgot-password text-right'>
            Already registered, <a href='/login'>Sign in here?</a>
        </p> */}

      </form>
  )
}

export default SubjectEnrollComponent