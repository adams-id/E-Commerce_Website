import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils.js';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = { //data required from the user. State we want the user to update
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async event => { //this is the submit reuirements
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state; //destructure the input gotten from this.state

        if (password !== confirmPassword ) { //check if password inputed match on the signup page
            alert("Passwords don't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email , password);
            createUserProfileDocument(user, {displayName}); //create a profile for the user 
            this.setState({ //go back to the original state after user has subkitted the signup details
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error){
            console.error(error);
        }
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value});
    };

    render(){
        const { displayName, email, password, confirmPassword } = this.state; //destructure so we can use the array from this.state created initially
        return(
            <div className = 'sign-up'>
                <h2> I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}> 
                    <FormInput name='displayName' type='text' value={displayName} label='Display Name' onChange={this.handleChange} required /> 
                    <FormInput name='email' type='email' value={email} label='Email' onChange={this.handleChange} required />
                    <FormInput name='password' type='password' value={password} label='Password' onChange={this.handleChange} required />
                    <FormInput name='confirmPassword' type='password' value={confirmPassword} label='Confirm Password' onChange={this.handleChange} required />
                    <CustomButton type='submit'>SIGN UP</CustomButton>                
                </form> 
            </div> //the form document containing the necessary input slots for the user requirements.
        );
    }
}

export default SignUp;