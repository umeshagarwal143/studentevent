import React, {useState} from 'react'
import './Registrationform.css';
import eventDetails from './cardapi';

const Registrationform = () => {
    const [adata,asetData] = useState(eventDetails);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        event: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        
    };

    const validateForm = () => {
        let errors = {};

        if (!form.name) {
            errors.name = '!Name is required';
        }
        else if (form.name.length<3){
            errors.name='!Enter a valid name';
        }

        if (!form.email) {
            errors.email = '!Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = '!Email is invalid';
        }

        if (!form.phone) {
            errors.phone = '!Phone number is required';
        } else if (!/^\d{10}$/.test(form.phone)) {
            errors.phone = '!Phone number is invalid or less than 10 digits';
        }

        if (!form.event) {
            errors.event = '!Event is required';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            alert('Registration successful');
            setForm({ name: '', email: '', phone: '', event: '' });
            setErrors({});
        }
    };
  return (
    <div className='container'>
        <h1 ><a id="registration-forms">Event Registration</a> </h1>
        <form onSubmit={handleSubmit} class='registration-form'>
            <h3>Register Now!</h3>
            <br/>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
            {errors.name && <p className='error'>{errors.name}</p>}
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
            {errors.email && <p className='error'>{errors.email}</p>}
            <br />
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone" value={form.phone} onChange={handleChange} />
            {errors.phone && <p className='error'>{errors.phone}</p>}
            <br />
            <label htmlFor="event">Event:</label>
            <select id="event" name="event" value={form.event} onChange={handleChange}>
            <option value="">Select an event</option>
                {
                     adata.map((curElem)=>{
                        
                        return < option value={curElem.title}>{curElem.title}</option>
                      })

                }
            </select>
            {errors.event && <p className='error'>{errors.event}</p>}
            <br />
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Registrationform
