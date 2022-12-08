import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("myyvrnpk");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    
      <form onSubmit={handleSubmit} className='form'>
      <div className='form-container'>
        <label htmlFor="name" className='form-info'>
            Name
        </label>
        <input
            id="name"
            type="name" 
            name="name"
            className='form-input-info'
            placeholder='Khiem Le'
        />
        <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
        />
      </div>
      <div className='form-container'>
      <label htmlFor="email" className='form-info'>
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className='form-input-info'
        placeholder='abc@domain.xyz'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div className='form-container'>
      <label htmlFor='message' className='form-info'>Message</label>  
      <textarea
        className='form-input'
        id="message"
        name="message"
        placeholder='I am open to any interesting work or collarboration opportunities'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <div className='form-container'>
      <button type="submit" disabled={state.submitting} className='form-button'>
        Submit
      </button>
      </div>
    </form>
    
  );
}
export default ContactForm;