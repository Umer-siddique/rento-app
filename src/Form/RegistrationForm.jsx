import React, { useState } from 'react';
import './form.css';

const RegistrationForm = () => {
     
    const [formData, setFormData]=useState({
        fullname:"",
        email:"",
        password:"",
        phone:""
    });

    const [data,setData]=useState([]);


    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({...formData,[name]:value});
    }

    const submitForm=(e)=>{
         e.preventDefault();
         const newData={...formData, id: new Date().getTime.toString()}
         setData([...data,newData]);
         setFormData({fullname:"",email:"",password:"",phone:""})
    }

    return (
        <>
                  <h1>Registration Form</h1>
            <form action="" onSubmit={submitForm}>
            
                <div className="styleDiv">

                    <label htmlFor="Name">Name:</label>
                    <br />
                    <input autoComplete="off" value={formData.fullname} type="text" name="fullname" onChange={handleInput} placeholder="Enter your name..." />
                </div>
                <div className="styleDiv">

                    <label htmlFor="Email">Email:</label>
                    <br />
                    <input autoComplete="off" value={formData.email} type="text" name="email" onChange={handleInput} placeholder="Enter your email..." />
                </div>
                <div className="styleDiv">

                    <label htmlFor="password">password:</label>
                    <br />
                    <input autoComplete="off" value={formData.password} type="password" name="password" onChange={handleInput} placeholder="Enter your password..." />
                </div>
                <div className="styleDiv">

                    <label htmlFor="phone">phone:</label>
                    <br />
                    <input autoComplete="off" value={formData.phone} type="Number" name="phone" onChange={handleInput} placeholder="Enter your phone number..." />
                </div>

                 <div className='styleDiv'>
                  <button type="submit">Submit</button>
                </div>
            </form>

            <div>
                {
                    data.map((currElem)=>{
                       const {fullname,email,password,phone,id}=currElem;
                        return( <div className="showData_Div">
                             <p>{fullname}</p>
                             <p>{email}</p>
                             <p>{password}</p>
                             <p>{phone}</p>
                        </div>
                        )
                    })
                }
            </div>

        </>
    )
}
export default RegistrationForm;