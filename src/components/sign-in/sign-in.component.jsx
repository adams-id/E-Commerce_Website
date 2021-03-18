import React from 'react';
import './sign-in.styles.scss';
import FormInput from  '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth , signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = { //data required from the user to be input
            email: '',
            password: '',
        }

    }
    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state; //destruture from this.state above so it can be used in this method.
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.log(error);
        };
        this.setState({email:'', password: ''}); //go back to original state after signing in
    };

    handleChange = event => {
        const{value,name} = event.target;
        this.setState ({[name]: value});
    };

    render(){
        return( //integrating Google Sign In too with the second Custom Button
            <div className='sign-in'>
                <h2> I already have an account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='email' required />
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                          Sign in with Google 
                        </CustomButton>
                    </div> 
                </form> 
            </div> //form requirements. type is the actual object that jsx allows to show the kind of input data we want
        );
    }
}

export default SignIn;