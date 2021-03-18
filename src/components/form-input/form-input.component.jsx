import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => ( //destructure from the Form page to be able to use the props
    <div className='group'>
        <input className = 'form-input' onChange={handleChange} {...otherProps} />
        { //Here, shrink the actual text in the label text when user clicks there else label nothing
            label ?
            (<label className={`${otherProps.value.length ? 'shrink': ''} form-input-label`}>
                {label}
            
            </label>)
            : null
        }
    
    </div>
);

export default FormInput;