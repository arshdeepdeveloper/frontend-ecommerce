import React, { useState } from 'react'
import Input from '../Components/FormElements/Input'
import Form from '../Components/FormElements/Form';
import Button from '../Components/FormElements/Button';
 

const LoginSignup = () => {
  const [email,setEmail] = useState("demo@gmail.com");
  const [password,setPassword] = useState("123456");
  const handleLogin = (e)=>{
  const formData  = new FormData(e.target);
  const data = Object.fromEntries(formData.entries()); // converts it into an object
  console.log('Form Data:', data);
  }
  return (
    <div className="container">
      <Form onSubmit={handleLogin}> 
          <Input 
            className = "inputfield"
            name="email"
            label="Email"
            id="login-email"
            type="email"
            placeholder="demo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <Input 
            className = "inputfield"
            name = "password"
            label="Password"
            id="login-email"
            type="password"
            placeholder="*****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit"
          className="primary-login-button" 
          text="Login in"/> 
      </Form>
    </div>
  )
}

export default LoginSignup
