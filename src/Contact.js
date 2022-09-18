import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [data, setData] = useState({
      fullname: "",
      phone: "",
      email: "",
      msg: "",
  })
  const InputEvent = (event)=>{
     const {name, value} = event.target;
     setData((preVal)=>{
      return {...preVal, [name]:value};
     })
     console.log(data)
  }
  const formSubmit = (e)=>{
    e.preventDefault();
    alert(`My name is ${data.fullname} , phone is ${data.phone}, email is ${data.email} and I want to say ${data.msg}`, )
  }
  return (
    <>
    <div className = "my-5">
      <h1 className = "text-center">Contact Us</h1>
    </div>
    <div className= "container contact_div">
      <div className = "row">
        <div className = "col-md-6 col-10 max-auto">
            <form onSubmit = {formSubmit}>
              <div class="mb-3">
                <label for="fullname" class="form-label">Name</label>
                <input 
                   type="text" 
                   class="form-control" 
                   id="fullname"
                   name = "fullname"
                   value = {data.fullname}
                   onChange = {InputEvent}
                   placeholder="Enter your name"/>
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input 
                    type="number" 
                    class="form-control" 
                    id="phone"
                    name = "phone"
                    value = {data.phone}
                    onChange = {InputEvent} 
                    placeholder="Enter your phone number"/>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input 
                    type="email" 
                    class="form-control" 
                    id="email"
                    name = "email"
                    value = {data.email}
                    onChange = {InputEvent} 
                    placeholder="Enter your email"/>
              </div>
              <div class="mb-3">
                <label for="msg" class="form-label">Message</label>
                <textarea 
                   class="form-control" 
                   id="msg" 
                   name = "msg"
                   value = {data.msg}
                   onChange = {InputEvent}
                   rows="3">                    
                </textarea>
              </div>
              <div class="col-12">
                  <button 
                     class="btn btn-outline-primary" 
                     type="submit">Submit form</button>
              </div>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact