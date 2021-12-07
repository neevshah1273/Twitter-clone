import React,{useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Input,Form} from 'reactstrap';
import { signin, signup } from '../../actions/auth';
import './LogIn.css';


const styles = {
  statbtn: {
    backgroundColor: 'rgb(51, 89, 157)',
  },
  form: {
    textAlign: 'center',
  
  }
}

const LogIn = () =>{
  const [formData, setFormData] = useState({email: '', password: '' });
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
    
}
const switchMode = () => {
  setFormData({email: '', password: '' });
  setIsSignup((prevIsSignup) => !prevIsSignup);
};

  
const handleSubmit = (e) => {
  e.preventDefault();
  
  if (isSignup) {
      //console.log(formData);
      dispatch(signup(formData, navigate))
  } else {
      dispatch(signin(formData, navigate))
  }
  navigate('/Feed');
}



    return(
        <div>
            <Form style={styles.form} onSubmit={handleSubmit} className="fm">
          <h4>Welcome Back!</h4>
          <div className='form-group row'>
            <Input className='input' onChange={handleChange} type='text' placeholder='Email' name="email"/>
          </div>
          <div className='form-group row'>
            <Input className='input' 
                    onChange={handleChange} 
                    type='password' 
                    placeholder='Password'
                    name="password"
            />
          </div>
          <div className='form-group row'>
            <button className='btn' type='submit'>
              {
                isSignup? ("Register"):("LogIn")
              }
            </button>
          </div>
          
        </Form>
        <div className='row fb'>
            <button className='fbb' onClick={switchMode}>     

               {
                 isSignup ? ("Already have an account? Login") : ("Don't have Account? Sign up")
               }
            </button>
          </div>
        </div>
    )
}

export default LogIn;