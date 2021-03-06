import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle} from '../../firebase/firebase.utils.js';
import './sign-in.styles.scss';

class SignIn extends React.Component{
constructor(props){
  super(props);

  this.state={
      email: '',
      password: ''
  }
}


handleSubmit = event =>{
  event.preventDefault();

  const { email, password} = this.state;

  try{
     auth.signInWithEmailAndPassword(email, password);
    this.setState({ email:', password:'});
  }catch(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === "auth/wrong-password") {
      alert("Wrong password.");
    } else {
      alert(errorMessage);
    }
    console.log(error);
  }
 
   
}

handleChange =event =>{
  const { value, name} = event.target;

  this.setState({[name]: value});
}

    render(){
        return (
          <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
              <FormInput
                name="email"
                value={this.state.email}
                handleChange={this.handleChange}
                label="email"
                required
              />
              <FormInput
                name="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="password"
                required
              />
              <div className='button'>
              <CustomButton type="submit">Sign In</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                {" "}
                Sign In with Google{" "}
              </CustomButton>
              </div>
            </form>
          </div>
        );
    }

}

export default SignIn;