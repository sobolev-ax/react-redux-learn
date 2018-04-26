import React from 'react'

const AddPhoneNumber = ({addNumber}) => {
    let _color, _name, _phone;
    const submit = e => {
        e.preventDefault();

        addNumber(_name.value, _phone.value, _color.value)

        _color.value = '#000000';
        _name.value = '';
        _phone.value = '';
        _name.focus();
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input ref={input => _color = input} type="color" required/>
                <input ref={input => _name = input} type="text" placeholder="First Name" required/>
                <input ref={input => _phone = input} type="text" placeholder="Phone Number" required/>
                <button type="submit">+</button>
            </form>
        </div>
    )
}


export default AddPhoneNumber;
