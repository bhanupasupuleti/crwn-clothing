import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    state={
        email:'',
        password:''
    }
    handleSubmit= async e=>{
        e.preventDefault();
        const {email,password}=this.state
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        } catch (error) {
            console.log(error)
        }
    }
    handleChange=e=>{
        const {value,name}=e.target
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>
                    I already have an account 
                </h2>
                <span>
                    Sign in with your email and password
                </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} label='Email' handleChange={this.handleChange} required />
                    <FormInput name='password' type='password' value={this.state.password} label='Passowrd' handleChange={this.handleChange} required />
                    <div className='buttons'>
                        <CustomButton type='submit' value='Submit Form' >
                            Sign In
                        </CustomButton>
                        <CustomButton type='button' value='Submit Form' isGoogleSignIn onClick={signInWithGoogle} >
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
                
            </div>
        )
    }
}
 export default SignIn;